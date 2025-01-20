import { Upload, Search, Tags, Brain, Camera, Smartphone, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export const AiFeatures = () => {
  const [activeMessage, setActiveMessage] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const messages = [
    "Your collection features a strong evening wear focus with luxury pieces",
    "Let me analyze the color palette for you...",
    "I suggest adding more casual pieces to balance your wardrobe"
  ];

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (currentIndex < messages[activeMessage].length) {
          currentText += messages[activeMessage][currentIndex];
          setDisplayedText(currentText);
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
          // Move to next message after a delay
          setTimeout(() => {
            setIsTyping(true);
            setActiveMessage((prev) => (prev + 1) % messages.length);
            setDisplayedText("");
          }, 3000);
        }
      }, 50); // Adjust typing speed here

      return () => clearInterval(typingInterval);
    }
  }, [activeMessage, isTyping]);

  return (
    <section id="ai-features" className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Image Card with Integrated AI Stylist */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden group">
              <div className="relative h-[600px] lg:h-[800px]">
                <img
                  src="/lovable-uploads/d56eb6dc-a221-40c5-848a-572d38153771.png"
                  alt="Sparkly silver dress"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* AI Chat Interface Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
                    {/* Style Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["Sparkly", "Evening Wear", "Luxury"].map((tag, index) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium 
                            text-gray-800 border border-primary hover:bg-white hover:scale-105 
                            transition-all cursor-pointer animate-fade-in"
                          style={{ animationDelay: `${index * 200}ms` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* AI Chat Bubbles */}
                    <div className="space-y-3 max-w-xl">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0
                          animate-bounce">
                          <Brain className="w-4 h-4 text-white" />
                        </div>
                        <div className="p-4 bg-white/90 backdrop-blur-sm rounded-2xl rounded-tl-none
                          transform transition-all duration-300 hover:scale-102 hover:shadow-lg">
                          <p className="text-gray-800 text-sm">
                            {displayedText}
                            {isTyping && <span className="animate-pulse">|</span>}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-4 h-4 text-white animate-spin-slow" />
                        </div>
                        <div className="p-4 bg-white/90 backdrop-blur-sm rounded-2xl rounded-tl-none
                          transform transition-all duration-300 hover:scale-102 hover:shadow-lg">
                          <h4 className="text-gray-800 font-semibold mb-2">Color Palette</h4>
                          <div className="flex gap-2">
                            {[
                              { color: "#D946EF", name: "Pink" },
                              { color: "#222222", name: "Black" },
                              { color: "#8A898C", name: "Gray" },
                              { color: "#FFDEE2", name: "Soft Pink" }
                            ].map((color, index) => (
                              <div
                                key={color.name}
                                className="group relative cursor-pointer transform transition-all duration-300 hover:scale-110"
                              >
                                <div 
                                  className="w-6 h-6 rounded-full ring-2 ring-white"
                                  style={{ backgroundColor: color.color }}
                                />
                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white
                                  opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                  {color.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Features */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {/* Visual Search Box */}
            <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-neutral">Visual Search</h3>
                <Search className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-3">
                <div className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all cursor-pointer border border-transparent hover:border-primary/20">
                  <div className="flex items-center gap-3">
                    <Search className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <p className="text-gray-600">"Find my sparkly party dress"</p>
                  </div>
                  <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm group-hover:bg-primary/20">
                    Found in Evening Wear
                  </span>
                </div>

                <div className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all cursor-pointer border border-transparent hover:border-primary/20">
                  <div className="flex items-center gap-3">
                    <Search className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <p className="text-gray-600">"Show similar black dresses"</p>
                  </div>
                  <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm group-hover:bg-primary/20">
                    6 items found
                  </span>
                </div>
              </div>
            </div>

            {/* Easy Upload Box */}
            <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-neutral">Easy Upload</h3>
                <div className="flex gap-3">
                  <Camera className="w-6 h-6 text-primary" />
                  <Upload className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="group flex items-center gap-2 px-4 py-2 bg-secondary/30 rounded-full text-sm hover:bg-primary/10 transition-colors">
                  <Camera className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span>Camera</span>
                </button>
                <button className="group flex items-center gap-2 px-4 py-2 bg-secondary/30 rounded-full text-sm hover:bg-primary/10 transition-colors">
                  <Upload className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span>Gallery</span>
                </button>
                <button className="group flex items-center gap-2 px-4 py-2 bg-secondary/30 rounded-full text-sm hover:bg-primary/10 transition-colors">
                  <Tags className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span>URL Import</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
