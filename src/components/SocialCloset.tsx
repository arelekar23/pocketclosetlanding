import { Users, Share2, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const SocialCloset = () => {
  return (
    <div className="pb-12 md:pb-20 bg-white">
      <div className="container mx-auto px-4 pt-12 md:pt-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">Share Closets</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Connect with family and friends to share, rent, or buy clothes while getting personalized AI recommendations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
            <div className="relative bg-white p-4 md:p-8 rounded-2xl shadow-xl">
              <div className="flex flex-col items-center space-y-4 md:space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/0cf1a32b-ecba-4534-a281-5a353cd4752f.png" 
                      alt="Luxury pink closet" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/3eebf933-a4c8-4b20-a87e-90b2583b9e37.png" 
                      alt="Modern organized closet" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Fashion Inner Circle</h3>
                <p className="text-gray-600 text-center text-sm md:text-base">
                  Create your inner circle of fashion-forward friends and family. Share, rent, or buy pieces from each other's closets.
                </p>
                <Button className="bg-black hover:bg-gray-800 text-white w-full md:w-auto">
                  Start Sharing <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="bg-gradient-to-r from-secondary/20 to-primary/20 p-4 md:p-6 rounded-xl">
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

            <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-4 md:p-6 rounded-xl">
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

            <div className="bg-gradient-to-r from-accent/20 to-secondary/20 p-4 md:p-6 rounded-xl">
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

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl"></div>
          <div className="relative bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</h3>
                <p className="text-sm md:text-base text-gray-600">Active Style Circles</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-accent mb-2">10k+</h3>
                <p className="text-sm md:text-base text-gray-600">Items Shared Monthly</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-pink-500 mb-2">95%</h3>
                <p className="text-sm md:text-base text-gray-600">Happy Fashion Enthusiasts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
