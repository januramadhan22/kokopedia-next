import React, { useState } from "react";
import { HiOutlineSearch, HiShoppingCart } from "react-icons/hi";
import Login from "./Modal/Login";
import Link from "next/link";

function Header() {
  const [loginModal, setLoginModal] = useState(false);

  // if (loginModal) {
  //   document.body.classList.add("active-modal");
  // } else {
  //   document.body.classList.remove("active-modal");
  // }

  return (
    <>
      <div className="sticky top-0 z-50 h-20 w-full px-10 flex items-center justify-between bg-white shadow-md gap-10">
        {/* Left Content */}
        <Link href="/">
          <button className="text-3xl font-semibold text-green-500">
            kokopedia
          </button>
        </Link>

        {/* Center Content */}
        <form
          type="submit"
          className="w-full flex items-center border rounded-lg text-sm"
        >
          <div className="w-full  px-3 py-1">
            <input
              type="text"
              placeholder="Cari di Kokopedia"
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
          <button className="p-2 bg-gray-100 rounded-r-md text-lg hover:brightness-90">
            <HiOutlineSearch className="text-gray-400 font-bold" />
          </button>
        </form>

        {/* Right Content */}
        <div className="flex items-center gap-4">
          <button
            // onClick={() => setLoginModal(!loginModal)}
            className="py-2 px-3 rounded-lg text-lg hover:bg-gray-100 active:scale-90"
          >
            <HiShoppingCart className="text-gray-500 font-bold" />
          </button>
          <span className="h-6 border"></span>
          <button
            onClick={() => setLoginModal(!loginModal)}
            className="px-4 py-1 font-semibold text-green-600 border-2 rounded-lg border-green-600 hover:bg-green-600 hover:text-white active:scale-90"
          >
            Masuk
          </button>
        </div>
      </div>

      {/* Login Modal */}
      {loginModal && (
        <div className="w-screen h-screen z-50 fixed top-0 left-0">
          <div
            onClick={() => setLoginModal(!loginModal)}
            className="overlay"
          ></div>
          <div className="modal-login max-h-[556px] w-[420px] p-8">
            <Login onModal={() => setLoginModal(!loginModal)} />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
