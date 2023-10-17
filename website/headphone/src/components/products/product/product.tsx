import { useNavigate, useParams } from "react-router-dom";

import useFetch from "../../../utils/usefetch";

export default function Product({ id, data }) {
  const navigate = useNavigate();

  return (
    <div
      className="mx-auto w-[90%] h-[100%]"
      onClick={() => navigate("/product/" + id)}>
      <div className="w-[160px] h-[160px] sm:w-[250px] sm:h-[250px] md:w-[320px] md:h-[320px] lg:w-[200px] lg:h-[200px] xl:w-[240px] xl:h-[240px] bg-gray-100 rounded-sm">
        <img
          className="hover:scale-110 transition ease-in-out 600ms"
          src={
            import.meta.env.VITE_REACT_APP_DEV_URL +
            data.P_img.data[0].attributes.url
          }
          alt=""
        />
      </div>
      <div className="block">
        <span className="block truncate">{data.P_name}</span>
      </div>

      <h3 className="mt-2 text-gray-500">&#8377;{data.Price}</h3>
    </div>
  );
}
