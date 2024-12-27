import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold text-neutral mb-6 leading-tight">
              Your AI-Powered Fashion Community
            </h1>
            <p className="text-xl text-neutral-light mb-8 max-w-2xl">
              Discover, rent, and share fashion within your trusted circles. Get personalized AI outfit recommendations and build your sustainable wardrobe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-6 flex items-center gap-2">
                Join Now <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6">
                See How It Works
              </Button>
            </div>
          </div>
          <div className="flex-1 animate-fade-in">
            <img
              src="/lovable-uploads/92d4af72-bed0-4d37-945b-732b0821f80c.png"
              alt="Stylish outfit inspiration"
              className="rounded-2xl shadow-xl w-full max-w-[500px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};