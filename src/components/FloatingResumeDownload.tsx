import { useState } from "react";
import { FileDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateResumePDF } from "@/utils/resumeGenerator";
import { useToast } from "@/hooks/use-toast";

const FloatingResumeDownload = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { toast } = useToast();

  const handleDownload = () => {
    try {
      generateResumePDF();
      toast({
        title: "Success",
        description: "Resume downloaded successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download resume. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[100] flex items-center">
      {/* Expandable Panel */}
      <div
        className={`bg-primary text-primary-foreground shadow-xl transition-all duration-300 ease-in-out rounded-r-lg overflow-hidden ${
          isExpanded ? "w-48" : "w-0"
        }`}
      >
        <div className="p-4 whitespace-nowrap">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-sm">Download Resume</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="hover:opacity-70 transition-opacity"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <Button
            onClick={handleDownload}
            variant="secondary"
            size="sm"
            className="w-full"
          >
            <FileDown className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      {/* Burger Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`bg-primary text-primary-foreground p-3 rounded-r-lg shadow-lg hover:scale-110 transition-all duration-300 group relative ${
          isExpanded ? "ml-0" : "ml-0"
        }`}
      >
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/60 via-accent/60 to-primary/60 opacity-75 blur-md rounded-r-lg -z-10 animate-[pulse_2s_ease-in-out_infinite]" />
        
        <div className="relative flex flex-col gap-1">
          {/* Burger icon */}
          <div
            className={`w-6 h-0.5 bg-primary-foreground transition-all duration-300 ${
              isExpanded ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-primary-foreground transition-all duration-300 ${
              isExpanded ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-primary-foreground transition-all duration-300 ${
              isExpanded ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </div>

        {/* Tooltip on hover */}
        {!isExpanded && (
          <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            <div className="bg-foreground text-background px-3 py-1 rounded-lg text-sm font-medium shadow-lg">
              Download Resume
            </div>
          </div>
        )}
      </button>
    </div>
  );
};

export default FloatingResumeDownload;
