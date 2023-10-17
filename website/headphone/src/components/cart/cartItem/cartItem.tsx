import { CloseOutline } from "react-ionicons";
import { useContext } from "react";
import { Context } from "../../../utils/context";

export default function CartItem({ cartItem }) {
  const { handleRemoveFromCart, handleCartProductQuantity } =
    useContext(Context);
  return (
    <div className="max-h-[78%] overflow-y-scroll">
      {cartItem.map((item) => (
        <div
          key={item.id}
          className="flex h-[100px] px-2 py-2 my-2 hover:bg-gray-300 ease-in duration-150">
          <div className="flex justify-center items-center h-[100%] w-[30%]">
            <div className=" w-[100%] h-[100%] ">
              <img
                className=" h-full w-auto mx-auto"
                src={
                  import.meta.env.VITE_REACT_APP_DEV_URL +
                  item.attributes.P_img.data[0].attributes.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="px-4 w-[60%]">
            <h1 className="pb-0 truncate">
              {item.attributes.P_name} - &#8377;{item.attributes.Price}
            </h1>

            <div className="flex pb-2">
              <button
                className="w-[30px] h-[30px] rounded-sm border-[1px] border-solid
                    "
                onClick={() => {
                  handleCartProductQuantity("dec", item);
                }}>
                -
              </button>
              <div className="w-[40px] h-[30px] flex justify-center items-center rounded-sm border-[1px] border-solid">
                {item.attributes.quantity}
              </div>
              <button
                className="w-[30px] h-[30px] rounded-sm border-[1px] border-solid"
                onClick={() => {
                  handleCartProductQuantity("inc", item);
                }}>
                +
              </button>
            </div>
            <h1>
              {item.attributes.quantity} x
              {item.attributes.quantity * item.attributes.Price}
            </h1>
          </div>
          <div className="w-[10%]">
            <button onClick={() => handleRemoveFromCart(item)}>
              <CloseOutline />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
