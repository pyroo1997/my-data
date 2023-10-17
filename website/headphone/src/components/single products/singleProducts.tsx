import {
  LogoLinkedin,
  LogoFacebook,
  LogoTwitter,
  LogoInstagram,
  Cart,
} from "react-ionicons";

import { useState, useEffect, useContext } from "react";
import RelatedProducts from "./related products/relatedProducts";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

export default function SingleProduct() {
  const [amount, setAmount] = useState(1);
  const [pData, setPData] = useState(null);
  const { id } = useParams();

  const { handleAddToCart } = useContext(Context);

  useEffect(() => {
    getproduct();
  }, [id]);

  const handlePlusAmount = () => {
    if (amount === 10) {
      setAmount(amount);
    } else {
      setAmount(amount + 1);
    }
  };

  const handleMinusAmount = () => {
    if (amount <= 0) {
      setAmount(0);
    } else {
      setAmount(amount - 1);
    }
  };

  const getproduct = () => {
    fetchDataFromApi(`/api/products?populate=*&[filters][id]=${id}`).then(
      (res) => {
        const data = res;
        setPData(data);
      }
    );
  };

  const details = pData?.data[0]?.attributes;

  return (
    <div>
      <div className=" p-10 w-60% mx-auto h-auto lg:flex lg:justify-between">
        <div className="bg-gray-100 lg:w-[45%]">
          <img
            className="mx-auto"
            src={
              import.meta.env.VITE_REACT_APP_DEV_URL +
              details?.P_img?.data[0]?.attributes?.url
            }
            alt=""
          />
        </div>
        <div className="lg:w-[50%]">
          <h1 className="text-xl pt-4 pb-2 lg:text-3xl lg:pb-2">
            {details?.P_name}
          </h1>
          <h2 className="text-sm text-gray-600 pb-2 lg:text-base lg:pb-4">
            &#8377;{details?.Price}
          </h2>
          <p className="text-xs text-gray-400 pb-8 lg:text-sm">
            {details?.Desc}
          </p>
          <div className="flex pb-4">
            <div className="flex">
              <button
                className="w-[40px] h-[30px] rounded-sm border-[1px] border-solid
              "
                onClick={handleMinusAmount}>
                -
              </button>
              <div className="w-[60px] h-[30px] flex justify-center items-center rounded-sm border-[1px] border-solid">
                {amount}
              </div>
              <button
                className="w-[40px] h-[30px] rounded-sm border-[1px] border-solid"
                onClick={handlePlusAmount}>
                +
              </button>
            </div>
            <button
              className="flex justify-center items-center px-2 ml-2 w-[150px] h-[30px] bg-purple-600"
              onClick={() => {
                handleAddToCart(pData.data[0], amount);
                setAmount(1);
              }}>
              <Cart color={"#ffffff"} />
              <h1 className="pl-2 text-sm text-white">Add To Cart</h1>
            </button>
          </div>
          <hr className="pb-2" />
          <div className="flex pt-4">
            <h1 className="pr-2 text-xs text-gray-500">Category:</h1>
            <h1 className="text-xs pb-2 text-gray-500">
              {details?.categories.data[0].attributes.Title}
            </h1>
          </div>
          <div className="flex">
            <h1 className="pr-1 text-xs text-gray-500">Share:</h1>
            <div className="flex justify-around w-[100px]">
              <LogoFacebook height="15px" width={"auto"} color={"#374151"} />
              <LogoInstagram height="15px" width={"auto"} color={"#374151"} />
              <LogoLinkedin height="15px" width={"auto"} color={"#374151"} />
              <LogoTwitter height="15px" width={"auto"} color={"#374151"} />
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts productId={id} />
    </div>
  );
}
