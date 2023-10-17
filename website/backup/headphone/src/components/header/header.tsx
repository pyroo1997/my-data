import { Context } from "../../utils/context";
import { SearchOutline, HeartOutline, CartOutline } from "react-ionicons";
import Cart from "../cart/cart";
import { useState } from "react";

import SearchComponent from "../search/searchComponent";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <Modal handleClose={() => setIsOpen(false)} />}
      <nav className="flex sticky w-full items-center justify-between text-2xl pl-[25px] bg-slate-950 text-white h-[80px] md:pr-[25px]  top-0 xl:pl-[200px] xl:pr-[200px] z-50">
        <div className="hidden md:block w-[25%]">
          <a href="/" className="pr-5 text-lg">
            Home
          </a>
          <a href="/product/1" className="pr-5 text-lg">
            Product
          </a>
          <a href="/category/1" className="pr-5 text-lg">
            Categories
          </a>
        </div>
        <div className="m">
          <a href="/">JSDEVSTORE.</a>
        </div>
        <div className="flex justify-start md: pr-[25px]">
          <div className="pl-5">
            <SearchOutline
              color={"white"}
              onClick={() => {
                setShowSearch(true);
              }}
            />
          </div>
          <div className="pl-5">
            <HeartOutline color={"white"} />
          </div>
          <div className="pl-5">
            <CartOutline
              onClick={() => {
                setShowCart(true);
              }}
              color={"white"}
            />
            <span className="absolute flex justify-center items-center border top-6 right-[20px] h-[16px] w-[16px] bg-red-500/75 rounded-full border-none md:right-[44px] xl:right-[220px]">
              <h4
                className="text-white
              text-[10px]">
                0
              </h4>
            </span>
          </div>
        </div>
      </nav>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <SearchComponent setShowSearch={setShowSearch} />}
    </>
  );
}
