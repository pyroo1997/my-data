import { useLockBodyScroll } from "@uidotdev/usehooks";
import { useEffect, useState, useContext } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";

import prod from "../../assets/products/earbuds-prod-4.webp";

export default function SearchComponent({ setShowSearch = {} }) {
  useLockBodyScroll();
  const navigate = useNavigate();

  const { products, setProducts } = useContext(Context);
  const [quary, setQuary] = useState("");

  const onChange = (e) => {
    setQuary(e.target.value);
  };

  useEffect(() => {
    searchedProd();
  }, [onChange]);

  const searchedProd = () => {
    fetchDataFromApi(
      `/api/products?populate=*&filters[P_name][$contains]=${quary}`
    ).then((res) => {
      setProducts(res);
    });
  };

  return (
    <div className="fixed top-0 z-50 bg-white w-[100%] h-[100%] animate-slidey">
      <div className="flex justify-between bg-gray-300 p-6 rounded-sm">
        <input
          className="w-full h-[60px] rounded-md p-4 mr-4 border-none outline-none"
          type="text"
          autoFocus
          placeholder="Search for item"
          onChange={onChange}
        />
        <button
          className="bg-purple-600 text-white w-[150px] rounded-md"
          onClick={() => {
            setShowSearch(false);
          }}>
          close
        </button>
      </div>
      <div className="relative w-full h-[85vh] overflow-y-scroll">
        <div className="relative p-4 w-full h-[100%] md:h-[150px]">
          {products.data.map((item) => (
            <div
              className="flex justify-start items-center h-full"
              onClick={() => {
                navigate(`/product/${item.id}`);
                setShowSearch(false);
              }}>
              <div key={item.id} className=" w-[auto] h-[80%] mr-4">
                <img
                  className="h-full"
                  src={
                    import.meta.env.VITE_REACT_APP_DEV_URL +
                    item.attributes.P_img.data[0].attributes.url
                  }
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-based">{item.attributes.P_name}</h1>

                <h2 className="text-xs text-gray-600">
                  &#8377;{item.attributes.Price}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
}
