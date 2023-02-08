import { Filters } from "../components/ProductsComponents/Filters";
import { Results } from "../components/ProductsComponents/Results";

export const Products = () => {
  return (
    <div className="products-page">
      <Filters />
      <Results />
    </div>
  );
};
