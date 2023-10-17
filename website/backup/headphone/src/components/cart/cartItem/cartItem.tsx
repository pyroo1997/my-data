import { CloseOutline } from "react-ionicons";
import { useEffect, useState } from "react";

export default function CartItem() {
  const [cartAmout, setCartAmount] = useState(0);
  const [totalProdPrice, setTotalProdPrice] = useState(0);

  useEffect(() => {
    const price = 3599;
    setTotalProdPrice(cartAmout * price);
  }, [cartAmout]);

  const handlePlus = () => {
    if (cartAmout === 10) {
      setCartAmount(cartAmout);
    } else {
      setCartAmount(cartAmout + 1);
    }
  };

  const handleMinus = () => {
    if (cartAmout <= 0) {
      setCartAmount(cartAmout);
    } else {
      setCartAmount(cartAmout - 1);
    }
  };

  return (
    <div className="flex h-[100px] px-2 py-2 my-2 hover:bg-gray-300 ease-in duration-150">
      <div className="flex justify-center items-center h-[100%] w-[30%]">
        <div className="bg-gray-600 w-[80%] h-[80%] "></div>
      </div>
      <div className="px-4 w-[60%]">
        <h1 className="pb-1">Product Name</h1>
        <div className="flex pb-2">
          <button
            className="w-[30px] h-[30px] rounded-sm border-[1px] border-solid
              "
            onClick={handleMinus}>
            -
          </button>
          <div className="w-[40px] h-[30px] flex justify-center items-center rounded-sm border-[1px] border-solid">
            {cartAmout}
          </div>
          <button
            className="w-[30px] h-[30px] rounded-sm border-[1px] border-solid"
            onClick={handlePlus}>
            +
          </button>
        </div>
        <h1>
          {cartAmout} x {totalProdPrice}
        </h1>
      </div>
      <div className="w-[10%]">
        <button>
          <CloseOutline />
        </button>
      </div>
    </div>
  );
}
