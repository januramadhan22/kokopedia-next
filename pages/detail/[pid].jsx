import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "@/components/Header";

import { HiStar } from "react-icons/hi";
import { BsDot } from "react-icons/bs";
import Information from "@/components/Modal/Information";

function detail() {
  const router = useRouter();
  const { pid } = router.query;
  const [product, setProduct] = useState({});
  const [detailTabs, setDetailTabs] = useState(true);
  const [infoTabs, setInfoTabs] = useState(false);
  const [infoModal, setInfoModal] = useState(false);

  const getProduct = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${pid}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        alert("Data Gagal Didapat");
      });
  };

  useEffect(() => {
    pid && getProduct();
  }, []);

  return (
    <>
      <div className="w-full">
        <Header />
        <div className="w-full py-12 px-10 flex gap-10">
          <div>
            <div className="w-72 h-96 bg-slate-300 rounded-lg"></div>
          </div>
          <div className="w-1/3 flex flex-col gap-3">
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
