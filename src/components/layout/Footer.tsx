
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="mb-4 uppercase text-sm font-medium">Follow us</p>
            <ul className="space-y-2">
              <li><Link to="/instagram" className="text-sm hover:underline">Instagram</Link></li>
              <li><Link to="/facebook" className="text-sm hover:underline">Facebook</Link></li>
              <li><Link to="/twitter" className="text-sm hover:underline">Twitter</Link></li>
              <li><Link to="/youtube" className="text-sm hover:underline">YouTube</Link></li>
            </ul>
          </div>
          
          <div>
            <p className="mb-4 uppercase text-sm font-medium">SEEN THE LABEL</p>
          </div>
          
          <div>
            <p className="mb-4 uppercase text-sm font-medium">On Instagram</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div>
            <p className="mb-4 uppercase text-sm font-medium">Shipping & Returns</p>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-sm hover:underline">FAQ</Link></li>
              <li><Link to="/contact" className="text-sm hover:underline">Contact</Link></li>
              <li><Link to="/privacy" className="text-sm hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <p className="mb-4 uppercase text-sm font-medium">About</p>
            <ul className="space-y-2">
              <li><Link to="/careers" className="text-sm hover:underline">Careers</Link></li>
              <li><Link to="/brand" className="text-sm hover:underline">Brand</Link></li>
              <li><Link to="/sustainability" className="text-sm hover:underline">Sustainability</Link></li>
            </ul>
          </div>
          
          <div>
            <p className="mb-4 text-sm">Sign up to receive news and updates</p>
            <div className="flex gap-2">
              <Input 
                placeholder="Email Address" 
                className="bg-transparent border-white/30 focus-visible:ring-white" 
              />
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-xs text-white/70">
          <p>SEEN THE LABEL 2023 · MADE by 3a7anton</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
