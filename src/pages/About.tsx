import { ArrowRight } from "lucide-react";

export const About = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who We Are
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Revolutionizing fashion technology through AI innovation
          </p>
        </div>

        {/* University Logos */}
        <div className="flex justify-center items-center gap-12 mb-16">
          <div className="w-48 h-24 relative">
            <img
              src="/mitlogo.png"
              alt="MIT"
              className="h-full w-full object-contain hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="w-48 h-24 relative">
            <img
              src="/harvardlogo.jpg"
              alt="Harvard"
              className="h-full w-full object-contain hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>

        {/* About Us Section */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              MIT & Harvard Innovation
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              PocketCloset emerged from the innovative ecosystem of MIT and Harvard, 
              bringing together cutting-edge AI technology and fashion expertise. Our team 
              combines technical excellence with a deep understanding of the fashion industry 
              to create a revolutionary platform that transforms how people interact with their wardrobes.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">AI Technology</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">Fashion Innovation</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">MIT & Harvard</span>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We're on a mission to revolutionize the way people organize, discover, and share their fashion. 
              By leveraging advanced AI technology, we're creating an intelligent platform that not only helps 
              you manage your wardrobe but also connects you with a vibrant community of fashion enthusiasts. 
              Our goal is to make sustainable fashion accessible and enjoyable while reducing waste through 
              smarter wardrobe management and community-driven fashion sharing.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">Sustainable Fashion</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">Smart Organization</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">Community Driven</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Vision
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
              We envision a future where managing your wardrobe is effortless, sustainable fashion is 
              the norm, and every piece of clothing finds its perfect home. Through AI-powered 
              organization and a connected community, we're making this vision a reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 