
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="h-[80vh] overflow-hidden">
          <img 
            src="/lovable-uploads/86355f31-9782-4f5e-9549-43724a8c8361.png" 
            alt="Model wearing jeans" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[80vh] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1582418702059-97ebafb35d09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" 
            alt="Denim texture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-12 right-12 bg-black text-white p-3 max-w-xs">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-5 h-5 rounded-full bg-white/20"></div>
              <span className="text-xs">Circular &amp; Low Life-This</span>
            </div>
            <p className="text-xs opacity-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
