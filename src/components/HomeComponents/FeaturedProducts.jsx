import { Loading } from "../Loading";
import { useHomeContext } from "../../contexts/homeContext";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import { FaSearch } from "react-icons/fa";
import FeaturedProdsCss from "../../styles/home-styles/featuredProducts.module.css";

export const FeaturedProducts = () => {
  const { isData, proccesedData } = useHomeContext();

  const featuredItems = proccesedData.map((item) => {
    return (
      <div key={nanoid()}>
        <header className={FeaturedProdsCss.featuredItemsContainer}>
          <div className={FeaturedProdsCss.featuredItemsWrapper}>
            <img
              className={FeaturedProdsCss.featuredItemsImage}
              src={item.image}
              alt="image of a bedroom"
            />
            <Link
              className={FeaturedProdsCss.featuredItemsLink}
              to={`/products/${item.id}`}
            >
              <FaSearch />
            </Link>
          </div>
        </header>
        <h4 className={FeaturedProdsCss.featuredItemsTitle}>{item.name}</h4>
      </div>
    );
  });

  return (
    <div>
      {!isData ? (
        <Loading />
      ) : (
        <article className={FeaturedProdsCss.featuredItems}>
          <h3>Need a new Bedroom?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            animi qui est quas odio quia.
          </p>
          <div>{featuredItems}</div>
        </article>
      )}
    </div>
  );
};
