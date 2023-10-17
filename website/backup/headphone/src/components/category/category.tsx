import Products from "../products/products";

export default function Category() {
  return (
    <div>
      <div>
        <h1 className="text-3xl pt-20 pl-[9%] pb-8">Category Name</h1>
      </div>
      <Products innerPage={true} heading={"Products"} />
    </div>
  );
}
