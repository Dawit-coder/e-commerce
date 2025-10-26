import BestSellers from "@/components/home/BestSellers";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Herosection from "@/components/home/Herosection";
import PromoBanner from "@/components/home/PromoBanner";

export default function Home() {
  return (
    <main>
      <Herosection />
      <CategoriesSection/>
      <FeaturedProducts/>
      <PromoBanner/>
      <BestSellers/>
    </main>
  );
}
