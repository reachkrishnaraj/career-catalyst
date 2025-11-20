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
          isExpanded ? "w-40" : "w-0"
        }`}
      >
        <div className="p-3 whitespace-nowrap">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-xs">Resume</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="hover:opacity-70 transition-opacity"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
          <Button
            onClick={handleDownload}
            variant="secondary"
            size="sm"
            className="w-full text-xs"
          >
            <FileDown className="h-3 w-3 mr-1" />
            Download
          </Button>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-primary text-primary-foreground p-2 rounded-r-lg shadow-lg hover:scale-110 transition-all duration-300 group relative"
      >
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/60 via-accent/60 to-primary/60 opacity-75 blur-md rounded-r-lg -z-10 animate-[pulse_2s_ease-in-out_infinite]" />
        
        <div className="relative">
          <FileDown className="h-4 w-4" />
        </div>

        {/* Tooltip on hover */}
        {!isExpanded && (
          <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            <div className="bg-foreground text-background px-2 py-1 rounded-lg text-xs font-medium shadow-lg">
              Download Resume
            </div>
          </div>
        )}
      </button>
    </div>
  );
};

export default FloatingResumeDownload;
