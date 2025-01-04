import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="pt-32 pb-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-up">
            <div className="inline-block mb-4 px-4 py-2 bg-gray-50 rounded-full border border-[#D946EF]">
              <span className="text-gray-800 font-semibold">Coming Soon to App Store</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-black">
              AI-Powered Fashion Within Your Circle
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Maximize your wardrobe's potential with AI styling, rent or sell unused pieces, and style others.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#D946EF] hover:bg-[#D946EF]/90 text-white text-lg px-8 py-6 flex items-center gap-2">
                Join Now <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-2 border-[#D946EF] text-[#D946EF] hover:bg-[#D946EF]/10">
                See How It Works
              </Button>
            </div>
          </div>
          <div className="flex-1 animate-fade-in">
            <img
              src="/lovable-uploads/1ef52f1a-36ec-4fed-a4b7-99eab53a42c8.png"
              alt="Luxurious organized closet with LED lighting"
              className="rounded-2xl shadow-2xl w-full max-w-[600px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};