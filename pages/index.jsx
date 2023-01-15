import Banner from "@/components/Card/Banner";
import Product from "@/components/Card/Product";
import Header from "@/components/Header";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

import { BiCategory } from "react-icons/bi";

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

  const categories = [
    "All Products",
    "Clothes",
    "Electronics",
    "Sports",
    "Gadget",
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

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="w-full flex flex-col ">
        <Header />
        {/* <Banner /> */}
        <div className="w-full my-7 flex justify-center gap-3">
          {categories.map((item) => (
            <button
              key={item}
              className="px-4 py-1.5 border rounded-xl shadow-md hover:border-green-500 active:scale-95 transition-colors ease-linear duration-200"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="w-full px-14 grid grid-cols-5">
          {products.map((item) => (
            <Product
              key={item.id}
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
