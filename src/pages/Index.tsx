
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PromoBanner from "@/components/product/PromoBanner";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FeaturedSection from "@/components/home/FeaturedSection";
import SaleSection from "@/components/home/SaleSection";

const Index = () => {
  const promoItems = [
    { text: "E 20% OFF" },
    { text: "USE CODE: SEEN20" },
    { text: "SALE" },
    { text: "TAKE 20%" },
  ];

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <PromoBanner items={promoItems} />
        <FeaturedProducts />
        <FeaturedSection />
        <SaleSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
