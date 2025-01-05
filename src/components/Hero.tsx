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
    <div className="pt-32 pb-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-up">
            <div className="inline-block mb-4 px-4 py-2 bg-gray-50 rounded-full border border-primary">
              <span className="text-gray-800 font-semibold">Coming Soon to App Store</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-black">
              AI-Powered Fashion Within Your Circle
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Maximize your wardrobe's potential with AI styling, rent or sell unused pieces, and style others.
            </p>
            <form onSubmit={handleSubmit} className="max-w-2xl">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border-2 border-primary text-black h-[60px] text-lg placeholder:text-gray-400"
                  required
                  disabled={isSubmitting}
                />
                <Button 
                  type="submit"
                  className="bg-secondary hover:bg-secondary-dark text-primary-dark text-lg px-8 h-[60px] flex items-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"} <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </form>
          </div>
          <div className="flex-1 animate-fade-in">
            <img
              src="/lovable-uploads/01d141b1-2049-4e53-91b4-f188435a627a.png"
              alt="Luxurious pink closet with LED-lit shoe shelves and elegant seating"
              className="rounded-2xl shadow-2xl w-full max-w-[600px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};