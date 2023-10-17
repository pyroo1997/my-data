import { useLockBodyScroll } from "@uidotdev/usehooks";
import { useState } from "react";

import prod from "../../assets/products/earbuds-prod-4.webp";

export default function SearchComponent({ setShowSearch = {} }) {
  useLockBodyScroll();

  return (
    <div className="fixed top-0 z-50 bg-white w-[100%] h-[100%] animate-slidey">
      <div className="flex justify-between bg-gray-300 p-6 rounded-sm">
        <input
          className="w-full h-[60px] rounded-md p-4 mr-4 border-none outline-none"
          type="text"
          autoFocus
          placeholder="Search for item"
        />
        <button
          className="bg-purple-600 text-white w-[150px] rounded-md"
          onClick={() => {
            setShowSearch(false);
          }}>
          close
        </button>
      </div>
      <div className="w-full max-h-[85vh] overflow-y-scroll">
        <div className="p-4 w-full h-[10%] md:h-[150px]">
          <div className="flex justify-start items-center h-full">
            <div className="bg-gray-300 w-[15%] h-[100%] mr-4">
              <img src={prod} alt="" />
            </div>
            <div>
              <h1 className="text-based">Producy Name</h1>
              <h2 className="text-xs text-gray-400">Product Discription</h2>
            </div>
          </div>
        </div>
        <hr className="w-[90%] mx-auto" />
      </div>
    </div>
  );
}
