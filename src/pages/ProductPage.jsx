import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useProductsContext } from "../contexts/productsContext";
import { useCartContext } from "../contexts/cartContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { formatCurrency } from "../hooks/formatNumber";
import ProductPageCSS from "../styles/dinamically-created-product-page/product-page.module.css";

export const ProductPage = () => {
  const [pageInfo, setPageInfo] = useLocalStorage("pageData", []);
  const [page, setPage] = useState(pageInfo);
  const [isTextFull, setIsTextFull] = useState(false);

  const { id } = useParams();
  const { state } = useProductsContext();
  const { processedData } = state;

  useEffect(() => {
    const currentPage = processedData.filter((el) => el.id === id);
    currentPage?.[0] ? setPageInfo(currentPage[0]) : setPageInfo(pageInfo);
  }, [page]);

  useEffect(() => {
    setPage(pageInfo);
  }, [pageInfo]);

  const { setCartContent, state: cartState } = useCartContext();
  const { cartContent } = cartState;

  const descriptionRef = useRef(null);

  useEffect(() => {
    descriptionRef.current.textContent = pageInfo.description;

    if (!isTextFull) {
      const text = descriptionRef.current.textContent;
      const firstBulk = 19;
      const remainingEl = text.length - 1 - firstBulk;
      const fullText = descriptionRef.current.textContent.split(" ");
      fullText.splice(firstBulk, remainingEl);
      const textShort = fullText.join(" ");
      descriptionRef.current.textContent = textShort;
    }
  });

  const enlargeText = () => {
    setIsTextFull(!isTextFull);
  };

  const addToCart = (addedToCartItem) => {
    setCartContent(addedToCartItem);
  };

  let isProductInCart = false;
  cartContent.map((el) => {
    return el.id === pageInfo.id
      ? (isProductInCart = true)
      : (isProductInCart = false);
  });
  console.log(isProductInCart);

  return (
    <>
      <Link className="rounded-right" to="/products">
        BACK TO PRODUCTS
      </Link>
      <section className={ProductPageCSS.productPage}>
        <div>
          <header>
            <img
              className={ProductPageCSS.productImg}
              src={pageInfo.image}
              alt="a page of an product"
            />
          </header>
          <div className="product-page-main">
            <h2 className={ProductPageCSS.productTitle}>{pageInfo.name}</h2>
            <div className="rating">5stars</div>
            <div className={ProductPageCSS.productPrice}>
              {formatCurrency(pageInfo.price)}
            </div>
            <p
              ref={descriptionRef}
              className={ProductPageCSS.productDescription}
            >
              {pageInfo.description}
            </p>
            <span
              role={"button"}
              onClick={enlargeText}
              className={ProductPageCSS.showMore}
            >
              {!isTextFull ? "...more" : "less"}
            </span>
            <p className={ProductPageCSS.productInfo}>Available: In Stock</p>
            <p className={ProductPageCSS.productInfo}>SKU: {pageInfo.id}</p>
            <p className={ProductPageCSS.productInfo}>
              Brand: {pageInfo.company}
            </p>
          </div>
        </div>
        {isProductInCart ? (
          <Link to="/cart">Go To Cart</Link>
        ) : (
          <Link onClick={() => addToCart(pageInfo)} className="btn" to="/cart">
            Add to Cart
          </Link>
        )}
      </section>
    </>
  );
};
