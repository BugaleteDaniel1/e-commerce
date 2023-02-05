import { useProductsContext } from "../contexts/productsContext";
import { Filters } from "../components/ProductsComponents/Filters";
import { Results } from "../components/ProductsComponents/Results";

export const Products = () => {
  const vals = useProductsContext();
  console.log(vals);

  return (
    <>
      <Filters />
      <Results />
    </>
  );
};
