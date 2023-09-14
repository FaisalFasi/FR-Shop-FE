import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  // Construct the `sort` parameter for the URL only if it's not null
  const sortParam = sort ? `&sort=price:${sort}` : "";

  // Construct the URL for fetching products
  const url = `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
    (item) => `&[filters][sub_categories][id][$eq]=${item}`
  )}&[filters][price][$lte]=${maxPrice}${sortParam}`;

  const { data, loading, error } = useFetch(url);

  return (
    <div className="list">
      {loading
        ? "Loading!"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
