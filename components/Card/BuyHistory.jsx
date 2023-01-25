import React, { useState } from "react";
import { FcTwoSmartphones } from "react-icons/fc";
import { SlOptions } from "react-icons/sl";

function BuyHistory({
  product,
  phone,
  provider,
  date,
  transaction_id,
  price,
  status,
}) {
  const [moreOpt, setMoreOpt] = useState(false);

  return (
    <div className="w-full px-5 py-3 flex flex-col gap-4 border rounded-lg shadow-md">
      <div className="w-full flex gap-3 items-center text-sm">
        <FcTwoSmartphones className="text-2xl" />
        <p className="font-semibold">{product}</p>
        <p>{date}</p>
        <span
          className={
            status == "Berhasil"
              ? "px-2 py-0.5 rounded bg-green-100 text-green-600 text-xs font-semibold"
              : "px-2 py-0.5 rounded bg-gray-100 text-gray-600 text-xs font-semibold"
          }
        >
          {status}
        </span>
        <p className="text-gray-400">{transaction_id}</p>
      </div>
      <div className="w-full flex items-center">
        <div className="w-10/12 py-1">
          <p className="font-semibold">{provider}</p>
          <p className="text-gray-400 text-sm">{phone}</p>
        </div>
        <div className="py-1 px-5 border-l">
          <p className="text-gray-400 text-sm">Total Harga</p>
          <p className="font-semibold">Rp {price}</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-end gap-4 pt-2">
        <button className="text-sm text-green-600 font-semibold">
          Lihat Detail Transaksi
        </button>
        {status == "Berhasil" ? (
          <button className="w-48 px-10 py-2.5 bg-green-600 rounded-md text-sm text-white font-semibold">
            Beli Lagi
          </button>
        ) : (
          <button className="w-48 px-10 py-2.5 bg-green-600 rounded-md text-sm text-white font-semibold">
            Bayar
          </button>
        )}
        <div className="relative ">
          <button
            onClick={() => setMoreOpt(!moreOpt)}
            className="p-2.5 rounded-md border active:bg-gray-300 transition-colors ease duration-200"
          >
            <SlOptions className="text-gray-400" />
          </button>
          {moreOpt && (
            <div className="absolute right-0 mt-1.5 border rounded-md bg-white shadow-md ">
              <button className="text-sm text-left w-full px-3 py-1.5 hover:bg-gray-100">
                Langganan
              </button>
              <button className="text-sm text-left w-full px-3 py-1.5 hover:bg-gray-100">
                Bantuan
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BuyHistory;
