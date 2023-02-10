import { Link } from "react-router-dom";
import HeroImg from "../../assets/hero-img.jpeg";

export const Hero = () => {
  return (
    <section className="landing-page">
      <header className="landing-header">
        <h1 className="landing-title">Design your comfort zone</h1>
        <p className="landing-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sunt
          libero id? Tempore facilis voluptate id expedita porro? Laborum porro
          esse corrupti necessitatibus illum doloribus cumque, odio at
          voluptatum perferendis.
        </p>
        <Link className="landing-btn btn" to="/products/">
          SHOP NOW
        </Link>
      </header>
      <div className="image-container">
        <img
          className="home-img"
          src={HeroImg}
          alt="an image of an interior of a house"
        />
        <div className="animation"></div>
      </div>
    </section>
  );
};
