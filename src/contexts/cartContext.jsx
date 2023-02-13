import { useContext, createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const cartContext = createContext(null);

export const CartContext = ({ children }) => {
  console.log("rendered");
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [cartContent, setCartContent] = useState([]);
  const [int, setInt] = useState();
  const [cartItems, setCartItems] = useLocalStorage("cart-items", []);

  useEffect(() => {
    setInt((prevInt) => {
      return [...prevInt, cartContent];
    });
  }, [cartContent]);

  console.log(int);

  return (
    <cartContext.Provider
      value={{
        isCartEmpty,
        setCartContent,
        cartContent,
        setIsCartEmpty,
        cartItems,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(cartContext);
};
