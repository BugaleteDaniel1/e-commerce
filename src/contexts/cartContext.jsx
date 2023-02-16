import {
  useContext,
  createContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const cartContext = createContext(null);

const defaultState = {
  isCartEmpty: false,
  cartContent: JSON.parse(localStorage.getItem("cart-items")) || [],
  cartTotalPrice: 0,
};

const reducer = (state, action) => {
  console.log(state.cartContent);
  if (action.type === "GET_DATA_FOR_CART") {
    const newData = [...state.cartContent, action.payload];
    const onlyObj = newData.filter((value) => JSON.stringify(value) !== "[]");
    const cartContentArr = [...new Set(onlyObj)];

    return { ...state, cartContent: cartContentArr };
  }

  if (action.type === "CALCULATE_TOTAL") {
    return { ...state, cartTotalPrice: action.payload };
  }
  if (action.type === "REMOVE_ALL_ITEMS") {
    return { ...state, cartContent: [] };
  }
  if (action.type === "REMOVE_THIS_ITEM") {
    const newData = state.cartContent.filter((el) => el.id !== action.payload);
    return { ...state, cartContent: newData };
  }

  throw new Error("check the reducer function");
};

export const CartContext = ({ children }) => {
  const [cartContent, setCartContent] = useState([]);
  const [cartItems, setCartItems] = useLocalStorage("cart-items", []);
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    dispatch({ type: "GET_DATA_FOR_CART", payload: cartContent });
  }, [cartContent]);

  useEffect(() => {
    const addedPrices = cartItems.reduce((total, acc) => {
      return total + acc.price;
    }, 0);
    dispatch({ type: "CALCULATE_TOTAL", payload: addedPrices });
  }, [cartItems]);

  useEffect(() => {
    setCartItems(state.cartContent);
  }, [state.cartContent]);

  return (
    <cartContext.Provider
      value={{
        state,
        dispatch,
        setCartContent,
        setCartItems,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(cartContext);
};
