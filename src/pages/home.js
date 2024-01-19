import { useContext } from "react";
import Layout from "./../component/layout";
import MyContext from "../context/data/myContex";
import HeroSection from "../component/herosection/herosection";
import Filter from "../component/filter/filter";
import ProductCard from "../component/ProductCard/productCard";
import Track from "../component/track/track";
import Testimonial from "../component/testimonial/testimonial";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
};

export default Home;
