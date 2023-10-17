import product1 from "../../../assets/products/earbuds-prod-1.webp";

export default function Product() {
  return (
    <div className="mx-auto">
      <div className="w-[160px] h-[160px] sm:w-[250px] sm:h-[250px] md:w-[320px] md:h-[320px] lg:w-[200px] lg:h-[200px] xl:w-[240px] xl:h-[240px] bg-gray-100 rounded-sm">
        <img
          className="hover:scale-110 transition ease-in-out 600ms"
          src={product1}
          alt=""
        />
      </div>
      <span className="">Product Name</span>

      <h3>&#8377;Price</h3>
    </div>
  );
}
