import { Loading } from "../Loading";
import { useHomeContext } from "../../contexts/homeContext";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import { FaSearch } from "react-icons/fa";
{
  Link;
}
export const FeaturedProducts = () => {
  const { isData, proccesedData } = useHomeContext();

  const featuredItems = proccesedData.map((item) => {
    return (
      <div key={nanoid()}>
        <header className="featured-items-container">
          <div className="featured-items-wrapper">
            <img
              className="featured-items-image"
              src={item.image}
              alt="image of a bedroom"
            />
            <Link className="featured-items-link" to="/products">
              <FaSearch />
            </Link>
          </div>
        </header>
        <h4 className="featured-items-title">{item.name}</h4>
      </div>
    );
  });

  return (
    <div>
      {!isData ? (
        <Loading />
      ) : (
        <article className="featured-items">
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
