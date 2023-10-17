import Category from "./category/category";
import Products from "../products/products";
import Banner from "./banner";
import { fetchDataFromApi } from "../../utils/api";
import { useEffect, useContext } from "react";
import { Context } from "../../utils/context";

export default function Home() {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getProducts();
    getCatregories();
  }, []);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };

  const getCatregories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };
  return (
    <div>
      <Banner />
      <Category categories={categories} products={products} />
      <Products
        products={products}
        innerPage={false}
        heading={"Poppular Products"}
      />
    </div>
  );
}
