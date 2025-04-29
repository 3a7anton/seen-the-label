
import ProductCard from "../product/ProductCard";

const FeaturedProducts = () => {
  const products = [
    {
      id: "1",
      name: "Clean Jean",
      price: "$140.00",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "2",
      name: "Harris Shirt",
      price: "$190.00",
      image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "3",
      name: "Bib Shorts",
      price: "$210.00",
      image: "https://images.unsplash.com/photo-1617952385804-7b465bb5092e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    }
  ];

  return (
    <div className="py-12 container-custom">
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
