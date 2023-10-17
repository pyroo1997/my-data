import Products from "../../products/products";
import { Context } from "../../../utils/context";
import { useContext, useEffect, useState } from "react"; // Added useState

import { fetchDataFromApi } from "../../../utils/api";

export default function RelatedProducts({ productId }) {
  const { products, setProducts } = useContext(Context);
  const [currentCatId, setCurrentCatId] = useState(null); // Added useState

  useEffect(() => {
    getCatId();
  }, []); // Only fetch catId initially

  useEffect(() => {
    if (currentCatId !== null) {
      getProducts();
    }
  }, [currentCatId, productId]); // Fetch products when currentCatId changes

  const getCatId = () => {
    fetchDataFromApi(
      `/api/products?populate=*&[filters][id]=${productId}`
    ).then((res) => {
      const newCatId = res.data[0].attributes.categories.data[0].id;
      setCurrentCatId(newCatId);
    });
  };

  const getProducts = () => {
    if (currentCatId !== null) {
      fetchDataFromApi(
        `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${currentCatId}`
      ).then((res) => {
        setProducts(res);
      });
    }
  };

  return (
    <div>
      <Products
        innerPage={false}
        heading={"Related Products"}
        products={products}
      />
    </div>
  );
}
