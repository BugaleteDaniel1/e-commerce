import { useProductsContext } from "../../contexts/productsContext";
import { nanoid } from "nanoid";

export const Filters = () => {
  const { state, dispatch } = useProductsContext();
  const { fetchedData } = state;

  console.log(fetchedData);

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

  console.log(uniqueCompaniesArr);

  const uniqueComp = uniqueCompaniesArr.map((el) => {
    return <option value={el}>{el}</option>;
  });
  return (
    <>
      {/* <h4 className="">Category</h4> */}
      <label htmlFor="categories">Category</label>
      <select name="categories" id="categories">
        <option value="">All</option>
        {categoriesOptions}
      </select>
      <label htmlFor="companies">Company</label>
      <select name="companies" id="companies">
        <option value=""></option>
      </select>
    </>
  );
};
