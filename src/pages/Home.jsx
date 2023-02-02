import { Loading } from "../components/Loading";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";

console.log(Hero);
export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Loading />
    </>
  );
};
