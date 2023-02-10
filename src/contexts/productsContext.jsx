import { useEffect, useReducer, useContext, createContext } from "react";
const url = "https://course-api.com/react-store-products";

const productContext = createContext(null);

const defaultState = {
  isDataLoaded: false,
  fetchedData: [],
  processedData: [],
  selectedCategory: "All",
  selectedCompany: "All",
  selectedColor: "All",
  isProduct: true,
};

const reducer = (state, action) => {
  if (action.type === "GET_DATA") {
    return {
      ...state,
      fetchedData: action.payload,
      isDataLoaded: true,
      processedData: action.payload,
    };
  }
  if (action.type === "SELECT_CATEGORY") {
    const changedData = state.fetchedData.filter(
      (el) => el.category === action.payload
    );
    let newProcessedData;
    state.selectedCategory !== "ALL"
      ? (newProcessedData = changedData)
      : (newProcessedData = fetchedData);

    let productState;
    newProcessedData !== [] ? (productState = true) : (productState = false);

    return {
      ...state,
      selectedCategory: action.payload,
      processedData: newProcessedData,
      isProduct: productState,
    };
  }
  if (action.type === "SELECT_COMPANY") {
    const newProcessedData = state.processedData.filter((el) => {
      return el.company === action.payload;
    });
    let productState;
    newProcessedData !== [] ? (productState = true) : (productState = false);
    console.log(newProcessedData);
    return {
      ...state,
      selectedCompany: action.payload,
      processedData: newProcessedData,
      isProduct: productState,
    };
  }
  if (action.type === "SELECT_COLOR") {
    return { ...state };
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

  useEffect(() => {
    dispatch({ type: "SELECT_CATEGORY", payload: state.selectedCategory });
  }, [state.selectedCategory]);
  useEffect(() => {
    dispatch({ type: "SELECT_COMPANY", payload: state.selectedCompany });
  }, [state.selectedCompany]);

  return (
    <productContext.Provider value={{ state, dispatch }}>
      {children}
    </productContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(productContext);
};
