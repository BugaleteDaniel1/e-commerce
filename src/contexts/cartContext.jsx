import { useContext, createContext, useReducer, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const cartContext = createContext(null);

// const defaultState = {
//   isCartEmpty: true,
//   cartEmptyMessage: "Cart is Empty",
//   cartContent: [],
// };
// const reducer = (state, action) => {
//   if (action.type === "ADD_TO_CART") {
//     const newContent = [...state.cartContent, action.payload];
//     return { ...state, isCartEmpty: false, cartContent: newContent };
//   }
//   throw new Error("something's wrong i can feel it");
// };

export const CartContext = ({ children }) => {
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  const [cartContent, setCartContent] = useLocalStorage("cart-items", []);
  return (
    <cartContext.Provider
      value={{ isCartEmpty, setCartContent, cartContent, setIsCartEmpty }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(cartContext);
};
