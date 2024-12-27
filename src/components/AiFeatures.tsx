import { Upload, Search, Tags, Brain, Camera, Smartphone } from "lucide-react";

export const AiFeatures = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powered by Advanced AI</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Never lose track of your wardrobe again. Our AI helps you organize, tag, and search your entire closet effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="relative mb-8">
              <img
                src="/lovable-uploads/92d4af72-bed0-4d37-945b-732b0821f80c.png"
                alt="AI-powered closet organization"
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium">Dress</span>
                <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium">Formal</span>
                <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium">Red</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Smart Tagging</h3>
            <p className="text-gray-600 mb-6">
              Our AI automatically tags your clothes with details like color, style, occasion, and more. Making it easy to find exactly what you're looking for.
            </p>
            <div className="flex items-center gap-4 text-gray-500">
              <Tags className="w-6 h-6" />
              <Brain className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="relative mb-8">
              <img
                src="/lovable-uploads/b5f1f65e-8bdf-49cc-8d1d-ae3869a01a3b.png"
                alt="Multiple ways to upload"
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium">Camera</span>
                <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium">Gallery</span>
                <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium">URL</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Multiple Upload Options</h3>
            <p className="text-gray-600 mb-6">
              Add items to your digital closet in various ways - take photos directly, upload existing pictures, or import from your gallery.
            </p>
            <div className="flex items-center gap-4 text-gray-500">
              <Camera className="w-6 h-6" />
              <Upload className="w-6 h-6" />
              <Smartphone className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Smart Search</h3>
            <Search className="w-6 h-6 text-gray-500" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-600">"Show me all my red dresses"</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">3 items found</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-600">"What can I wear to a summer wedding?"</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">5 suggestions</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-600">"Find my blue jeans with rips"</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">2 items found</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};