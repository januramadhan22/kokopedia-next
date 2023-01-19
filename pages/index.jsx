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
import Profile from "./Profile";

export async function getServerSideProps() {
  // Get All Products
  const resProducts = await fetch("https://fakestoreapi.com/products");
  const dataProducts = await resProducts.json();

  // Get Categories
  const resCategories = await fetch(
    "https://fakestoreapi.com/products/categories"
  );
  const dataCategories = await resCategories.json();

  // Get Products by Categories
  const resJewelery = await fetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  const getJewelery = await resJewelery.json();

  const resElectronics = await fetch(
    "https://fakestoreapi.com/products/category/electronics"
  );
  const getElectronics = await resElectronics.json();

  const resMensCloth = await fetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  );
  const getMensCloth = await resMensCloth.json();

  const resWomensCloth = await fetch(
    "https://fakestoreapi.com/products/category/women's clothing"
  );
  const getWomensCloth = await resWomensCloth.json();

  return {
    props: {
      dataProducts,
      dataCategories,
      getJewelery,
      getElectronics,
      getMensCloth,
      getWomensCloth,
    },
  };
}

export default function Home({
  dataProducts,
  dataCategories,
  getJewelery,
  getElectronics,
  getMensCloth,
  getWomensCloth,
}) {
  const [pulsa, setPulsa] = useState(true);
  const [kuota, setKuota] = useState(false);
  const [listrik, setListrik] = useState(false);
  const [allProducts, setAllProducts] = useState(true);
  const [jewelery, setJewelery] = useState(false);
  const [electronics, setElectronics] = useState(false);
  const [mensCloth, setMensCloth] = useState(false);
  const [womensCloth, setWomensCloth] = useState(false);
  const topCategories = [
    {
      id: 1,
      name: "Cincin",
      gender: "Wanita",
      image:
        "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Flat Shoes",
      gender: "Wanita",
      image:
        "https://images.unsplash.com/photo-1604001307862-2d953b875079?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZsYXQlMjBzaG9lcyUyMHdvbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Laptop",
      image:
        "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "T-Shirt",
      gender: "Pria",
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
    },
  ];

  // CSR Get Data
  // const getProducts = async () => {
  //   await axios
  //     .get(`https://fakestoreapi.com/products`)
  //     .then((response) => {
  //       setProducts(response.data);
  //     })
  //     .catch((error) => {
  //       alert("Data Gagal Didapat");
  //     });
  // };

  // const getCategories = async () => {
  //   await axios
  //     .get(`https://fakestoreapi.com/products/categories`)
  //     .then((response) => {
  //       setCategories(response.data);
  //     })
  //     .catch((error) => {
  //       alert("Data Gagal Didapat");
  //     });
  // };

  // useEffect(() => {
  //   getProducts();
  //   getCategories();
  // }, []);

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
                      image={item.image}
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
              <button
                onClick={() => {
                  setJewelery(false);
                  setAllProducts(true);
                  setElectronics(false);
                  setMensCloth(false);
                  setWomensCloth(false);
                }}
                className="px-4 py-1.5 border rounded-xl shadow-md hover:border-green-500 active:scale-95 transition-colors ease-linear duration-200"
              >
                <p className="flex items-center gap-1 text-gray-500">
                  <BiCategory className="text-lg text-green-500" />
                  All Categories
                </p>
              </button>
              {dataCategories.map((item) => (
                <div key={item}>
                  {item == "electronics" ? (
                    <button
                      onClick={() => {
                        setAllProducts(false);
                        setJewelery(false);
                        setElectronics(true);
                        setMensCloth(false);
                        setWomensCloth(false);
                      }}
                      className="px-4 py-1.5 border rounded-xl shadow-md hover:border-green-500 active:scale-95 transition-colors ease-linear duration-200"
                    >
                      <p className="flex items-center gap-1 text-gray-500">
                        <CgSmartHomeRefrigerator className="text-lg text-blue-500" />
                        {item}
                      </p>
                    </button>
                  ) : item == "jewelery" ? (
                    <button className="px-4 py-1.5 border rounded-xl shadow-md hover:border-green-500 active:scale-95 transition-colors ease-linear duration-200">
                      <p
                        onClick={() => {
                          setAllProducts(false);
                          setJewelery(true);
                          setElectronics(false);
                          setMensCloth(false);
                          setWomensCloth(false);
                        }}
                        className="flex items-center gap-1 text-gray-500"
                      >
                        <GiDoorRingHandle className="text-lg text-yellow-500" />
                        {item}
                      </p>
                    </button>
                  ) : item == "men's clothing" ? (
                    <button
                      onClick={() => {
                        setAllProducts(false);
                        setJewelery(false);
                        setElectronics(false);
                        setMensCloth(true);
                        setWomensCloth(false);
                      }}
                      className="px-4 py-1.5 border rounded-xl shadow-md hover:border-green-500 active:scale-95 transition-colors ease-linear duration-200"
                    >
                      <p className="flex items-center gap-1 text-gray-500">
                        <FaTshirt className="text-lg text-green-500" /> {item}
                      </p>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setAllProducts(false);
                        setJewelery(false);
                        setElectronics(false);
                        setMensCloth(false);
                        setWomensCloth(true);
                      }}
                      className="px-4 py-1.5 border rounded-xl shadow-md hover:border-green-500 active:scale-95 transition-colors ease-linear duration-200"
                    >
                      <p className="flex items-center gap-1 text-gray-500">
                        <GiLargeDress className="text-lg text-pink-500" />{" "}
                        {item}
                      </p>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="w-full px-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {allProducts
            ? dataProducts.map((item) => (
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
              ))
            : jewelery
            ? getJewelery.map((item) => (
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
              ))
            : electronics
            ? getElectronics.map((item) => (
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
              ))
            : mensCloth
            ? getMensCloth.map((item) => (
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
              ))
            : womensCloth &&
              getWomensCloth.map((item) => (
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

      <Profile />
    </>
  );
}
