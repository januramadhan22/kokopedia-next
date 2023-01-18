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
import TopCategories from "@/components/Card/TopCategories";
import FormPulsa from "@/components/Card/FormPulsa";
import FormListrik from "@/components/Card/FormListrik";

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
  const [pulsa, setPulsa] = useState(true);
  const [kuota, setKuota] = useState(false);
  const [listrik, setListrik] = useState(false);
  const [categories, setCategories] = useState([]);
  const topCategories = [
    { id: 1, name: "Cincin", gender: "Wanita" },
    { id: 2, name: "Flat Shoes", gender: "Wanita" },
    { id: 3, name: "Laptop" },
    { id: 4, name: "T-Shirt", gender: "Pria" },
  ];

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

        {/* Categories Content */}
        <div className="w-full md:px-10 lg:px-14 my-7 ">
          <div className="w-full p-4 flex flex-col items-center gap-6 border rounded-xl shadow-md bg-white">
            {/* Top Categories */}
            <div className="w-full flex flex-col lg:flex-row md:gap-4 lg:gap-2">
              <div className="w-full lg:w-1/2 h-full flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  Kategori Terpopuler
                </h3>
                <div className="w-full flex gap-4">
                  {topCategories.map((item) => (
                    <TopCategories
                      key={item.id}
                      name={item.name}
                      gender={item.gender}
                    />
                  ))}
                </div>
              </div>

              {/* TopUp & Tagian */}
              <div className="w-full lg:w-1/2 h-full flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  Top Up & Tagihan
                </h3>
                <div className="w-full h-full border rounded-lg">
                  <div className="w-full flex border-b">
                    <button
                      onClick={() => {
                        setPulsa(true);
                        setKuota(false);
                        setListrik(false);
                      }}
                      className={`px-10 py-2 font-semibold text-gray-500 hover:text-gray-700 transition ease-linear duration-200 ${
                        pulsa &&
                        "text-green-500 border-b-2 border-b-green-500 hover:text-green-500"
                      }`}
                    >
                      Pulsa
                    </button>
                    <button
                      onClick={() => {
                        setKuota(true);
                        setPulsa(false);
                        setListrik(false);
                      }}
                      className={`px-10 py-2 font-semibold text-gray-500 hover:text-gray-700 transition ease-linear duration-200 ${
                        kuota &&
                        "text-green-500 border-b-2 border-b-green-500 hover:text-green-500"
                      }`}
                    >
                      Paket Data
                    </button>
                    <button
                      onClick={() => {
                        setListrik(true);
                        setKuota(false);
                        setPulsa(false);
                      }}
                      className={`px-10 py-2 font-semibold text-gray-500 hover:text-gray-700 transition ease-linear duration-200 ${
                        listrik &&
                        "text-green-500 border-b-2 border-b-green-500 hover:text-green-500"
                      }`}
                    >
                      Listrik PLN
                    </button>
                  </div>
                  {pulsa ? (
                    <FormPulsa />
                  ) : kuota ? (
                    <FormPulsa />
                  ) : (
                    <FormListrik />
                  )}
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="w-full flex flex-wrap md:flex-nowrap gap-2 justify-center">
              <button className="px-4 py-1.5 border rounded-xl shadow-md hover:border-green-500 active:scale-95 transition-colors ease-linear duration-200">
                <p className="flex items-center gap-1 text-gray-500">
                  <BiCategory className="text-lg text-green-500" />
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
                      <CgSmartHomeRefrigerator className="text-lg text-blue-500" />
                      {item}
                    </p>
                  ) : item == "jewelery" ? (
                    <p className="flex items-center gap-1 text-gray-500">
                      <GiDoorRingHandle className="text-lg text-yellow-500" />
                      {item}
                    </p>
                  ) : item == "men's clothing" ? (
                    <p className="flex items-center gap-1 text-gray-500">
                      <FaTshirt className="text-lg text-green-500" /> {item}
                    </p>
                  ) : (
                    <p className="flex items-center gap-1 text-gray-500">
                      <GiLargeDress className="text-lg text-pink-500" /> {item}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product List */}
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
