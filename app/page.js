import Navbar from "@/app/components/common/Navbar";
import HomeSection from "@/app/components/common/HomeSection";
import WhoItsFor from "@/app/components/common/WhoItsFor";
import CTASection from "@/app/components/common/CTASection";
import CategoriesSection from "@/app/components/common/CategoriesSection";
import ProductsSection from "@/app/components/common/ProductsSection";
import Contact from "@/app/components/common/Contact";
import Footer from "@/app/components/common/Footer";


export default function Home() {
  return (
    <>
      <Navbar/>
      <div className={""}>
        <HomeSection/>
        <WhoItsFor/>
        <CTASection/>
        <CategoriesSection/>
        <ProductsSection/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}
