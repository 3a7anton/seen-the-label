
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CartPage = () => {
  const cartItems = [
    {
      id: "1",
      name: "Clean Jean",
      price: "$140.00",
      size: "M",
      quantity: 1,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    }
  ];

  const subtotal = "$140.00";
  const shipping = "Calculated at checkout";
  
  return (
    <div>
      <Header />
      <main className="py-12">
        <div className="container-custom">
          <h1 className="text-2xl font-medium mb-6 text-center">Your Cart</h1>
          
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-4 py-6 border-b">
                    <div className="w-24 h-24 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <p>{item.price}</p>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Size: {item.size}</p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center border">
                          <button className="px-3 py-1">-</button>
                          <span className="px-3 py-1 border-x">{item.quantity}</span>
                          <button className="px-3 py-1">+</button>
                        </div>
                        
                        <button className="text-sm underline">Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <div className="border p-6">
                  <h3 className="text-lg font-medium mb-4">Order Summary</h3>
                  
                  <div className="flex justify-between mb-2">
                    <p className="text-sm">Subtotal</p>
                    <p className="text-sm">{subtotal}</p>
                  </div>
                  
                  <div className="flex justify-between mb-4">
                    <p className="text-sm">Shipping</p>
                    <p className="text-sm">{shipping}</p>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex mb-4">
                      <Input placeholder="Discount code" className="rounded-r-none" />
                      <Button variant="outline" className="rounded-l-none">Apply</Button>
                    </div>
                    
                    <Button className="w-full">Checkout</Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg mb-6">Your cart is empty</p>
              <Link to="/">
                <Button>Continue Shopping</Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
