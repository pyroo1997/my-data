import React, { useEffect, useState } from "react";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";
import p7 from "../../assets/p7.png";
import { Button } from "@material-tailwind/react";
import RelatedProducts from "./related products/RelatedProducts";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";

export default function SingleProduct() {
  const [productDetails, setProductDetails] = useState();

  const { id } = useParams();
  const curId = id.slice(1);

  useEffect(() => {
    getSingleProductData();
  }, []);

  const getSingleProductData = () => {
    fetchDataFromApi(`/api/products?populate=*&[filters][id]=${curId}`).then(
      (res) => {
        const data = res;
        setProductDetails(data);
      }
    );
  };

  return (
    <>
      <div className="relative flex w-[60%] h-full mx-auto">
        <div className="w-[8%] px-2 mr-2 ">
          <img
            src={p1}
            className="mx-auto h-[8%] w-auto mt-2 rounded-lg shadow-md"
            alt=""
          />
          <img
            src={p2}
            className="mx-auto h-[8%] w-auto mt-2 rounded-lg shadow-md"
            alt=""
          />
          <img
            src={p3}
            className="mx-auto h-[8%] w-auto mt-2 rounded-lg shadow-md"
            alt=""
          />
          <img
            src={p4}
            className="mx-auto h-[8%] w-auto mt-2 rounded-lg shadow-md"
            alt=""
          />
          <img
            src={p5}
            className="mx-auto h-[8%] w-auto mt-2 rounded-lg shadow-md"
            alt=""
          />
          <img
            src={p6}
            className="mx-auto h-[8%] w-auto mt-2 rounded-lg shadow-md"
            alt=""
          />
          <img
            src={p7}
            className="mx-auto h-[8%] w-auto mt-2 rounded-lg shadow-md"
            alt=""
          />
        </div>
        <div className=" w-[46%] px-2  mr-2">
          <img
            src={p1}
            className="sticky top-4 mb-12 mt-2 rounded-md shadow-md"
            alt=""
          />
        </div>
        <div className="relative w-[46%] h-auto px-4 py-6  mr-2">
          <div className="w-[full] h-[10%] pb-4">
            <h1 className="text-3xl pb-4">Name............ Shoes</h1>
            <h1 className="text-xl text-gray-500">Category name</h1>
          </div>
          <div className="flex w-full h-[10%] py-2">
            <div className="basis-2/3">
              <h1 className="text-xl">MRP : ₹ 10,999 </h1>
              <h1 className="text-sm text-gray-500">incl. of taxes</h1>
              <h1 className="text-sm text-gray-500">
                ( Also Includes all applicable duties )
              </h1>
            </div>
            <div className="basis-1/3  text-green-400">12.50% off</div>
          </div>
          <div>
            <div className="flex justify-between py-4">
              <h1 className="text-gray-500">Select Size</h1>
              <h1 className="text-gray-500">Select Guide</h1>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-2 pb-4">
                <Button
                  variant="outlined"
                  className="h-[60px] text-base text-gray-800 shadow-md">
                  UK 6
                </Button>
                <Button
                  variant="outlined"
                  className="h-[60px] text-base text-gray-800 shadow-md">
                  UK 6.5
                </Button>
                <Button
                  variant="outlined"
                  className="h-[60px] text-base text-gray-800 shadow-md">
                  UK 7
                </Button>
                <Button
                  variant="outlined"
                  className="h-[60px] text-base text-gray-800 shadow-md">
                  UK 7.5
                </Button>
                <Button
                  variant="outlined"
                  className="h-[60px] text-base text-gray-800 shadow-md">
                  Uk 8
                </Button>
                <Button
                  variant="outlined"
                  className="h-[60px] text-base text-gray-800 shadow-md">
                  Uk 8.5
                </Button>
                <Button
                  variant="outlined"
                  className="h-[60px] text-base text-gray-800 shadow-md">
                  UK 9
                </Button>
                <Button
                  variant="outlined"
                  className="h-[60px] text-base text-gray-800 shadow-md">
                  UK 9.5
                </Button>
                <Button
                  variant="outlined"
                  className="h-[60px] text-base text-gray-800 shadow-md">
                  UK 10
                </Button>
                <Button
                  variant="outlined"
                  className="h-[60px] text-base text-gray-800 shadow-md">
                  UK 10.5
                </Button>
                <Button
                  variant="outlined"
                  className="h-[60px] text-base text-gray-800 shadow-md">
                  UK 11
                </Button>
                <Button
                  className="h-[60px] text-base text-gray-800 shadow-md"
                  variant="outlined">
                  UK 11.5
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center py-4 gap-4">
              <Button className="w-[50%] py-4 rounded-3xl shadow-lg">
                Add to Cart
              </Button>
              <Button
                className="w-[50%] py-4 rounded-3xl shadow-lg"
                variant="outlined">
                Wishlist
              </Button>
            </div>
            <div className="py-4">
              <h1 className="text-xl pb-4">Product Details</h1>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatibus vitae aperiam expedita sint iste rem consequatur
                ullam. Rem consectetur, commodi rerum at, asperiores eius
                architecto cum quaerat quam dignissimos unde!, Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Ipsa et inventore, hic
                deleniti ratione illum nemo quia vero voluptatum? Ratione fugiat
                repellendus deleniti rerum blanditiis, odio nostrum amet
                voluptatibus, Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Iusto ab aperiam fugiat non in libero harum reiciendis
                ipsam vero quod beatae, perferendis earum officia. Nobis ullam
                sunt libero reiciendis minus. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Vitae ex nostrum excepturi
                laudantium vel in, blanditiis perspiciatis ducimus enim unde
                voluptas placeat cumque quisquam eius recusandae id neque,
                deleniti beatae?
              </p>
            </div>
            <ul className="list-disc pl-4 pb-14">
              <li className="text-base">Color Style : Color name</li>
              <li>Style : asdas d-099</li>
            </ul>
          </div>
        </div>
      </div>
      <RelatedProducts />
    </>
  );
}
