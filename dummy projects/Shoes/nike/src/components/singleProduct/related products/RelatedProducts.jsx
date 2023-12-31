import React from "react";
import { CardDefault } from "../../products/product/product";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function RelatedProducts() {
  return (
    <>
      <Carousel
        responsive={responsive}
        itemClass="px-2"
        className="w-[60%] mx-auto">
        <CardDefault />
        <CardDefault />
        <CardDefault />
        <CardDefault />
        <CardDefault />
        <CardDefault />
        <CardDefault />
        <CardDefault />
        <CardDefault />
        <CardDefault />
        <CardDefault />
        <CardDefault />
      </Carousel>
    </>
  );
}
