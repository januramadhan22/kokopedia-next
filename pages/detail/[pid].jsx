import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "@/components/Header";

import {
  HiStar,
  HiMinus,
  HiPlus,
  HiChat,
  HiHeart,
  HiShare,
  HiPencil,
} from "react-icons/hi";
import { BsDot } from "react-icons/bs";
import Information from "@/components/Modal/Information";
import Image from "next/image";

// export async function getServerSideDetail() {
//   const router = useRouter();
//   const { pid } = router.query;

//   const resDetailProduct = await fetch(
//     `https://fakestoreapi.com/products/${pid}`
//   );
//   const detailProduct = await resDetailProduct.json();

//   return {
//     props: {
//       detailProduct,
//     },
//   };
// }

function detail({ detailProduct }) {
  const router = useRouter();
  const { pid } = router.query;
  const [product, setProduct] = useState({});
  const [detailTabs, setDetailTabs] = useState(true);
  const [infoTabs, setInfoTabs] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [note, setNote] = useState(false);

  const getProduct = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${pid}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    pid && getProduct();
  }, []);

  return (
    <>
      <div className="w-full">
        <Header />
        <div className="w-full h-[1000px] py-12 px-16 flex gap-10">
          {/* Image Content*/}
          <div className="w-1/3 relative">
            <div className="fixed w-fit h-fit flex flex-col gap-2">
              <div className="w-80 h-96 p-6 flex items-center rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full max-h-72"
                />
              </div>
              <div className="flex gap-2">
                <div className="w-16 h-16 p-0.5 flex items-center justify-center cursor-pointer rounded-md border-2 border-green-400 transition duration-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Detail Content */}
          <div className="w-3/5 flex flex-col gap-3">
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold text-gray-700">
                {product.title}
              </h2>
              <div className="flex gap-0.5 items-center">
                <p>Terjual 120+</p>
                <BsDot className="text-2xl text-gray-500" />
                <div className="flex gap-0.5 items-center">
                  <HiStar className="fill-yellow-500 text-lg" />
                  <p>3.9</p>
                </div>
              </div>
            </div>
            <h1 className="text-4xl font-semibold text-gray-800 my-3">
              $ {product.price}
            </h1>
            <div className="w-full flex flex-col gap-2">
              <div className="w-full flex gap-5 border-y  ">
                <button
                  onClick={() => {
                    setDetailTabs(true);
                    setInfoTabs(false);
                  }}
                  className={`px-5 py-1 font-semibold text-gray-400 hover:text-gray-700 transition ease-linear duration-200 ${
                    detailTabs &&
                    "text-green-600 border-b-2 border-green-600 hover:text-green-600"
                  }`}
                >
                  Detail
                </button>
                <button
                  onClick={() => {
                    setInfoTabs(true);
                    setDetailTabs(false);
                  }}
                  className={`px-5 py-1 font-semibold text-gray-400 hover:text-gray-700 transition ease-linear duration-200 ${
                    infoTabs &&
                    "text-green-600 border-b-2 border-green-600 hover:text-green-600"
                  }`}
                >
                  Info Penting
                </button>
              </div>

              {/* Detail Tabs */}
              {detailTabs && (
                <div className="flex flex-col gap-2">
                  <div className="text-gray-400">
                    <p>
                      Kondisi: <span className="text-gray-800">Baru</span>
                    </p>
                    <p>
                      Berat Satuan: <span className="text-gray-800">1 kg</span>
                    </p>
                    <p>
                      Kategori:{" "}
                      <span className="text-green-600 font-semibold">
                        {product.category}
                      </span>
                    </p>
                  </div>
                  <p>{product.description}</p>
                </div>
              )}

              {/* Info Penting Tabs */}
              {infoTabs && (
                <div className="flex flex-col gap-2">
                  <div className="text-gray-400">
                    <h4 className="font-semibold text-gray-800">
                      Kebijakan Pengembalian Produk
                    </h4>
                    <p className="text-sm">
                      Kami mencoba memberikan layanan terbaik untuk para
                      customer kami, apabila pelanggan menerima produk dalam
                      kondisi kurang baik atau ada kesalahan pengiriman oleh
                      admin kami, maka kami akan bertanggung jawab sepenuhnya
                      sesuai dengan prosedur yang sudah ditentukan
                    </p>
                    <p
                      onClick={() => setInfoModal(!infoModal)}
                      className="w-fit text-sm font-semibold text-green-600 cursor-pointer"
                    >
                      Selengkapnya
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Form */}
          <div className="w-1/3 relative">
            <div className="fixed w-72 h-fit p-4 flex flex-col gap-3 border rounded-lg">
              <h2 className="text-lg font-semibold text-left">
                Atur jumlah dan catatan
              </h2>
              <div className="w-full py-1 flex items-center gap-2">
                <div className="w-2/5 p-0.5 flex items-center border rounded-md">
                  <button className="text-green-400">
                    <HiMinus />
                  </button>
                  <input
                    type="text"
                    placeholder="1"
                    className="w-full text-center  focus:outline-none"
                  />
                  <button className="text-green-400">
                    <HiPlus />
                  </button>
                </div>
                <p>
                  Stok Total: <strong>999</strong>
                </p>
              </div>
              <div className="w-full flex flex-col gap-2">
                {note && (
                  <input
                    type="text"
                    placeholder="Contoh: Warna Putih, Size M"
                    className="w-full px-4 py-2 rounded-lg border focus:border-green-400 focus:outline-none transition-colors ease-linear duration-200"
                  />
                )}
                {note ? (
                  <button
                    onClick={() => setNote(!note)}
                    className="w-fit text-sm font-semibold text-green-500"
                  >
                    Batalkan Catatan
                  </button>
                ) : (
                  <button
                    onClick={() => setNote(!note)}
                    className="w-fit flex items-center gap-1 text-sm font-semibold text-green-500"
                  >
                    <HiPencil />
                    Tambah Catatan
                  </button>
                )}
              </div>
              <div className="w-full flex justify-between items-center">
                <p className="text-gray-500">Subtotal</p>
                <h1 className="text-2xl font-semibold text-gray-700">
                  Rp99.000
                </h1>
              </div>
              <div className="w-full flex flex-col gap-2">
                <button className="p-2 bg-green-500 rounded-lg font-semibold text-white hover:bg-green-600 transition-colors duration-200">
                  + Keranjang
                </button>
                <button className="p-2 bg-white border border-green-500 rounded-lg font-semibold text-green-500">
                  Beli Langsung
                </button>
              </div>
              <div className="w-full flex gap-2 items-center">
                <button className="w-1/3 flex justify-center items-center gap-1 text-sm font-semibold text-gray-500 hover:text-green-500 transition-colors duration-200">
                  <HiChat /> Chat
                </button>
                <span className="h-6 border-l"></span>
                <button className="w-1/3 flex justify-center items-center gap-1 text-sm font-semibold text-gray-500 hover:text-green-500 transition-colors duration-200">
                  <HiHeart /> Wishlist
                </button>
                <span className="h-6 border-r"></span>
                <button className="w-1/3 flex justify-center items-center gap-1 text-sm font-semibold text-gray-500 hover:text-green-500 transition-colors duration-200">
                  <HiShare />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Modal */}
      {infoModal && (
        <div className="w-screen h-screen fixed top-0 left-0 z-50">
          <div onClick={() => setInfoModal(false)} className="overlay"></div>
          <div className="modal-info h-[556px] w-2/3 p-8">
            <Information onModal={() => setInfoModal(false)} />
          </div>
        </div>
      )}
    </>
  );
}

export default detail;
