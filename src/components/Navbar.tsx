import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import PocketClosetLogo from "./PocketClosetLogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 py-4 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={PocketClosetLogo}
              alt="Pocket Closet Logo"
              className="h-8 w-auto"
            />
            <div className="text-2xl font-bold text-black">PocketCloset</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/about"
              className="text-gray-600 hover:text-black font-medium transition-colors"
            >
              Who We Are
            </Link>
            <Link 
              to="/fellow"
              className="text-gray-600 hover:text-black font-medium transition-colors"
            >
              Design Fellowship
            </Link>
            <Button 
              asChild
              className="bg-[#FF1493] hover:bg-[#FF69B4] text-white"
            >
              <a href="https://form.typeform.com/to/sG2lyQfe" target="_blank" rel="noopener noreferrer">
                Apply Now <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-black transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg py-4 px-4 flex flex-col gap-4">
            <Link 
              to="/about"
              className="text-gray-600 hover:text-black font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Who We Are
            </Link>
            <Link 
              to="/fellow"
              className="text-gray-600 hover:text-black font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Design Fellowship
            </Link>
            <Button 
              asChild
              className="bg-[#FF1493] hover:bg-[#FF69B4] text-white w-full"
            >
              <a 
                href="https://form.typeform.com/to/sG2lyQfe" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                Apply Now <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};