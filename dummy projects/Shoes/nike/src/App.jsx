import { Button } from "@material-tailwind/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/home/home";
import SingleProduct from "./components/singleProduct/singleProduct";
import { FooterWithSocialLinks } from "./components/footer/footer";
import Cart from "./components/cart/Cart";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import AppContext from "./utils/context";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Category" element={<CategoryPage />} />
        </Routes>
        <FooterWithSocialLinks />
      </BrowserRouter>
    </>
  );
}

export default App;
