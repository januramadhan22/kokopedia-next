import React from "react";

function FormPulsa() {
  return (
    <div className="w-full p-4 flex gap-4 items-end">
      <div className="w-11/12 flex gap-3">
        <form className="w-1/2 flex flex-col gap-1 text-sm">
          <p className="font-semibold text-gray-600">Nomor Telepon</p>
          <input
            type="text"
            placeholder="081234567890"
            className="py-2 px-3 border rounded-lg focus:outline-none focus:border-green-400 transition ease-linear duration-200"
          />
        </form>
        <form className="w-1/2 flex flex-col gap-1 text-sm">
          <p className="font-semibold text-gray-600">Nominal</p>
          <input
            type="text"
            placeholder="Rp 10.000"
            className="py-2 px-3 border rounded-lg focus:outline-none focus:border-green-400 transition ease-linear duration-200"
          />
        </form>
      </div>
      <button className="py-2.5 px-7 text-sm font-semibold text-gray-600 bg-gray-200 rounded-lg">
        Beli
      </button>
    </div>
  );
}

export default FormPulsa;
