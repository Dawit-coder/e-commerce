import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Herosection from "@/components/home/Herosection";

export default function Home() {
  return (
    <main>
      <Herosection />
      <CategoriesSection/>
      <FeaturedProducts/>
    </main>
  );
}
