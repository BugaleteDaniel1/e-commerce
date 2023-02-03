import { Loading } from "../components/Loading";
import { Hero } from "../components/HomeComponents/Hero";
import { Services } from "../components/HomeComponents/Services";
import { useHomeContext } from "../contexts/homeContext";
import { FeaturedProducts } from "../components/HomeComponents/FeaturedProducts";
export const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Services />
    </>
  );
};
