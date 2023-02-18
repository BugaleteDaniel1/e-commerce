import banner from "../assets/about-background.jpeg";
import HeroImg2 from "../assets/about-img-2.jpg";
import AboutCSS from "../styles/about-styles/about.module.css";

export const About = () => {
  return (
    <div>
      <section className={AboutCSS.about}>
        <header className={AboutCSS.aboutHeader}>
          <img
            className={AboutCSS.aboutBanner}
            src={banner}
            alt="a picture of a bedroom interior"
          />
          <img
            src={HeroImg2}
            alt="another picture of an "
            className={AboutCSS.aboutAnimation}
          />
        </header>
        <div className={AboutCSS.main}>
          <h2 className={AboutCSS.aboutTitle}>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            reiciendis nisi maiores quis officia ad animi, laudantium molestias
            aspernatur. Ex assumenda, magni quas odio incidunt corrupti illum
            hic? Nobis, quaerat fugiat? Maiores itaque aut eius obcaecati iusto
            nisi distinctio amet voluptates, saepe modi odit error rem animi
            deleniti aliquam tempore!
          </p>
        </div>
      </section>
    </div>
  );
};
