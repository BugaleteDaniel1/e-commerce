import { cardsInfo } from "../../assets/cardsInfo";
import { nanoid } from "nanoid";
import ServicesCSS from "../../styles/home-styles/services.module.css";

export const Services = () => {
  const cards = cardsInfo.map((card) => {
    return (
      <div key={nanoid()} className={ServicesCSS.card}>
        <div>{card.icon}</div>
        <h3>{card.title}</h3>
        <p>{card.para}</p>
      </div>
    );
  });

  return (
    <article className={ServicesCSS.services}>
      <header>
        <h2 className={ServicesCSS.servicesTitle}>
          custom built furniture only for you
        </h2>
        <p className={ServicesCSS.servicesP}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nulla
          quas ipsum voluptatum nostrum explicabo debitis id veniam tenetur at.
        </p>
      </header>
      <main className={ServicesCSS.main}>{cards}</main>
    </article>
  );
};
