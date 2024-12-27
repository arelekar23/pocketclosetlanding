import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-neutral">StyleCircle</div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-neutral hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#community" className="text-neutral hover:text-primary transition-colors">
            Community
          </a>
          <a href="#ai-styling" className="text-neutral hover:text-primary transition-colors">
            AI Styling
          </a>
          <Button className="bg-primary hover:bg-primary-dark text-white flex items-center gap-2">
            Get Started <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};