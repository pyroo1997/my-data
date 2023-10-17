import { CloseOutline, AlertOutline } from "react-ionicons";
import CartItem from "./cartItem/cartItem";
import { useLockBodyScroll } from "@uidotdev/usehooks";

import { useState } from "react";

export default function Cart({ setShowCart = {} }) {
  useLockBodyScroll();
  return (
    <div className="fixed  bg-[rgb(0,0,0,0.5)] z-50 flex w-[100%] h-[92%]">
      <div className="z-50 w-[25%] sm:w-[60%] md:w-[70%] lg:w-[75%]"></div>
      <div className=" bg-white w-[75%] sm:w-[70%] md:w-[60%] lg:w-[40%] xl:w-[25%] px-2 pt-2 lg:px-8 lg:pt-4 animate-slidex ">
        <div className="flex justify-between items-center ">
          <h1>Cart</h1>
          <button
            className="flex items-center text-md p-1 h-[40px] w-[100px]"
            onClick={() => {
              setShowCart(false);
            }}>
            <CloseOutline />
            Close
          </button>
        </div>
        <hr className="h-[20px] w-[100%] mx-auto" />
        <div className="max-h-[78%] overflow-y-scroll">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="relative h-[auto]">
          <hr />
          <div className="flex justify-between items-center p-2 h-12">
            <h1>SUBTOTAL:</h1>
            <h1>&#8377;4565</h1>
          </div>
          <hr />
          <div className="flex justify-center items-center p-8 h-12">
            <button className="bg-purple-500 text-white p-2 rounded-sm ease-in-out duration-150 hover:bg-black ">
              CHECKOUT
            </button>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
