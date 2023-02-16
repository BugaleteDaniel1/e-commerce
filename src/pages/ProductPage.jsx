import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useProductsContext } from "../contexts/productsContext";
import { useCartContext } from "../contexts/cartContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

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

  const { setCartContent } = useCartContext();
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

  return (
    <>
      <Link className="not-rounded-left" to="/products">
        BACK TO PRODUCTS
      </Link>
      <section className="product-page">
        <div className="prodcts">
          <header>
            <img
              className="product-page-img"
              src={pageInfo.image}
              alt="a page of an product"
            />
          </header>
          <div className="product-page-main">
            <h2 className="product-page-title">{pageInfo.name}</h2>
            <div className="rating">5stars</div>
            <div className="product-page-price">${pageInfo.price}</div>
            <p ref={descriptionRef} className="product-page-description">
              {pageInfo.description}
            </p>
            <span
              role={"button"}
              onClick={enlargeText}
              className="show-more-btn"
            >
              {!isTextFull ? "...more" : "less"}
            </span>
            <p className="product-page-product-info">Available: In Stock</p>
            <p className="product-page-product-info">SKU: {pageInfo.id}</p>
            <p className="product-page-product-info">
              Brand: {pageInfo.company}
            </p>
          </div>
        </div>
        <Link onClick={() => addToCart(pageInfo)} className="btn" to="/cart">
          Add to Cart
        </Link>
      </section>
    </>
  );
};
