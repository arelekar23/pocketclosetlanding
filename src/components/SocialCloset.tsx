import { Users, Share2, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const SocialCloset = () => {
  return (
    <div className="pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Share Your Closet</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with family and friends to share, rent, or buy clothes while getting personalized AI recommendations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex flex-col items-center space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-48 h-48 rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/0cf1a32b-ecba-4534-a281-5a353cd4752f.png" 
                      alt="Luxury pink closet" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-48 h-48 rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/3eebf933-a4c8-4b20-a87e-90b2583b9e37.png" 
                      alt="Modern organized closet" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Your Style Circle</h3>
                <p className="text-gray-600 text-center">
                  Create your inner circle of fashion-forward friends and family. Share, rent, or buy pieces from each other's closets.
                </p>
                <Button className="bg-black hover:bg-gray-800 text-white">
                  Start Sharing <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-secondary/20 to-primary/20 p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Share & Discover</h4>
                  <p className="text-gray-600">Browse through your friends' closets and share yours. Perfect for special occasions or trying new styles.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                  <ShoppingCart className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Smart Recommendations</h4>
                  <p className="text-gray-600">Get AI-powered suggestions for pieces that would complete your wardrobe based on your style and preferences.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent/20 to-secondary/20 p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                  <Share2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Rent & Buy</h4>
                  <p className="text-gray-600">Easily rent or purchase items from your circle. Sustainable fashion that's good for your wallet and the planet.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl"></div>
          <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-100">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
                <p className="text-gray-600">Active Style Circles</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-accent mb-2">10k+</h3>
                <p className="text-gray-600">Items Shared Monthly</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-secondary-dark mb-2">95%</h3>
                <p className="text-gray-600">Happy Fashion Enthusiasts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
