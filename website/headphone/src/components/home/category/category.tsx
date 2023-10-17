import { useNavigate } from "react-router-dom";

export default function Category({ categories }) {
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-4 p-4 mx-auto xl:grid xl:grid-cols-4 xl:gap-4 xl:p-[80px] xl:w-[90%] ">
        {categories.data.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden"
            onClick={() => navigate(`/category/${item.id}`)}>
            <img
              className="hover:scale-125 hover:brightness-50 transition ease-in-out 300ms"
              src={
                import.meta.env.VITE_REACT_APP_DEV_URL +
                item.attributes.img.data.attributes.url
              }
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
