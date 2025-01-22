import { Upload, Search, Tags, Brain, Camera, Smartphone, Users, ShoppingCart, Share2, MapPin, Heart, Navigation } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const AI_MESSAGES = [
  "Based on tonight's forecast (62°F with light rain), I recommend adding a light jacket and switching to closed-toe shoes. Here are some options from your closet:",
  "For tonight's weather, you might want to add a waterproof layer. I found these matching pieces in your wardrobe:",
  "The temperature will drop to 58°F tonight. Consider adding these warm accessories from your collection:",
];

export const AiFeatures = () => {
  const [activeMessage, setActiveMessage] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const typeMessage = useCallback(() => {
    setDisplayedText("");
    setIsTyping(true);
    let currentText = "";
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < AI_MESSAGES[activeMessage].length) {
        currentText += AI_MESSAGES[activeMessage][currentIndex];
        setDisplayedText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        setTimeout(() => {
          setActiveMessage((prev) => (prev + 1) % AI_MESSAGES.length);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [activeMessage]);

  useEffect(() => {
    const cleanup = typeMessage();
    return cleanup;
  }, [activeMessage, typeMessage]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Wardrobe Assistant
          </h2>
          <p className="text-lg text-gray-600">
            Experience the future of wardrobe management with our intelligent AI features.
          </p>
        </div>

        {/* AI Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto mb-20">
          {/* Left Side - Chat Demo */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="relative">
              <img
                src="/lovable-uploads/d56eb6dc-a221-40c5-848a-572d38153771.png"
                alt="Sparkly silver dress"
                className="w-full h-[400px] object-cover"
              />
              
              {/* AI Chat Interface */}
              <div className="p-4 pb-0">
                {/* User Message */}
                <div className="flex justify-end gap-3 mb-3">
                  <div className="p-4 bg-primary/10 backdrop-blur-sm rounded-2xl rounded-tr-none">
                    <p className="text-gray-800 text-sm">
                      How can I improve this outfit for the weather tonight?
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div className="p-4 bg-white shadow-sm rounded-2xl rounded-tl-none">
                    <p className="text-gray-800 text-sm mb-3">
                      {displayedText}
                      {isTyping && <span className="animate-pulse">|</span>}
                    </p>
                    
                    {/* Single Suggested Item */}
                    <div className="mb-3">
                      <div className="aspect-square max-w-[200px] bg-neutral-100 rounded-lg overflow-hidden
                        shadow-sm hover:shadow-md transition-all duration-300">
                        <img
                          src="/furcoat.jpg"
                          alt="Warm fur coat"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {["Weather-Ready", "Layered", "Cozy"].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Features */}
          <div className="space-y-6">
            {/* Visual Search Feature */}
            <div className="bg-white p-6 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visual Search</h3>
              <div className="space-y-3">
                <div className="group p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Search className="w-5 h-5 text-primary" />
                    <p className="text-gray-600">"Find my sparkly party dress"</p>
                  </div>
                  <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Found in Evening Wear
                  </span>
                </div>
              </div>
            </div>

            {/* Easy Upload Feature */}
            <div className="bg-white p-6 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Easy Upload</h3>
              <div className="flex flex-wrap gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-secondary/30 rounded-full text-sm">
                  <Camera className="w-4 h-4 text-primary" />
                  <span>Camera</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-secondary/30 rounded-full text-sm">
                  <Upload className="w-4 h-4 text-primary" />
                  <span>Gallery</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-secondary/30 rounded-full text-sm">
                  <Tags className="w-4 h-4 text-primary" />
                  <span>URL Import</span>
                </button>
              </div>
            </div>

            {/* Local Fashion Community with Map */}
            <div className="bg-white p-6 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Discover Local Fashion Community</h3>
              <p className="text-gray-600 text-sm mb-6">
                Connect with fashion enthusiasts in your area. Browse, shop, and rent from curated closets near you.
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-2 group cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-all duration-300">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0
                    group-hover:scale-110 transition-transform duration-300">
                    <ShoppingCart className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Shop Local</h4>
                    <p className="text-xs text-gray-600">Buy pre-loved fashion items</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 group cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-all duration-300">
                  <div className="w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0
                    group-hover:scale-110 transition-transform duration-300">
                    <Share2 className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Rent & Share</h4>
                    <p className="text-xs text-gray-600">Borrow designer pieces</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 group cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-all duration-300">
                  <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center shrink-0
                    group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Community</h4>
                    <p className="text-xs text-gray-600">Connect with verified users</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 group cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-all duration-300">
                  <div className="w-8 h-8 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0
                    group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-4 h-4 text-indigo-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Local Discovery</h4>
                    <p className="text-xs text-gray-600">Find nearby unique pieces</p>
                  </div>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="aspect-square relative bg-gray-50 rounded-2xl overflow-hidden">
                <img 
                  src="/map-background1.png" 
                  alt="Map showing local closets" 
                  className="absolute inset-0 h-full w-full object-cover"
                />
                
                {/* Location Indicator */}
                <div className="absolute top-4 right-4 group z-20">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 
                    rounded-full shadow-lg hover:bg-white transition-all duration-300 cursor-pointer">
                    <Navigation className="w-4 h-4 text-primary animate-pulse" />
                    <span className="text-sm font-medium text-gray-800">Boston</span>
                  </div>
                </div>

                {/* Activity Bubbles - Centered */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-8 z-10">
                  {[
                    { icon: Heart, color: "primary", count: "3", label: "shared items", position: "-translate-y-12" },
                    { icon: ShoppingCart, color: "accent", count: "5", label: "for sale", position: "translate-x-12" },
                    { icon: Share2, color: "secondary", count: "2", label: "rentals", position: "-translate-y-12 translate-x-24" }
                  ].map((item, i) => (
                    <div key={i} className={`group cursor-pointer ${item.position}`}>
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center
                          hover:scale-110 transition-all duration-300">
                          <div className={`w-10 h-10 rounded-full bg-${item.color}/20 hover:bg-${item.color}/30 
                            flex items-center justify-center transition-all duration-300`}>
                            <item.icon className={`w-5 h-5 text-${item.color}`} />
                          </div>
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 mt-2 pointer-events-none
                          bg-white rounded-lg shadow-lg px-3 py-1.5 opacity-0 group-hover:opacity-100 
                          transition-opacity whitespace-nowrap top-full">
                          <p className="text-sm">
                            <span className="font-medium">{item.count}</span> {item.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 rounded-t-2xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Heart className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-sm font-medium">150+ closets near you</p>
                    </div>
                    <button className="text-sm text-primary font-medium hover:underline">
                      View All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
