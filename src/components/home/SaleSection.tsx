
import { Link } from "react-router-dom";
import ProductCard from "../product/ProductCard";

const SaleSection = () => {
  const product = {
    id: "4",
    name: "Roxy Jacket",
    price: "$250.00",
    salePrice: "$199.99",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    onSale: true
  };

  return (
    <div className="py-16 container-custom">
      <div className="max-w-xs mx-auto">
        <ProductCard
          id={product.id}
          name={product.name}
          price={product.price}
          salePrice={product.salePrice}
          image={product.image}
          onSale={product.onSale}
        />
      </div>
    </div>
  );
};

export default SaleSection;
