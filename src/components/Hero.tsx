import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Search, Shirt, ShoppingBag, Heart, Camera } from "lucide-react";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const { toast } = useToast();

  const floatingItems = [
    { 
      icon: <Shirt className="w-full h-full" />, 
      color: "bg-primary/20", 
      position: { left: "75%", top: "15%" },
      label: "150+ items"
    },
    { 
      icon: <Camera className="w-full h-full" />, 
      color: "bg-secondary/20", 
      position: { left: "85%", top: "45%" },
      label: "Quick snap"
    },
    { 
      icon: <Heart className="w-full h-full" />, 
      color: "bg-accent/20", 
      position: { left: "70%", top: "75%" },
      label: "Style match"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % floatingItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage: "url('/lovable-uploads/6e3bd16c-e1f7-4faf-ae2d-7b512efb914e.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 z-10">
        <div className="relative">
          <Sparkles className="w-6 h-6 text-primary animate-pulse absolute -top-3 -right-3" />
          <div className="w-24 h-24 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center">
            <Shirt className="w-12 h-12 text-primary" />
          </div>
        </div>
      </div>

      {/* Floating Interactive Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {floatingItems.map((item, index) => (
          <div
            key={index}
            className="absolute group cursor-pointer pointer-events-auto"
            style={{
              left: item.position.left,
              top: item.position.top,
            }}
          >
            <div className={`relative w-16 h-16 ${item.color} rounded-full p-3 
              transition-all duration-500 hover:scale-110 backdrop-blur-sm
              ${index === activeItem ? 'ring-2 ring-primary shadow-lg' : ''}`}
            >
              <div className="absolute inset-0 bg-white/10 rounded-full animate-ping opacity-75" />
              {item.icon}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap
                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-3 py-1 bg-white/90 rounded-full text-xs font-medium text-gray-800
                  shadow-lg backdrop-blur-sm">
                  {item.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl relative">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white group">
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
            
            <div className="relative mb-8">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2">
                <div className="w-8 h-8 rounded-full bg-primary/20 animate-pulse" />
              </div>
              <p className="text-gray-300 text-lg">
                Organize your wardrobe, discover your style, and share with friends.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mb-6 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent 
                rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 border-2 border-primary bg-white/10 text-white h-[50px] text-base 
                      placeholder:text-gray-400 focus:bg-white/20 transition-all duration-300
                      pr-10 hover:bg-white/15"
                    required
                    disabled={isSubmitting}
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                <Button 
                  type="submit"
                  className="bg-white hover:bg-gray-100 text-black font-semibold text-base px-6 h-[50px] 
                    flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5
                    hover:shadow-primary/20"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"} 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </form>

            {/* App Store Button with enhanced hover effect */}
            <a 
              href="#" 
              className="inline-block group relative"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 
                rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <img 
                src="/app-store.svg" 
                alt="Download on the App Store" 
                className="h-[40px] md:h-[50px] w-auto relative hover:-translate-y-0.5 transition-all duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};