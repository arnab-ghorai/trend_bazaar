import Testimonials from "../component/Testimonials";
import Electronics from "../component/Electronics";
import HeroBanner from "../component/HeroBanner";
import MidPageBanner from "../component/MidPageBanner";
import ProductShowcase from "../component/ProductShowcase";

const Home = () => {
  return (
    <div className="font-sans">
      <HeroBanner></HeroBanner>
      <ProductShowcase></ProductShowcase>
      <MidPageBanner></MidPageBanner>
      <Electronics></Electronics>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
