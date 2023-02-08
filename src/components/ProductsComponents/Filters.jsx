import { useProductsContext } from "../../contexts/productsContext";
import { useEffect, useRef } from "react";
import { nanoid } from "nanoid";

export const Filters = () => {
  const { state, dispatch } = useProductsContext();
  const { fetchedData, selectedCategory, selectedCompany } = state;

  const colorRef = useRef(null);

  const onlyCategoryData = fetchedData.map((item) => {
    return item.category;
  });

  const categories = new Set(onlyCategoryData);
  const categoriesArr = [...categories];

  const categoriesOptions = categoriesArr.map((category) => {
    return (
      <option key={nanoid()} value={category}>
        {category}
      </option>
    );
  });

  const companies = fetchedData.map((item) => {
    return item.company;
  });
  const uniqueCompanies = new Set(companies);
  const uniqueCompaniesArr = [...uniqueCompanies];

  const uniqueComp = uniqueCompaniesArr.map((el) => {
    return (
      <option key={nanoid()} value={el}>
        {el}
      </option>
    );
  });

  const FurnitureColors = fetchedData.map((item) => item.colors);
  const furnitureColorsArr = FurnitureColors.flat();
  const uniqueCols = new Set(furnitureColorsArr);
  const uniqueColsArr = [...uniqueCols];

  const colors = uniqueColsArr.map((color) => {
    const coloredSquared = {
      backgroundColor: color,
      width: "20px",
      height: "20px",
      borderRadius: "5px",
    };
    return (
      <div
        ref={colorRef}
        onClick={() => selectColor(color)}
        style={coloredSquared}
        key={color}
      ></div>
    );
  });
  const selectColor = (color) => {
    uniqueColsArr.map((item) => {
      if (item === color) {
        console.log(item);
        colorRef.current.classList.add("selected-color");
      } else {
        colorRef.current.classList.remove("selected-color");
      }
    });
    dispatch({ type: "SELECT_COLOR", payload: color });
  };
  const selectCategory = (e) => {
    const { value } = e.target;
    dispatch({ type: "SELECT_CATEGORY", payload: value });
  };

  const selectCompany = (e) => {
    const { value } = e.target;
    dispatch({ type: "SELECT_COMPANY", payload: value });
  };

  const allColorsSquare = {
    width: "20px",
    height: "20px",
    borderRadius: "5px",
  };

  return (
    <form className="filters-form">
      <label className="label" htmlFor="categories">
        Category
      </label>
      <select
        value={selectedCategory}
        onChange={selectCategory}
        name="categories"
        id="categories"
      >
        <option value="All">All</option>
        {categoriesOptions}
      </select>
      <label className="label" htmlFor="companies">
        Company
      </label>
      <select
        value={selectedCompany}
        onChange={selectCompany}
        name="companies"
        id="companies"
      >
        <option value="all">All</option>
        {uniqueComp}
      </select>
      <h3 className="filters-colors-title">Colors </h3>
      <div className="filters-colors-container">
        <div className="selected-color">All</div>
        {colors}
      </div>
    </form>
  );
};
