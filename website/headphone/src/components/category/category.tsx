import Products from "../products/products";
import { useParams } from "react-router-dom";
import useFetch from "../../utils/usefetch";

export default function Category({ products }) {
  const { id } = useParams();

  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );

  return (
    <div>
      <div>
        <h1 className="text-3xl pt-20 pl[] pb-8 text-center">
          {data.data[0]?.attributes.categories.data[0].attributes.Title}
        </h1>
      </div>
      <Products innerPage={true} heading={"Products"} products={data} />
    </div>
  );
}
