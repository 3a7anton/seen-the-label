
import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const ProductPage = () => {
  const { id } = useParams();
  
  // This would typically come from an API call based on the id
  const product = {
    id: "1",
    name: "Clean Jean",
    price: "$140.00",
    description: "Our signature clean jean is made from premium denim with a comfortable fit. Features a classic five-pocket design and straight leg cut.",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    ],
    details: [
      "100% premium cotton denim",
      "Medium wash",
      "Straight leg fit",
      "Machine washable"
    ]
  };

  return (
    <div>
      <Header />
      <main className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h1 className="text-2xl font-medium mb-2">{product.name}</h1>
              <p className="text-xl mb-6">{product.price}</p>
              
              <div className="mb-6">
                <h3 className="text-sm uppercase tracking-wide mb-2">Size</h3>
                <div className="flex gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className="w-10 h-10 border border-black flex items-center justify-center text-sm hover:bg-black hover:text-white transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <Button className="w-full py-6 text-base rounded-none">Add to Cart</Button>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
              
              <div>
                <h3 className="text-sm uppercase tracking-wide mb-2">Details</h3>
                <ul className="list-disc pl-5">
                  {product.details.map((detail, index) => (
                    <li key={index} className="text-sm text-gray-600 mb-1">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
