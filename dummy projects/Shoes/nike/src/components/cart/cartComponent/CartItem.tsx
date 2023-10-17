import React from "react";
import prod1 from "../../../assets/product-1.webp";
import { IconButton } from "@material-tailwind/react";
import { TrashOutline } from "react-ionicons";

export default function CartItem() {
  return (
    <div className="flex h-[10vh] mx-2 my-8">
      <div className="w-[20%]">
        <img
          className=" h-[auto] w-[55%] mx-auto mt-2  rounded-xl"
          src={prod1}
          alt=""
        />
      </div>
      <div className="w-[80%]">
        <div className="w-full flex justify-between">
          <div>
            <h1 className="pt-2 text-xl">Air Jordan XXXVII Low PF</h1>
            <h1 className="text-gray-600 text-sm pb-2">Category Name</h1>
          </div>
          <h1 className="h-[50%] text-sm pt-2 pr-2">MRP: ₹ 1,999</h1>
        </div>
        <div className="w-full flex justify-between">
          <div className="flex">
            <div className="flex items-center pr-4">
              <h1 className="text-sm pr-2">Size:</h1>
              <select
                className="border-none rounded-md outline-none pr-1 text-sm"
                name="cars"
                id="cars">
                <option value="6.5">6.5</option>
                <option value="7">7</option>
                <option value="7.5">7.5</option>
                <option value="8">8</option>
              </select>
            </div>
            <div className="flex items-center pr-4">
              <h1 className="text-sm pr-2">Quantity:</h1>
              <select
                className="border-none rounded-md outline-none pr-1 text-sm"
                name="cars"
                id="cars">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
          <IconButton className="" variant="text">
            <TrashOutline />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
