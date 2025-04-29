
import { Link } from "react-router-dom";

interface PromoBannerProps {
  items: {
    text: string;
    link?: string;
  }[];
}

const PromoBanner = ({ items }: PromoBannerProps) => {
  return (
    <div className="bg-black text-white py-3 overflow-hidden">
      <div className="flex space-x-8 items-center justify-center">
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="text-sm uppercase">{item.text}</span>
            {index < items.length - 1 && (
              <span className="mx-4 text-white/50">/</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoBanner;
