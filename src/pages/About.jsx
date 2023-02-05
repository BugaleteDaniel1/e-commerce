import banner from "../assets/about-background.jpeg";
import HeroImg2 from "../assets/about-img-2.jpg";

export const About = () => {
  return (
    <div>
      <section className="about">
        <header className="about-header">
          <img
            className="about-banner"
            src={banner}
            alt="a picture of a bedroom interior"
          />
          <img
            src={HeroImg2}
            alt="another picture of an "
            className="about-animation"
          />
        </header>
        <h2 className="about-title">Our Story</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          reiciendis nisi maiores quis officia ad animi, laudantium molestias
          aspernatur. Ex assumenda, magni quas odio incidunt corrupti illum hic?
          Nobis, quaerat fugiat? Maiores itaque aut eius obcaecati iusto nisi
          distinctio amet voluptates, saepe modi odit error rem animi deleniti
          aliquam tempore!
        </p>
      </section>
    </div>
  );
};
