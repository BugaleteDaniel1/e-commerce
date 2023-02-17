import { useProductsContext } from "../../contexts/productsContext";
import { FaSearch } from "react-icons/fa";
import { Loading } from "../Loading";
import { Link } from "react-router-dom";
import ResultsCSS from "../../styles/products-styles/results.module.css";

export const Results = () => {
  const { state } = useProductsContext();
  const { processedData, isDataLoaded } = state;

  const filteredProducts = processedData.map((item) => {
    return (
      <div key={item.id}>
        <header className={ResultsCSS.featuredItemsContainer}>
          <div className={ResultsCSS.featuredItemsWrapper}>
            <img
              className={ResultsCSS.featuredItemsImage}
              src={item.image}
              alt="image of a bedroom"
            />
            <Link
              className={ResultsCSS.featuredItemsLink}
              to={`/products/${item.id}`}
            >
              <FaSearch />
            </Link>
          </div>
        </header>
        <h4 className={ResultsCSS.featuredItemsTitle}>{item.name}</h4>
      </div>
    );
  });

  return <>{!isDataLoaded ? <Loading /> : <>{filteredProducts}</>}</>;
};
