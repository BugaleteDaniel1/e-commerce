import { useCartContext } from "../contexts/cartContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const Cart = () => {
  const { isCartEmpty, setCartContent, cartContent, setIsCartEmpty } =
    useCartContext();
  console.log(cartContent);
  const [cartItems, setCartItems] = useState();

  useEffect(() => {
    setCartItems((prevCartItems) => {
      prevCartItems === null ? prevCartItems : [{ ...prevCartItems }],
        { cartContent };

      // return newCartContent;
    });
  }, [cartContent]);
  // const [cartItems, setCartItems] = useLocalStorage("cart-items", []);
  // console.log(cartItems);

  return (
    <>
      {isCartEmpty ? (
        `cart is empty`
      ) : (
        <>
          <Link to="/products">BACK TO PRODUCTS</Link>
          <div className="cart-content">
            <div>cont</div>
            <div>another</div>
          </div>
        </>
      )}
    </>
  );
};
