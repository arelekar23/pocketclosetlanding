import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PocketClosetLogo from "./PocketClosetLogo.png";

export const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={PocketClosetLogo}
            alt="Pocket Closet Logo"
            className="h-8 w-auto"
          />
          <div className="text-2xl font-bold text-black">PocketCloset</div>
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