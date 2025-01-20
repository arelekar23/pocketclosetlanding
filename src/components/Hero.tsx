import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
    <div className="relative min-h-screen bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: "url('/lovable-uploads/6e3bd16c-e1f7-4faf-ae2d-7b512efb914e.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-20 pt-32 pb-20">
        <div className="container mx-auto">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-8">
              <img 
                src="/lovable-uploads/01d141b1-2049-4e53-91b4-f188435a627a.png" 
                alt="Download on App Store" 
                className="h-12 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => window.open('https://apps.apple.com/us/app/pocket-closet/id123456789', '_blank')}
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
              See what's in your closet
            </h1>
            <form onSubmit={handleSubmit} className="max-w-md">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border-2 border-primary text-black h-[50px] text-base placeholder:text-gray-400"
                  required
                  disabled={isSubmitting}
                />
                <Button 
                  type="submit"
                  className="bg-black hover:bg-neutral-800 text-white text-base px-6 h-[50px] flex items-center gap-2 border border-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"} <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};