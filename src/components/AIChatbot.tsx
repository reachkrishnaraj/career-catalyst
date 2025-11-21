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
          className="bg-accent text-accent-foreground rounded-l-lg p-4 shadow-2xl hover:scale-110 transition-all group relative overflow-hidden border-2 border-accent/20"
        >
          {/* Yellow glow effect */}
          <div className="absolute inset-0 rounded-l-lg bg-accent opacity-50 blur-xl animate-[pulse_2s_ease-in-out_infinite]" />
          
          {/* Bot icon with magic sparkles */}
          <div className="relative">
            <Bot className="h-7 w-7 drop-shadow-lg filter contrast-125 brightness-110" strokeWidth={2.5} />
            
            {/* Pulsing indicator */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-background opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-background border-2 border-accent"></span>
            </span>
            
            {/* Magic sparkle effects with better contrast */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-background rounded-full animate-ping shadow-lg"></div>
              <div className="absolute top-2 -right-1 w-1 h-1 bg-background/80 rounded-full animate-pulse shadow-md" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute -bottom-1 left-0 w-1.5 h-1.5 bg-background rounded-full animate-ping shadow-lg" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-2 right-1 w-1 h-1 bg-background/80 rounded-full animate-pulse shadow-md" style={{ animationDelay: '0.7s' }}></div>
              <div className="absolute top-0 left-2 w-0.5 h-0.5 bg-background rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute -top-2 left-0 w-1 h-1 bg-background/90 rounded-full animate-pulse shadow-md" style={{ animationDelay: '0.9s' }}></div>
            </div>
          </div>
          
          {/* AI label on hover */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            <div className="bg-accent text-accent-foreground px-3 py-2 rounded-lg text-sm font-bold shadow-2xl border border-accent/30">
              Ask AI Assistant ✨
            </div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="mr-0 w-96 h-[600px] flex flex-col shadow-2xl animate-scale-in relative bg-background rounded-l-lg border-accent/20">
          {/* Glow effect around window */}
          <div className="absolute -inset-1 bg-accent/10 rounded-lg blur-lg -z-10" />
          
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-accent/5 relative overflow-hidden">
            <div className="flex items-center gap-2 relative">
              <div className="relative">
                <Bot className="h-6 w-6 text-accent" strokeWidth={2.5} />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
              </div>
              <h3 className="font-bold text-foreground">AI Assistant ✨</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="relative hover:bg-accent/10"
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
                      ? "bg-accent text-accent-foreground"
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
