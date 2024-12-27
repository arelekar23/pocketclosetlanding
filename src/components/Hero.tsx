import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="pt-32 pb-20 px-4 bg-gradient-to-br from-white via-secondary-light to-primary-light">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-up">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-accent font-semibold">The Future of Fashion is Here</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-accent via-primary to-accent-light">
              Your AI-Powered Fashion Revolution
            </h1>
            <p className="text-xl text-black mb-8 max-w-2xl">
              Transform your wardrobe with AI-powered styling, sustainable fashion sharing, and a community that celebrates your unique style. Welcome to the future of fashion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white text-lg px-8 py-6 flex items-center gap-2 shadow-lg shadow-primary/20">
                Join Now <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-2 border-primary text-black hover:bg-primary/10">
                See How It Works
              </Button>
            </div>
          </div>
          <div className="flex-1 animate-fade-in relative group">
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-accent/20 rounded-full blur-xl group-hover:bg-accent/30 transition-colors duration-300"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-colors duration-300"></div>
            
            {/* Decorative Elements */}
            <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl -rotate-3 transform transition-transform group-hover:rotate-0 duration-300"></div>
            <div className="absolute inset-0 border-2 border-accent/20 rounded-2xl rotate-3 transform transition-transform group-hover:rotate-0 duration-300"></div>
            
            <img
              src="/lovable-uploads/1ef52f1a-36ec-4fed-a4b7-99eab53a42c8.png"
              alt="Luxurious organized closet with LED lighting"
              className="rounded-2xl shadow-2xl w-full max-w-[600px] mx-auto relative z-10 transform transition-transform duration-300 group-hover:scale-[1.02]"
            />
            
            {/* Glowing Accent Lines */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-32 bg-gradient-to-r from-accent/40 to-primary/40 rounded-r-lg blur-sm"></div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-32 bg-gradient-to-l from-accent/40 to-primary/40 rounded-l-lg blur-sm"></div>
            
            {/* Tech Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl mix-blend-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};