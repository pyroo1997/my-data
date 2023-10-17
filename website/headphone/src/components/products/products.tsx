import Product from "./product/product";
import { useEffect, useContext } from "react";
import { Context } from "../../utils/context";
import { fetchDataFromApi } from "../../utils/api";

export default function Products({ innerPage = {}, heading = "", products }) {
  const { setProducts } = useContext(Context);

  useEffect(() => {
    getProductsPage();
  }, []);

  const getProductsPage = () => {
    fetchDataFromApi(`/api/products?populate=*`).then((res) => {
      setProducts(res);
    });
  };

  return (
    <div className=" pt-4 pb-10 w-full h-[auto]">
      <div className="mx-auto">
        {!innerPage && (
          <h1 className="text-3xl mx-auto text-center after:w-8 after:bg-purple-600 after:h-[3px] ">
            {heading}
          </h1>
        )}
        {!innerPage && (
          <hr className="mb-8 bg-gray-900 h-[1px] w-[10%] mx-auto" />
        )}
        <div className="mx-auto w-[90%] grid grid-cols-2 items-center lg:w-[90%] lg:grid lg:grid-cols-4 gap-8">
          {products.data.map((item) => (
            <Product key={item.id} id={item.id} data={item.attributes} />
          ))}
        </div>
      </div>
    </div>
  );
}
