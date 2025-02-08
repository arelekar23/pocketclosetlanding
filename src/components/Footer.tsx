import { Mail } from "lucide-react";
import PocketClosetLogo from "./PocketClosetLogo.png";

export const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">PocketCloset</h3>
            <img src={PocketClosetLogo} alt="PocketCloset Logo" className="h-16 w-auto mb-4" />
            <p className="text-gray-600">
              Your smart wardrobe companion for effortless style.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <a 
              href="mailto:inquires@pocketcloset.com" 
              className="flex items-center gap-2 text-gray-600 hover:text-black"
            >
              <Mail className="w-5 h-5" />
              <span>inquires@pocketcloset.com</span>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Pocket Closet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};