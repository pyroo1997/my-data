import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, useState } from "react";
import { CloseOutline } from "react-ionicons";

import Home from "./components/home/home";
import Category from "./components/category/category";
import Header from "./components/header/header";
import Newsletter from "./components/newsletter/newsletter";
import Footer from "./components/footer/footer";

import SingleProduct from "./components/single products/singleProducts";
import { Context } from "./utils/context";

import Products from "./components/products/products";

function App() {
  const { products, categories, cartItem } = useContext(Context);
  const [showWarn, setShowWarn] = useState(true);

  return (
    <BrowserRouter>
      {showWarn && (
        <div className="sticky top-0 flex justify-between m-auto w-full">
          <h1 className="pl-4 font-extralight">
            This is a Dummy website Project for web development !!!
          </h1>
          <button className="">
            <CloseOutline onClick={() => setShowWarn(false)} />
          </button>
        </div>
      )}

      <Header cartItem={cartItem} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/category/:id"
          element={<Category products={products} categoreies={categories} />}
        />
        <Route
          path="/products/:id"
          element={<Products products={products} />}
        />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
