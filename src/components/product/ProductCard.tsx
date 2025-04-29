
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  salePrice?: string;
  image: string;
  onSale?: boolean;
}

const ProductCard = ({ id, name, price, salePrice, image, onSale }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden mb-3">
        {onSale && (
          <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 z-10">
            SALE
          </div>
        )}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-sm font-medium">{name}</h3>
      <div className="flex gap-2">
        {salePrice ? (
          <>
            <p className="text-sm line-through text-gray-500">{price}</p>
            <p className="text-sm font-medium text-red-600">{salePrice}</p>
          </>
        ) : (
          <p className="text-sm">{price}</p>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
