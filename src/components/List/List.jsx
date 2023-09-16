import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const sortParam = sort ? `&sort=price:${sort}` : "";

  // Create an array to store sub-category filter strings
  const subCategoryFilters = subCats.map(
    (item) => `[filters][sub_categories][id][$eq]=${item}`
  );

  // Join the sub-category filter strings with "&" to create a single parameter
  const subCategoryParam = subCategoryFilters.join("&");

  const url = `/products?populate=*&[filters][categories][id]=${catId}&${subCategoryParam}&[filters][price][$lte]=${maxPrice}${sortParam}`;

  const { data, loading } = useFetch(url);

  return (
    <div className="list">
      {loading
        ? "Loading!"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
