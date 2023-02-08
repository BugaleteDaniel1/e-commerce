import { useProductsContext } from "../../contexts/productsContext";
import { FaSearch } from "react-icons/fa";
import { Loading } from "../Loading";
import { Link } from "react-router-dom";

export const Results = () => {
  const { state } = useProductsContext();
  const { processedData, isDataLoaded } = state;

  const filteredProducts = processedData.map((item) => {
    return (
      <div key={item.id}>
        <header className="featured-items-container">
          <div className="featured-items-wrapper">
            <img
              className="featured-items-image"
              src={item.image}
              alt="image of a bedroom"
            />
            <Link className="featured-items-link" to={`/products/${item.id}`}>
              <FaSearch />
            </Link>
          </div>
        </header>
        <h4 className="featured-items-title">{item.name}</h4>
      </div>
    );
  });

  return <>{!isDataLoaded ? <Loading /> : <>{filteredProducts}</>}</>;
};
