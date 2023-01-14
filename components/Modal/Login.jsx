import React from "react";
import { MdOutlineClose } from "react-icons/md";

function Login({ onModal }) {
  return (
    <div className="w-full flex flex-col gap-7">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-800">Masuk</h1>
        <MdOutlineClose
          onClick={onModal}
          className="text-3xl font-semibold text-gray-400 cursor-pointer active:scale-90"
        />
      </div>
      <div className="w-full flex flex-col gap-4">
        <form className="w-full flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Username</label>
          <input
            type="text"
            placeholder="Masukkan username"
            className="px-3 py-2 rounded-md border focus:border-green-400 focus:outline-none transition ease-linear duration-150"
          />
        </form>
        <form className="w-full flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Password</label>
          <input
            type="text"
            placeholder="Masukkan password"
            className="px-3 py-2 rounded-md border focus:border-green-400 focus:outline-none transition ease-linear duration-150"
          />
        </form>
      </div>
      <button className="w-full py-2 px-2 text-lg font-semibold text-white border rounded-md bg-green-500 hover:bg-green-700 active:scale-95 transition-colors ease-linear duration-300">
        Masuk
      </button>
    </div>
  );
}

export default Login;
