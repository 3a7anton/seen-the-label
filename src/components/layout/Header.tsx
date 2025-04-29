
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="py-4 px-4 md:px-6 border-b">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="text-xl font-medium tracking-wider">
          SEEN THE LABEL
        </Link>
        <Link to="/cart" className="relative">
          <ShoppingCart className="h-5 w-5" />
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            0
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
