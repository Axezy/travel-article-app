import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Feature from "../../components/Feature/Feature";
import FeaturedArticles from "../../components/FeaturedArticles/FeaturedArticles";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <FeaturedArticles />
      <Testimonials />
      <Footer />
    </>
  );
}