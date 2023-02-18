import { createContext, useEffect, useState, useContext } from "react";

const url = import.meta.env.VITE_API_KEY;

export const homeContext = createContext(null);

export const HomeContext = ({ children }) => {
  const [isData, setIsData] = useState(false);
  const [proccesedData, setProccesedData] = useState([{}]);
  const [fetchedData, setFetchedData] = useState(undefined);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const products = await response.json();
      setFetchedData(products);
    };
    getData();
  }, []);
  useEffect(() => {
    proccesData();
  }, [fetchedData]);

  const proccesData = () => {
    if (fetchedData !== undefined) {
      const featuredProducts = fetchedData.filter(
        (product) => product.category === "bedroom"
      );
      setProccesedData(featuredProducts);
      setIsData(true);
    }
  };

  return (
    <homeContext.Provider value={{ isData, proccesedData }}>
      {children}
    </homeContext.Provider>
  );
};

export const useHomeContext = () => {
  return useContext(homeContext);
};
