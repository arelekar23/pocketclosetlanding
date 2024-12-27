import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="pt-32 pb-20 px-4 bg-gradient-to-br from-black via-accent-dark to-primary-dark">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-up">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-[#D946EF]/20 to-[#8B5CF6]/20 rounded-full border border-[#D946EF]/30">
              <span className="text-white font-semibold">AI-Powered Closet Maximizer</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-white to-[#F97316] animate-pulse">
              Your Personal AI Stylist & Closet Optimizer
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Maximize your wardrobe's potential with AI styling, rent or sell unused pieces, and style others. Transform your closet into a smart, sustainable fashion ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-[#8B5CF6] to-[#F97316] hover:opacity-90 text-white text-lg px-8 py-6 flex items-center gap-2 shadow-lg shadow-[#F97316]/20 border border-[#8B5CF6]/30">
                Join Now <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-2 border-[#8B5CF6] text-white hover:bg-[#8B5CF6]/20">
                See How It Works
              </Button>
            </div>
          </div>
          <div className="flex-1 animate-fade-in relative group">
            {/* High-tech frame elements */}
            <div className="absolute inset-0 border-2 border-[#8B5CF6]/30 rounded-2xl -rotate-3 transform transition-transform group-hover:rotate-0 duration-300"></div>
            <div className="absolute inset-0 border-2 border-[#F97316]/30 rounded-2xl rotate-3 transform transition-transform group-hover:rotate-0 duration-300"></div>
            
            {/* Main image */}
            <img
              src="/lovable-uploads/1ef52f1a-36ec-4fed-a4b7-99eab53a42c8.png"
              alt="Luxurious organized closet with LED lighting"
              className="rounded-2xl shadow-2xl w-full max-w-[600px] mx-auto relative z-10 transform transition-transform duration-300 group-hover:scale-[1.02]"
            />
            
            {/* High-tech overlay elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#8B5CF6]/50 rounded-tl-2xl"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#F97316]/50 rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#F97316]/50 rounded-bl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#8B5CF6]/50 rounded-br-2xl"></div>
            
            {/* Accent lines */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-32 bg-gradient-to-r from-[#8B5CF6]/40 to-[#F97316]/40 rounded-r-lg"></div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-32 bg-gradient-to-l from-[#8B5CF6]/40 to-[#F97316]/40 rounded-l-lg"></div>
            
            {/* Scanning effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D946EF]/10 to-transparent animate-scan"></div>
          </div>
        </div>
      </div>
    </div>
  );
};