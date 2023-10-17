import React from "react";
import CartItem from "./cartComponent/CartItem";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Cart() {
  return (
    <div className="w-[60%] mx-auto">
      <h1 className="mx-auto text-center text-3xl py-10">Shopping Cart</h1>
      <div className="flex">
        <div className="basis-2/3">
          <h1>Cart Items</h1>
          <CartItem />
          <hr className="my-2 mx-auto w-[95%] border-1 border-gray-300" />
        </div>
        <div className="basis-1/3">
          <h1 className="text-xl pl-10">Summary</h1>
          <Card className="mt-6 w-96 m-4 bg-gray-200">
            <CardBody>
              <div className="flex justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 text-base">
                  SUBTOTAL
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 text-base text-gray-600">
                  ₹ 1,999
                </Typography>
              </div>
              <hr className="my-2  border-1 border-gray-300" />
              <Typography className="text-sm text-gray-600">
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
