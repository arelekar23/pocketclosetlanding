import { Users, Share2, ShoppingCart, ArrowRight, MapPin, DollarSign, Heart, Navigation, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

export const SocialCloset = () => {
  return (
    <div className="pb-12 md:pb-20 bg-white">
      <div className="container mx-auto px-4 pt-12 md:pt-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">
            Explore local closets
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mb-12 md:mb-20">
          {/* Left Side - Interactive Map */}
          <div className="relative order-1 md:order-1">
            <div className="relative bg-white p-4 md:p-8 rounded-3xl shadow-xl">
              <div className="aspect-square relative bg-gray-50 rounded-2xl overflow-hidden">
                {/* Map Background */}
                <div className="absolute inset-0 flex justify-end">
                  <img 
                    src="/map-background1.png" 
                    alt="Map background" 
                    className="h-full object-cover"
                  />
                </div>

                {/* Location Indicator */}
                <div className="absolute top-3 md:top-4 right-3 md:right-4 group z-20">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 
                    rounded-full shadow-lg hover:bg-white transition-all duration-300 cursor-pointer">
                    <Navigation className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary animate-pulse" />
                    <span className="text-xs md:text-sm font-medium text-gray-800">Boston</span>
                  </div>
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-lg p-2 md:p-3 
                    opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <p className="text-xs md:text-sm font-medium whitespace-nowrap">Your current location</p>
                  </div>
                </div>

                {/* Activity Bubbles - Made rounder and more responsive */}
                <div className="absolute top-1/3 left-1/4 md:left-1/3 group cursor-pointer z-10">
                  <div className="relative">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 group-hover:bg-primary/30 
                      transition-all duration-300 flex items-center justify-center">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary 
                        flex items-center justify-center shadow-lg">
                        <Heart className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl shadow-lg p-3 
                      opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <p className="text-sm font-medium whitespace-nowrap">3 items shared nearby</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/4 right-1/5 md:right-1/4 group cursor-pointer z-10">
                  <div className="relative">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/20 group-hover:bg-accent/30 
                      transition-all duration-300 flex items-center justify-center">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent 
                        flex items-center justify-center shadow-lg">
                        <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl shadow-lg p-3 
                      opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <p className="text-sm font-medium whitespace-nowrap">5 items for sale</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-1/4 right-1/4 md:right-1/3 group cursor-pointer z-10">
                  <div className="relative">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/20 group-hover:bg-secondary/30 
                      transition-all duration-300 flex items-center justify-center">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary 
                        flex items-center justify-center shadow-lg">
                        <Share2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl shadow-lg p-3 
                      opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <p className="text-sm font-medium whitespace-nowrap">2 rental requests</p>
                    </div>
                  </div>
                </div>

                {/* Current Location Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 animate-ping"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg 
                      flex items-center justify-center">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Map Legend - Inside Map */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 rounded-b-2xl">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <Heart className="w-3 h-3 text-primary" />
                      </div>
                      <p className="text-xs text-gray-800">
                        <span className="font-medium">Shared Items</span>
                        <span className="hidden sm:inline"> • Community shares</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                        <DollarSign className="w-3 h-3 text-accent" />
                      </div>
                      <p className="text-xs text-gray-800">
                        <span className="font-medium">Items for Sale</span>
                        <span className="hidden sm:inline"> • Available now</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Share2 className="w-3 h-3 text-secondary" />
                      </div>
                      <p className="text-xs text-gray-800">
                        <span className="font-medium">Rental Requests</span>
                        <span className="hidden sm:inline"> • Available to rent</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                {/* <Button className="bg-black hover:bg-black/90 text-white font-semibold text-base">
                  Connect with Nearby Users <ArrowRight className="ml-2 h-4 w-4" />
                </Button> */}
              </div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="space-y-4 md:space-y-6 order-2 md:order-2">
            {/* Local Fashion Community Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-transparent 
                rounded-2xl blur opacity-75 transition duration-500" />
              <div className="relative bg-gradient-to-r from-primary/5 to-transparent p-4 md:p-6 rounded-2xl 
                from-primary/10 transition-all duration-300 shadow-lg">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 
                    flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-primary animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Local Fashion Community</h4>
                    <p className="text-sm md:text-base text-gray-700">
                      Connect with fashion enthusiasts in your area. Share styles, get inspiration, and build your network.
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-primary font-medium">
                      <span>150+ users nearby</span>
                      <div className="flex -space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-6 h-6 rounded-full border-2 border-white 
                            bg-primary/20 flex items-center justify-center">
                            <Users className="w-3 h-3 text-primary" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buy & Sell Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 to-transparent 
                rounded-2xl blur opacity-75 transition duration-500" />
              <div className="relative bg-gradient-to-r from-accent/5 to-transparent p-4 md:p-6 rounded-2xl 
                from-accent/10 transition-all duration-300 shadow-lg">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/10 
                    flex items-center justify-center shrink-0">
                    <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-accent animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Buy & Sell</h4>
                    <p className="text-sm md:text-base text-gray-700">
                      Trade fashion items with verified users in your area. Safe, secure, and sustainable shopping.
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-accent font-medium">
                      <span>25+ items for sale</span>
                      <div className="h-1.5 w-1.5 rounded-full bg-accent/50" />
                      <span>10+ recent trades</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rent & Share Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 to-transparent 
                rounded-2xl blur opacity-75 transition duration-500" />
              <div className="relative bg-gradient-to-r from-indigo-500/5 to-transparent p-4 md:p-6 rounded-2xl 
                from-indigo-500/10 transition-all duration-300 shadow-lg">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-indigo-500/10 
                    flex items-center justify-center shrink-0">
                    <Share2 className="w-5 h-5 md:w-6 md:h-6 text-indigo-500 animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Rent & Share</h4>
                    <p className="text-sm md:text-base text-gray-700">
                      Rent designer pieces or share your collection. Perfect for special occasions and trying new styles.
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-indigo-500 font-medium">
                      <span>15+ items available</span>
                      <div className="h-1.5 w-1.5 rounded-full bg-indigo-500/50" />
                      <span>Active rentals: 8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};