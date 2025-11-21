import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const suggestedQuestions = [
    "Where is Krishna located?",
    "How to contact Krishna?",
    "Send a message to Krishna",
    "Did Krishna have experience in Spring Boot?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const streamChat = async (userMessage: string) => {
    const chatUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;
    
    setIsLoading(true);
    let assistantMessage = "";

    try {
      const response = await fetch(chatUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: [...messages, { role: "user", content: userMessage }] }),
      });

      if (!response.ok) {
        if (response.status === 429) {
          toast({
            title: "Rate Limit",
            description: "Too many requests. Please try again later.",
            variant: "destructive",
          });
          return;
        }
        if (response.status === 402) {
          toast({
            title: "Service Unavailable",
            description: "AI service requires additional credits.",
            variant: "destructive",
          });
          return;
        }
        throw new Error("Failed to start stream");
      }

      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let streamDone = false;

      // Add empty assistant message that we'll update
      setMessages(prev => [...prev, { role: "assistant", content: "" }]);

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") {
            streamDone = true;
            break;
          }

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantMessage += content;
              setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1] = {
                  role: "assistant",
                  content: assistantMessage,
                };
                return newMessages;
              });
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      // Remove the empty assistant message if error occurred
      setMessages(prev => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    
    await streamChat(userMessage);
  };

  const handleSuggestedQuestion = (question: string) => {
    setMessages(prev => [...prev, { role: "user", content: question }]);
    streamChat(question);
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[9999] flex items-center">
      {/* Chat Toggle Button with Magic Animation */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 text-white rounded-l-lg p-4 shadow-2xl hover:scale-110 transition-all animate-pulse group relative overflow-hidden border-2 border-white/20"
        >
          {/* Enhanced sparkle effects */}
          <div className="absolute inset-0 rounded-l-lg bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 opacity-75 blur-2xl animate-[spin_3s_linear_infinite]" />
          <div className="absolute -inset-1 rounded-l-lg bg-gradient-to-r from-cyan-300/80 via-blue-300/80 to-purple-400/80 opacity-90 blur-lg animate-[pulse_2s_ease-in-out_infinite]" />
          
          {/* Larger icon with AI badge */}
          <div className="relative">
            <Bot className="h-7 w-7 drop-shadow-lg" strokeWidth={2.5} />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-90"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-yellow-400 border-2 border-white"></span>
            </span>
          </div>
          
          {/* AI label on hover */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-2 rounded-lg text-sm font-bold shadow-2xl border border-white/30">
              Ask AI Assistant ✨
            </div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="mr-0 w-96 h-[600px] flex flex-col shadow-2xl animate-scale-in relative bg-background rounded-l-lg">
          {/* Glow effect around window */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg blur-lg -z-10 animate-[pulse_3s_ease-in-out_infinite]" />
          
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-600/10 relative overflow-hidden border-b-cyan-500/20">
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-blue-500/10 animate-[slide-in-right_3s_ease-in-out_infinite]" />
            
            <div className="flex items-center gap-2 relative">
              <div className="relative">
                <Bot className="h-6 w-6 text-cyan-500 animate-[pulse_2s_ease-in-out_infinite]" strokeWidth={2.5} />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-400"></span>
                </span>
              </div>
              <h3 className="font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">AI Assistant ✨</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="relative hover:bg-cyan-500/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Hi! I'm Krishna's AI assistant. Try asking:
                </p>
                {suggestedQuestions.map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="w-full text-left p-3 text-sm bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {messages.map((message, idx) => (
              <div
                key={idx}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </Card>
      )}
    </div>
  );
};

export default AIChatbot;
