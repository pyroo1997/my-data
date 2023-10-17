import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/home";
import Category from "./components/category/category";
import Header from "./components/header/header";
import Newsletter from "./components/newsletter/newsletter";
import Footer from "./components/footer/footer";
import AppContext from "./utils/context";
import SingleProduct from "./components/single products/singleProducts";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
