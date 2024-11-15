import Testimonials from "../component/Testimonials";
import Electronics from "../component/Electronics";
import HeroBanner from "../component/HeroBanner";
import MidPageBanner from "../component/MidPageBanner";
import ProductShowcase from "../component/ProductShowcase";
import Toast from "../component/Toast";

const Home = () => {
  return (
    <div className="font-sans">
      <Toast></Toast>
      <HeroBanner></HeroBanner>
      <ProductShowcase></ProductShowcase>
      <MidPageBanner></MidPageBanner>
      <Electronics></Electronics>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
