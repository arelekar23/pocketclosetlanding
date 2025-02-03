import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('emails')
        .insert([{ email }]);

      if (error) throw error;

      toast({
        title: "Thank you for joining!",
        description: "We'll notify you when we launch.",
      });
      setEmail("");
    } catch (error) {
      console.error('Error saving email:', error);
      toast({
        title: "Error",
        description: "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-8 md:pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative z-10 pb-8 md:pb-12">
          {/* Right Side - Content (appears first on mobile) */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8 p-4 md:p-6
            order-1 md:order-2 mt-12 sm:mt-16 md:mt-0">
            <div className="space-y-4 md:space-y-6 mb-4 md:mb-0 pt-12 sm:pt-16 md:pt-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 group text-center md:text-left">
                See what's in your{" "}
                <span className="relative inline-block">
                  closet{" "}
                  <span className="inline-block group-hover:rotate-12 transition-transform duration-300">
                    👀
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent 
                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-600 text-center md:text-left">
                Organize your wardrobe, discover your style, and share with friends.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="relative group max-w-md mx-auto md:mx-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent 
                rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative flex flex-col gap-3">
                <div className="relative flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 border-2 border-[#FF1493] bg-black/5 text-gray-900 h-[45px] 
                      placeholder:text-[#FF1493] focus:bg-white/20 transition-all duration-300
                      pr-10 hover:bg-black/10 w-full focus:border-[#FF1493]"
                    required
                    disabled={isSubmitting}
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF1493]" />
                </div>
                <Button 
                  type="submit"
                  className="bg-black hover:bg-gray-900 text-white font-semibold px-4 h-[45px]
                    flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5
                    hover:shadow-primary/20 w-full justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"} 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </form>

            <a 
              href="#" 
              className="inline-block group relative w-fit mx-auto md:mx-0 mt-4 md:mt-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 
                rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <img 
                src="/app-store.svg" 
                alt="Download on the App Store" 
                className="h-[35px] md:h-[40px] w-auto relative hover:-translate-y-0.5 transition-all duration-300"
              />
            </a>
          </div>

          {/* Left Side - Chat Interface (appears second on mobile) */}
          <div className="bg-black rounded-2xl p-4 md:p-6 shadow-xl
            order-2 md:order-1 mt-6 md:mt-0">
            {/* User Message */}
            <div className="flex justify-end gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="bg-primary/10 rounded-2xl rounded-tr-none p-3 md:p-4 max-w-[85%] md:max-w-[80%]
                shadow-lg">
                <p className="text-white text-sm">I need a pink top for my date tonight, what do I have?</p>
              </div>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center
                shadow-md">
                <span className="text-white text-sm">👤</span>
              </div>
            </div>

            {/* AI Response */}
            <div className="flex gap-2 md:gap-3">
              <div className="min-w-7 min-h-7 w-7 h-7 md:min-w-8 md:min-h-8 md:w-8 md:h-8 
                rounded-full bg-gradient-to-br from-[#FF1493] to-[#FF69B4] 
                flex items-center justify-center shadow-lg ring-2 ring-[#FF1493]/20 flex-shrink-0">
                <span className="text-white text-[10px] font-bold tracking-wider">AI</span>
              </div>
              <div className="bg-white/10 rounded-2xl rounded-tl-none p-3 md:p-4 shadow-lg">
                <p className="text-white text-sm mb-4 md:mb-6">Let me show you some options...</p>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {[
                    { src: "/pinktop.jpg", alt: "Pink sleeveless top" },
                    { src: "/pinktop2.jpg", alt: "Pink blouse" },
                    { src: "/lovable-uploads/6e3bd16c-e1f7-4faf-ae2d-7b512efb914e.png", alt: "Pink casual top" },
                    { src: "/pinktop4.jpg", alt: "Pink evening top" }
                  ].map((item, i) => (
                    <div key={i} className="aspect-square bg-neutral-700/50 rounded-lg md:rounded-xl overflow-hidden
                      shadow-md hover:shadow-xl transition-all duration-300">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};