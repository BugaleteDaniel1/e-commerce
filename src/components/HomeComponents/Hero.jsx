import { Link } from "react-router-dom";
import HeroImg from "../../assets/hero-img.jpeg";
import HeroCss from "../../styles/home-styles/hero.module.css";

export const Hero = () => {
  return (
    <section className={HeroCss.container}>
      <header className={HeroCss.header}>
        <h1 className={HeroCss.title}>Design your comfort zone</h1>
        <p className={HeroCss.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sunt
          libero id? Tempore facilis voluptate id expedita porro? Laborum porro
          esse corrupti necessitatibus illum doloribus cumque, odio at
          voluptatum perferendis.
        </p>
        <Link className={HeroCss.btn} to="/products/">
          SHOP NOW
        </Link>
      </header>
      <div className={HeroCss.imageContainer}>
        <img
          className={HeroCss.img}
          src={HeroImg}
          alt="an image of an interior of a house"
        />
        <div className={HeroCss.animation}></div>
      </div>
    </section>
  );
};
