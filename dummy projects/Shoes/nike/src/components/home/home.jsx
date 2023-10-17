import React, { useEffect, useContext } from "react";
import Hero from "./hero/hero";
import Products from "../products/products";
import { Context } from "../../utils/context";
import { fetchDataFromApi } from "../../utils/api";

export default function Home() {
  const { products, setProducts } = useContext(Context);

  useEffect(() => {
    fetchDataFromApi("/api/pruducts?populate=*").then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div className="h-[100%]">
      <Hero />
      <Products data={products?.data} />
    </div>
  );
}
