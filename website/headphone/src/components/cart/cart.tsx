import { CloseOutline, AlertOutline } from "react-ionicons";
import CartItem from "./cartItem/cartItem";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { useContext } from "react";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";

export default function Cart({ setShowCart = {} }) {
  useLockBodyScroll();

  const { cartSubTotal, cartItem } = useContext(Context);
  const navigate = useNavigate();

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
        <CartItem cartItem={cartItem} />
        {cartItem.length === 0 && (
          <>
            <div className="flex items-center justify-center rounded-full bg-gray-200 mx-auto w-[150px] h-[150px]">
              <AlertOutline height="120px" width="120px" />
            </div>
            <h3 className="w-full h-[6%] text-center pt-4 pb-4">
              No Products in the cart.
            </h3>
            <div className="flex justify-center">
              <button
                className="w-[150px] h-10 bg-purple-600 border-[1px] rounded-[3px] text-white"
                onClick={() => {
                  navigate("/products/1");
                  setShowCart(false);
                }}>
                RETURN TO SHOP
              </button>
            </div>
          </>
        )}
        {cartItem.length > 0 && (
          <>
            <div className="relative h-[auto]">
              <hr />
              <div className="flex justify-between items-center p-2 h-12">
                <h1>SUBTOTAL:</h1>
                <h1>&#8377;{cartSubTotal}</h1>
              </div>
              <hr />
              <div className="flex justify-center items-center p-8 h-12">
                <button className="bg-purple-500 text-white p-2 rounded-sm ease-in-out duration-150 hover:bg-black ">
                  CHECKOUT
                </button>
              </div>
              <hr />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
