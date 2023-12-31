import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1> {type} Products</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
          molestias reprehenderit quidem deleniti eveniet minima, nostrum magni
          sapiente rerum, pariatur ducimus fuga saepe similique, quaerat fugiat
          dolorem soluta repellat inventore!
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "Loading"
          : Array.isArray(data) // Check if data is an array
          ? data.map((item) => <Card item={item} key={item.id} />)
          : "Data not available"}
      </div>
    </div>
  );
};

export default FeaturedProducts;
