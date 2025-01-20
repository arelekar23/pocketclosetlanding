import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <img
            src="/lovable-uploads/a9a7e67e-fecf-4dc8-8920-f37ef20999c0.png"
            alt="Pocket Closet Logo"
            className="h-8 w-8"
          /> */}
          <div className="text-2xl font-bold text-white">PocketCloset</div>
        </div>
        <div className="hidden md:flex items-center">
          {/* <Button className="bg-primary hover:bg-primary-dark text-white flex items-center gap-2">
            Get Started <ArrowRight className="w-4 h-4" />
          </Button> */}
        </div>
      </div>
    </nav>
  );
};