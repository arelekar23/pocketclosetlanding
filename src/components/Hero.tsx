import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="pt-32 pb-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-up">
            <div className="inline-block mb-4 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
              <span className="text-gray-800 font-semibold">AI-Powered Closet Maximizer</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
              Your Personal AI Stylist & Closet Optimizer
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Maximize your wardrobe's potential with AI styling, rent or sell unused pieces, and style others. Transform your closet into a smart, sustainable fashion ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-black hover:bg-gray-800 text-white text-lg px-8 py-6 flex items-center gap-2">
                Join Now <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-2 border-black text-black hover:bg-gray-50">
                See How It Works
              </Button>
            </div>
          </div>
          <div className="flex-1 animate-fade-in relative group">
            <div className="absolute inset-0 border-2 border-gray-200 rounded-2xl -rotate-3 transform transition-transform group-hover:rotate-0 duration-300"></div>
            <div className="absolute inset-0 border-2 border-gray-200 rounded-2xl rotate-3 transform transition-transform group-hover:rotate-0 duration-300"></div>
            
            <img
              src="/lovable-uploads/1ef52f1a-36ec-4fed-a4b7-99eab53a42c8.png"
              alt="Luxurious organized closet with LED lighting"
              className="rounded-2xl shadow-2xl w-full max-w-[600px] mx-auto relative z-10 transform transition-transform duration-300 group-hover:scale-[1.02]"
            />
            
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gray-200 rounded-tl-2xl"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gray-200 rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-gray-200 rounded-bl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gray-200 rounded-br-2xl"></div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-32 bg-gray-50 rounded-r-lg"></div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-32 bg-gray-50 rounded-l-lg"></div>
            
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/10 to-transparent animate-scan"></div>
          </div>
        </div>
      </div>
    </div>
  );
};