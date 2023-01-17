import Banner from "@/components/Card/Banner";
import Product from "@/components/Card/Product";
import Header from "@/components/Header";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { BiCategory } from "react-icons/bi";
import { FaTshirt } from "react-icons/fa";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { GiDoorRingHandle, GiLargeDress } from "react-icons/gi";

// export async function getServerSideProps() {
//   const res = await fetch("https://fakestoreapi.com/products");
//   const data = await res.json();
//   console.log(data);

//   return {
//     props: {
//       data,
//     },
//   };
// }

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = async () => {
    await axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        alert("Data Gagal Didapat");
      });
  };

  const getCategories = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/categories`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        alert("Data Gagal Didapat");
      });
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <div className="w-full flex flex-col ">
        <Header />
        {/* <Banner /> */}
        <div className="w-full my-7 flex justify-center gap-3">
          <button className="px-4 py-1.5 border rounded-xl shadow-md hover:border-green-500 active:scale-95 transition-colors ease-linear duration-200">
            <p className="flex items-center gap-1 text-gray-500">
              <BiCategory />
              All Categories
            </p>
          </button>
          {categories.map((item) => (
            <button
              key={item}
              className="px-4 py-1.5 border rounded-xl shadow-md hover:border-green-500 active:scale-95 transition-colors ease-linear duration-200"
            >
              {item == "electronics" ? (
                <p className="flex items-center gap-1 text-gray-500">
                  <CgSmartHomeRefrigerator /> {item}
                </p>
              ) : item == "jewelery" ? (
                <p className="flex items-center gap-1 text-gray-500">
                  <GiDoorRingHandle /> {item}
                </p>
              ) : item == "men's clothing" ? (
                <p className="flex items-center gap-1 text-gray-500">
                  <FaTshirt /> {item}
                </p>
              ) : (
                <p className="flex items-center gap-1 text-gray-500">
                  <GiLargeDress /> {item}
                </p>
              )}
            </button>
          ))}
        </div>
        <div className="w-full px-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {products.map((item) => (
            <Product
              key={item.id}
              productId={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              image={item.image}
              rating={item.rating.rate}
              sold={item.rating.count}
            />
          ))}
        </div>
      </div>
    </>
  );
}
