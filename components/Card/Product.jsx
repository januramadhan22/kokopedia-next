import Image from "next/image";
import React, { useState } from "react";
import { HiStar } from "react-icons/hi";
import { SlOptions } from "react-icons/sl";
import Link from "next/link";

function Product({
  productId,
  title,
  price,
  description,
  image,
  rating,
  sold,
}) {
  const [option, setOption] = useState(false);

  return (
    <>
      <div className="relative my-10 flex justify-center gap-1 bg-white ">
        <Link href={`/detail/${productId}`}>
          <div className="w-48 max-h-72 flex flex-col gap-2 rounded-lg border hover:scale-105 cursor-pointer hover:z-30 hover:border-green-400 transition ease-linear duration-200 shadow-md bg-white">
            <div className="w-full h-1/2 p-2 flex justify-center">
              <img src={image} className="rounded-t-lg h-28" />
            </div>
            <div className="w-full flex flex-col gap-2 px-2">
              <p className="text-sm font-semibold text-gray-700 truncate">
                {title}
              </p>
              <p className="text-sm text-justify flex-wrap text-gray-500 truncate">
                {description}
              </p>
              <h3 className="text-lg font-semibold text-gray-800">$ {price}</h3>
            </div>
            <div className="w-full pb-2 px-2 flex justify-between items-center rounded-b-lg">
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <HiStar className="fill-yellow-500 text-lg" />
                <p>{rating}</p>
                <span className="h-3 mx-1 border-r rounded-md border-gray-400"></span>
                <p>Terjual {sold}+</p>
              </div>
              {/* <button onClick={() => setOption(!option)}>
                <SlOptions className="text-sm fill-gray-400" />
              </button> */}
            </div>
          </div>
        </Link>

        {/* Option */}
        {option && (
          <div className="absolute z-50 -right-32 bottom-0 px-1 py-1 border rounded-md shadow bg-white">
            <button className="px-2.5 py-1 rounded-md text-sm font-normal hover:bg-gray-200">
              Masukkan Keranjang
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Product;
