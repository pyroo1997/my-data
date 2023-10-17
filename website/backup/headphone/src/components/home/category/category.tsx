import { useHref } from "react-router-dom";
import cat1 from "../../../assets/category/cat-1.jpg";
import cat2 from "../../../assets/category/cat-2.jpg";
import cat3 from "../../../assets/category/cat-3.jpg";
import cat4 from "../../../assets/category/cat-4.jpg";

export default function Category({ categories }) {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-4 p-4 mx-auto xl:grid xl:grid-cols-4 xl:gap-4 xl:p-[80px] xl:w-[90%] ">
        {categories.data.map((item) => {
          <div className="overflow-hidden">
            <img
              className="hover:scale-125 hover:brightness-50 transition ease-in-out 300ms"
              src={import.meta.env.VITE_REACT_APP_DEV_URL}
              alt=""
            />
          </div>;
        })}
      </div>
    </div>
  );
}
