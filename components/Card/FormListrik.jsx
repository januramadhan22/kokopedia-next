import React from "react";

function FormListrik() {
  return (
    <div className="w-full p-4 flex gap-4 items-end">
      <div className="w-11/12 flex gap-3">
        <form className="w-1/3 flex flex-col gap-1 text-sm">
          <p className="font-semibold text-gray-600">Jenis Produk Listrik</p>
          <input
            type="text"
            placeholder="Token Listrik"
            className="w-full py-2 px-3 border rounded-lg focus:outline-none focus:border-green-400 transition ease-linear duration-200"
          />
        </form>
        <form className="w-1/3 flex flex-col gap-1 text-sm">
          <p className="font-semibold text-gray-600">No. Meter/ID Pel</p>
          <input
            type="text"
            placeholder="1122334455"
            className="w-full py-2 px-3 border rounded-lg focus:outline-none focus:border-green-400 transition ease-linear duration-200"
          />
        </form>
        <form className="w-1/3 flex flex-col gap-1 text-sm">
          <p className="font-semibold text-gray-600">Nominal</p>
          <input
            type="text"
            placeholder="Rp 10.000"
            className="w-full py-2 px-3 border rounded-lg focus:outline-none focus:border-green-400 transition ease-linear duration-200"
          />
        </form>
      </div>
      <button className="py-2.5 px-5 text-sm font-bold text-gray-600 bg-gray-200 rounded-lg">
        Bayar
      </button>
    </div>
  );
}

export default FormListrik;
