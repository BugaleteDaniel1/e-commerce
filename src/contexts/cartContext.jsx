import { useContext, createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const cartContext = createContext(null);

export const CartContext = ({ children }) => {
  console.log("rendered");
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [cartContent, setCartContent] = useState([]);
  const [int, setInt] = useState([]);
  const [cartItems, setCartItems] = useLocalStorage("cart-items", []);

  useEffect(() => {
    if (cartContent === undefined || cartContent === null) return;
    setInt((prevInt) => {
      return [...prevInt, cartContent];
    });
  }, [cartContent]);

  useEffect(() => {
    const onlyObj = int.filter((value) => JSON.stringify(value) !== "[]");
    if (localStorage.getItem("cart-items") === null) {
      setCartItems(onlyObj);
    }
    onlyObj !== [] && setIsCartEmpty(false);
  }, [cartContent]);

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
