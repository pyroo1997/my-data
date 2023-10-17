import React, { useContext, useEffect } from "react";
import { CardDefault } from "./product/product";

export default function Products({ data }) {
  return (
    <div className="grid grid-cols-3 gap-4 w-[60%] mx-auto pt-4 pb-16">
      {data?.data?.map((item) => (
        <CardDefault key={item.id} id={item.id} data={item.attributes} />
      ))}
    </div>
  );
}
