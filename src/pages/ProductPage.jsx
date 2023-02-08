import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../contexts/productsContext";
export const ProductPage = () => {
  const [pageInfo, setPageInfo] = useState([]);

  const { id } = useParams();
  const { state } = useProductsContext();
  const { processedData } = state;

  useEffect(() => {
    console.log(id);
    const currentPage = processedData.filter((el) => el.id === id);
    setPageInfo(currentPage[0]);
  }, [pageInfo]);

  console.log(pageInfo);

  return <section>Hello</section>;
};
