import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-muted z-[9998]">
      <div
        className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-200"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
