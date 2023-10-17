import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between p-5 bg-green-100">
      <h1>Pyrokine</h1>
      <button className="bg-zinc-600 text-white p-2 rounded-lg w-[100px] h-[60]">
        Cart
      </button>
      <ul className="">
        <button className="bg-zinc-600 text-white p-2 rounded-lg w-[100px] h-[60] ml-2">
          login
        </button>
        <button className="bg-zinc-600 text-white p-2 rounded-lg w-[100px] h-[60] ml-2">
          contact us
        </button>
        <button className="bg-zinc-600 text-white p-2 rounded-lg w-[100px] h-[60] ml-2">
          About us
        </button>
      </ul>
    </div>
  );
}
