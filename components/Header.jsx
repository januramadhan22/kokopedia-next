import React from "react";
import { HiOutlineSearch, HiShoppingCart } from "react-icons/hi";

function Header() {
  return (
    <div className="sticky top-0 z-50 h-20 w-full px-10 flex items-center justify-between shadow-md">
      {/* Left Content */}
      <button className="text-3xl font-semibold text-green-500">
        kokopedia
      </button>

      {/* Center Content */}
      <form
        type="submit"
        className="w-[450px] flex items-center border rounded-lg text-sm"
      >
        <div className="w-full  px-3 py-1">
          <input
            type="text"
            placeholder="Cari di Kokopedia"
            className="w-full focus:outline-none"
          />
        </div>
        <button className="p-2 bg-gray-100 rounded-r-md text-lg hover:brightness-90">
          <HiOutlineSearch className="text-gray-400 font-bold" />
        </button>
      </form>

      {/* Right Content */}
      <div className="flex items-center gap-4">
        <button className="py-2 px-3 rounded-lg text-lg hover:bg-gray-100 active:scale-90">
          <HiShoppingCart className="text-gray-500 font-bold" />
        </button>
        <span className="h-6 border"></span>
        <button className="px-4 py-1 font-semibold text-green-600 border-2 rounded-lg border-green-600 hover:bg-green-600 hover:text-white active:scale-90">
          Masuk
        </button>
      </div>
    </div>
  );
}

export default Header;
