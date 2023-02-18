import { Filters } from "../components/ProductsComponents/Filters";
import { Results } from "../components/ProductsComponents/Results";
import ProdsCSS from "../styles/products-styles/main-prods.module.css";

export const Products = () => {
  return (
    <div className={ProdsCSS.container}>
      <Filters />
      <Results />
    </div>
  );
};
