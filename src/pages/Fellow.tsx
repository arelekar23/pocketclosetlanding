import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Fellow = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Become a Design Fellow
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Shape the future of fashion technology and become a featured creator
          </p>
        </div>

        {/* Role Description */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-gray-50 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              The Role
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              As a Design Fellow, you'll play a crucial role in shaping PocketCloset's user experience 
              and feature set. This is a unique opportunity to influence the development of our app 
              from the ground up, working directly with our team to create innovative solutions for 
              fashion organization and discovery.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Design Impact</h3>
                <p className="text-gray-600">
                  Guide the development of key features and help create an intuitive, 
                  beautiful user experience that revolutionizes wardrobe management.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Future Creator Status</h3>
                <p className="text-gray-600">
                  Get promoted as a featured creator when we launch our social features, 
                  establishing yourself as a founding member of our community.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Responsibilities Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What You'll Do
          </h2>
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-600">
                • Collaborate on UI/UX design decisions and feature implementation
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-600">
                • Provide insights on user needs and fashion organization preferences
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-600">
                • Test and provide feedback on new features before they launch
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-600">
                • Help shape the future of digital fashion organization and discovery
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Shape the Future?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us as a Design Fellow and help create the next generation of fashion technology.
          </p>
          <Button 
            asChild
            className="bg-[#FF1493] hover:bg-[#FF69B4] text-white font-semibold px-8 h-12
              inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5
              shadow-[0_0_15px_rgba(255,20,147,0.5)] hover:shadow-[0_0_25px_rgba(255,20,147,0.8)]"
          >
            <a href="https://form.typeform.com/to/sG2lyQfe" target="_blank" rel="noopener noreferrer">
              Apply Now <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}; 