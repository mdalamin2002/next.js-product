import AboutUs from "@/components/AboutUs";
import Banar from "@/components/Banar";
import CTA from "@/components/CallToAction";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import FeaturedProducts from "@/components/FeaturedProducts";
import FeaturesSection from "@/components/FeaturesSection";


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Banar />

      {/* Featured Products */}
      <FeaturedProducts></FeaturedProducts>

      {/* About Us */}
      <AboutUs />

      {/* Features Section */}
      <FeaturesSection/>
      
      <CTA/>
      
      {/* faq  */}
      <FAQ/>


      {/* Contact */}
      <Contact />
      
    </>
  );
}
