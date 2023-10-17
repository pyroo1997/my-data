import { useNavigate } from "react-router-dom";
import prod from "../../../assets/product-1.webp";

export function CardDefault({ data, id }) {
  const Navigate = useNavigate();

  return (
    <>
      <div onClick={() => Navigate(`/${data?.title}/:${id}`)}>
        <img
          src={
            import.meta.env.VITE_REACT_APP_DEV_URL +
            data?.thumbnail?.data?.attributes.url
          }
          alt=""
        />
        <div className="flex w-[100%]">
          <div className="block w-[68%] pl-[2%]">
            <h1 className="text-l">{data?.title}</h1>
            <h1 className="text-sm text-gray-500">₹ {data?.price}</h1>
          </div>
          <div className="flex w-[28%] text-green-300 pr-[2%] self-end">
            50%off
          </div>
        </div>
      </div>
    </>
  );
}
