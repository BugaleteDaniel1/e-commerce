import { useContext, createContext, useReducer } from "react";

const cartContext = createContext(null);

const defaultState = {
  isCartEmpty: true,
  cartEmptyMessage: "Cart is Empty",
  cartContent: [],
};
const reducer = (state, action) => {
  throw new Error("something's wrong i can feel it");
};

export const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(cartContext);
};
