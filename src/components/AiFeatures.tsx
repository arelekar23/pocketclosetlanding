import { Upload, Search, Tags, Brain, Camera, Smartphone, Sparkles } from "lucide-react";

export const AiFeatures = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            AI-Powered Wardrobe Magic
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your closet into a smart, organized fashion hub with our advanced AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {/* Main Image Card */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="relative h-[500px] lg:h-[600px]">
                <img
                  src="/lovable-uploads/d56eb6dc-a221-40c5-848a-572d38153771.png"
                  alt="Sparkly silver dress"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 border border-[#D946EF]">Sparkly</span>
                    <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 border border-[#D946EF]">Evening Wear</span>
                    <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 border border-[#D946EF]">Luxury</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Smart Organization</h3>
                  <p className="text-white">
                    Our AI automatically categorizes your items by style, color, and occasion
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-neutral">Visual Search</h3>
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <p className="text-gray-600">"Find my green sequin dress"</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Found in Evening Wear</span>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <p className="text-gray-600">"Show sparkly accessories"</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">4 items found</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-neutral">Easy Upload</h3>
                  <div className="flex gap-3">
                    <Camera className="w-6 h-6 text-primary" />
                    <Upload className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Multiple ways to add items to your digital closet - snap a photo, upload from gallery, or import from URLs.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-secondary/30 rounded-full text-sm">Quick Snap</span>
                  <span className="px-3 py-1 bg-secondary/30 rounded-full text-sm">Batch Upload</span>
                  <span className="px-3 py-1 bg-secondary/30 rounded-full text-sm">URL Import</span>
                </div>
              </div>
            </div>
          </div>

        {/* Right Column - AI Insights */}
        <div className="bg-white p-8 rounded-3xl shadow-lg space-y-6 h-fit lg:sticky lg:top-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-neutral">AI Insights</h3>
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-4">
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h4 className="font-semibold mb-2">Style Analysis</h4>
              <p className="text-gray-600">Your collection features a strong evening wear focus with luxury pieces</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h4 className="font-semibold mb-2">Color Palette</h4>
              <div className="flex gap-2 mt-2">
                <div className="w-8 h-8 rounded-full bg-[#D946EF]" title="Pink"></div>
                <div className="w-8 h-8 rounded-full bg-[#222222]" title="Black"></div>
                <div className="w-8 h-8 rounded-full bg-[#8A898C]" title="Gray"></div>
                <div className="w-8 h-8 rounded-full bg-[#FFDEE2]" title="Soft Pink"></div>
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h4 className="font-semibold mb-2">Suggestions</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Add more casual pieces</li>
                <li>• Consider neutral accessories</li>
                <li>• Balance with daywear options</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
