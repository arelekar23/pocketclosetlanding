import { Users, Share2, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const SocialCloset = () => {
  return (
    <div className="pb-12 md:pb-20 bg-white">
      <div className="container mx-auto px-4 pt-12 md:pt-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">Share Closets</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Create your inner circle of fashion-forward friends and family. Share, rent, or buy pieces from each other's closets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
          <div className="relative group">
            <div className="relative bg-white p-4 md:p-8 rounded-2xl shadow-xl">
              <div className="flex flex-col items-center space-y-4 md:space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden">
                    <img 
                      src="/lovable-uploads/42f9c9dc-0edf-4f2a-a57a-e09d93d48e40.png" 
                      alt="Elegant dresses on hangers" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden">
                    <img 
                      src="/lovable-uploads/ebe0c510-5c30-4537-9d85-b8bb717e996f.png" 
                      alt="Sparkly dresses collection" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <Button className="bg-gray-400 hover:bg-gray-500 text-white w-full md:w-auto">
                  Start Sharing <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="bg-gradient-to-r from-gray-100 to-gray-50 p-4 md:p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold mb-2">Share & Discover</h4>
                  <p className="text-sm md:text-base text-gray-600">Browse through your friends' closets and share yours. Perfect for special occasions or trying new styles.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-100 to-gray-50 p-4 md:p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                  <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold mb-2">Smart Recommendations</h4>
                  <p className="text-sm md:text-base text-gray-600">Get AI-powered suggestions for pieces that would complete your wardrobe based on your style and preferences.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-100 to-gray-50 p-4 md:p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                  <Share2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold mb-2">Rent, Buy & Sell</h4>
                  <p className="text-sm md:text-base text-gray-600">Easily rent or purchase items from your circle. Sustainable fashion that's good for your wallet and the planet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};