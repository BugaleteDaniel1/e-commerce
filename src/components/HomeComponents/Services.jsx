import { cardsInfo } from "../../assets/cardsInfo";
import { nanoid } from "nanoid";

export const Services = () => {
  const cards = cardsInfo.map((card) => {
    return (
      <div key={nanoid()} className="card">
        <div>{card.icon}</div>
        <h3>{card.title}</h3>
        <p>{card.para}</p>
      </div>
    );
  });

  return (
    <article className="services">
      <header>
        <h2 className="services-title">custom built furniture only for you</h2>
        <p className="services-p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nulla
          quas ipsum voluptatum nostrum explicabo debitis id veniam tenetur at.
        </p>
      </header>
      <main>{cards}</main>
    </article>
  );
};
