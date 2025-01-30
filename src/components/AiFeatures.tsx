import { Upload, Search, Tags, Brain, Camera, Smartphone, Users, ShoppingCart, Share2, MapPin, Heart, Navigation } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const AI_MESSAGES = [
  "For your dinner date tonight, I've put together this elegant outfit from your closet. The weather will be perfect (68°F), so this combination will keep you comfortable and stylish.",
  "I've selected this sophisticated ensemble based on your style preferences and the restaurant's dress code. The forecast shows clear skies and mild temperatures.",
  "This outfit from your wardrobe is perfect for a romantic dinner. The current temperature is 70°F with a gentle breeze, ideal for this look.",
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
    <section className="pt-16 pb-12 md:pt-24 md:pb-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Wardrobe Assistant
          </h2>
          <p className="text-lg text-gray-600">
            Experience the future of wardrobe management with our intelligent AI features.
          </p>
        </div>

        {/* AI Features Stack */}
        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {/* Chat Demo Box */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-fit">
            <div className="w-full h-auto flex items-center justify-center bg-gray-50">
              <img
                src="/Outfit.png"
                alt="AI recommended outfit"
                className="w-full h-auto object-contain max-h-[500px] py-4"
              />
            </div>
            
            <div className="p-4">
              {/* User Message */}
              <div className="flex justify-end gap-3 mb-3">
                <div className="p-4 bg-primary/10 backdrop-blur-sm rounded-2xl rounded-tr-none">
                  <p className="text-gray-800 text-sm">
                    What should I wear for my dinner date tonight?
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
                <div className="flex-1 p-3 bg-white shadow-sm rounded-2xl rounded-tl-none">
                  {/* AI Text Response */}
                  <p className="text-gray-800 text-sm mb-3">
                    {displayedText}
                    {isTyping && <span className="animate-pulse">|</span>}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-0">
                    {["Perfect for Date Night", "Weather-Appropriate", "Elegant"].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Search and Easy Upload Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Visual Search Feature */}
            <div className="bg-white p-6 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Visual Search</h3>
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
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Easy Upload</h3>
              <div className="flex flex-wrap gap-2 justify-center">
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
          </div>

          {/* Local Fashion Community */}
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Discover Local Fashion Community</h3>
            <p className="text-gray-600 text-sm mb-6 text-center">
              Connect with fashion enthusiasts in your area. Browse, shop, and rent from curated closets near you.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
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
          </div>
        </div>
      </div>
    </section>
  );
};
