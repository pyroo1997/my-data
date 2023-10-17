import React from "react";
import Products from "../products/products";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowBack, ArrowForward } from "react-ionicons";

export default function CategoryPage() {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "gray",
      onClick: () => setActive(index),
      className: "rounded-full",
    } as any);

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className="mx-auto">
      <h1 className="text-center text-3xl p-10">Category Name</h1>
      <Products />
      <div className="w-[80%] mx-auto">
        <div className="flex w-[40%] mx-auto items-center gap-4">
          <Button
            variant="text"
            className="flex items-center gap-2 rounded-full"
            onClick={prev}
            disabled={active === 1}>
            <ArrowBack /> Previous
          </Button>
          <div className="flex items-center gap-2">
            <IconButton {...getItemProps(1)}>1</IconButton>
            <IconButton {...getItemProps(2)}>2</IconButton>
            <IconButton {...getItemProps(3)}>3</IconButton>
            <IconButton {...getItemProps(4)}>4</IconButton>
            <IconButton {...getItemProps(5)}>5</IconButton>
          </div>
          <Button
            variant="text"
            className="flex items-center gap-2 rounded-full"
            onClick={next}
            disabled={active === 5}>
            Next
            <ArrowForward />
          </Button>
        </div>
      </div>
    </div>
  );
}
