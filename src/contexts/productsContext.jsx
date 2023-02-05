import { useEffect, useReducer, useContext, createContext } from "react";
import { Loading } from "../components/Loading";
const url = "https://course-api.com/react-store-products";

const productContext = createContext(null);

const defaultState = {
  isDataLoaded: false,
  fetchedData: [],
  processedData: [],
};

const reducer = (state, action) => {
  if (action.type === "GET_DATA") {
    return { ...state, fetchedData: action.payload };
  }
  if (action.type === "PROCESS_DATA") {
    return { ...state, processedData: action.payload, isDataLoaded: true };
  }
  throw new Error("'something's wrong i can feel it");
};

export const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      dispatch({ type: "GET_DATA", payload: json });
    };
    getData();
  }, []);

  return (
    <productContext.Provider value={{ state, dispatch }}>
      {children}
    </productContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(productContext);
};
