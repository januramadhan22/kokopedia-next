import React, { useState } from "react";
import { TfiUser } from "react-icons/tfi";
import { HiOutlineSearch, HiOutlineLocationMarker } from "react-icons/hi";
import { RiArrowDownSLine } from "react-icons/ri";

function Profile() {
  const [bio, setBio] = useState(true);
  const [alamat, setAlamat] = useState(false);
  const [riwayat, setRiwayat] = useState(false);
  const [listProducts, setListProducts] = useState(false);

  const transactions = [
    {
      id: 1,
      product: "Pulsa",
      phone_number: "08123456789",
      provider: "Smartfren",
      date: "02-Januari-2023",
      transaction_id: "IVR/20220714/XXII/VII/1256527131",
      price: 99500,
      status: "Berhasil",
    },
    {
      id: 2,
      product: "Pulsa",
      phone_number: "08123456789",
      provider: "Smartfren",
      date: "18-Januari-2023",
      transaction_id: "IVR/20220312/XXII/III/1081578077",
      price: 99500,
      status: "Menunggu Pembayaran",
    },
  ];

  const listProductsType = [
    { category: "Semua Produk", type: null },
    {
      category: "Belanja",
      type: ["Fashion", "Elektronik", "Ibu & Bayi", "dan lainnya"],
    },
    {
      category: "Top-UP & Tagihan",
      type: ["Pulsa", "Tagihan Listrik", "Donasi", "dan lainnya"],
    },
    {
      category: "Travel & Entertainment",
      type: ["Tiket Pesawat", "Hotel", "dan lainnya"],
    },
    {
      category: "Keuangan",
      type: ["Emas", "Asuransi", "Reksa Dana", "dan lainnya"],
    },
  ];

  return (
    <div className="w-full py-10 px-48 space-y-4">
      <div className="flex gap-2 text-gray-500 items-baseline">
        <TfiUser />
        <p className="font-semibold">Username</p>
      </div>
      <div className="w-full min-h-max border rounded-lg">
        {/* Button Menu */}
        <div className="w-full flex border-b font-semibold text-gray-500">
          <button
            onClick={() => {
              setBio(true);
              setAlamat(false);
              setRiwayat(false);
            }}
            className={`px-12 py-3 hover:text-gray-700 transition ease-linear duration-200 ${
              bio &&
              "text-green-500 border-b-2 border-b-green-500 hover:text-green-500"
            }`}
          >
            Biodata Diri
          </button>
          <button
            onClick={() => {
              setBio(false);
              setAlamat(true);
              setRiwayat(false);
            }}
            className={`px-12 py-3 hover:text-gray-700 transition ease-linear duration-200 ${
              alamat &&
              "text-green-500 border-b-2 border-b-green-500 hover:text-green-500"
            }`}
          >
            Daftar Alamat
          </button>
          <button
            onClick={() => {
              setBio(false);
              setAlamat(false);
              setRiwayat(true);
            }}
            className={`px-12 py-3 hover:text-gray-700 transition ease-linear duration-200 ${
              riwayat &&
              "text-green-500 border-b-2 border-b-green-500 hover:text-green-500"
            }`}
          >
            Riwayat Pembelian
          </button>
        </div>

        {/* Content Menu */}
        <div className="w-full px-5 py-8">
          {bio ? (
            /* Biodata Diri */
            <div className="w-full flex gap-8">
              <div className="w-6/12 flex flex-col gap-6">
                <div className="w-full p-4 flex flex-col items-center gap-4 border rounded-lg shadow-md">
                  <img
                    className="rounded-md w-full"
                    src="https://images.tokopedia.net/img/cache/300/default_v3-usrnophoto1.png"
                    alt="User Photo"
                  />
                  <input
                    type="button"
                    value="Pilih Foto"
                    className="border w-full py-2.5 rounded-lg text-sm font-semibold text-gray-700"
                  />
                  <p className="text-xs text-gray-500 text-justify">
                    Besar file: maksimum 10.000.000 bytes (10 Megabytes).
                    Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG
                  </p>
                </div>
                <button className="border w-full py-2.5 rounded-lg text-sm font-semibold text-gray-700">
                  Ubah Kata Sandi
                </button>
              </div>
              <div className="w-full flex flex-col gap-7 text-sm text-gray-500">
                {/* Biodata */}
                <h3 className="font-semibold">Ubah Biodata Diri</h3>
                <div className="w-full flex gap-8">
                  <div className="flex flex-col gap-7">
                    <p>Nama</p>
                    <p>Tanggal Lahir</p>
                    <p>Jenis Kelamin</p>
                  </div>
                  <div className="flex flex-col gap-7">
                    <div className="flex gap-3">
                      <p>Janu Ramadhan</p>
                      <button className="text-green-500">ubah</button>
                    </div>
                    <div className="flex gap-3">
                      <p>1 Januari 1997</p>
                      <button className="text-green-500">
                        ubah Tanggal Lahir
                      </button>
                    </div>
                    <div className="flex gap-3">
                      <p>Pria</p>
                      <button className="text-green-500">ubah</button>
                    </div>
                  </div>
                </div>

                {/* Kontak */}
                <h3 className="font-semibold">Ubah Kontak</h3>
                <div className="w-full flex gap-8">
                  <div className="flex flex-col gap-7">
                    <p>Email</p>
                    <p>Nomor HP</p>
                  </div>
                  <div className="flex flex-col gap-7">
                    <div className="flex items-baseline gap-3">
                      <p>abbyjunior600@gmail.com</p>
                      <span className="px-2 py-0.5 text-xs font-semibold box-content rounded-md text-green-700 bg-green-200">
                        Terverifikasi
                      </span>
                      <button className="text-green-500">ubah</button>
                    </div>
                    <div className="flex items-baseline gap-3">
                      <p>6288805768904</p>
                      <span className="px-2 py-0.5 text-xs font-semibold box-content rounded-md text-green-700 bg-green-200">
                        Terverifikasi
                      </span>
                      <button className="text-green-500">ubah</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : alamat ? (
            <div className="w-full min-h-[500px] flex flex-col gap-4">
              <div className="w-full flex justify-between items-center">
                <form className="w-80 flex items-center border rounded-lg focus:border-green-500">
                  <div className="w-full px-3 py-1">
                    <input
                      type="text"
                      placeholder="Cari alamat atau nama penerima"
                      className="w-full bg-transparent focus:outline-none"
                    />
                  </div>
                  <button className="p-2 bg-gray-100 rounded-r-md text-lg hover:brightness-90">
                    <HiOutlineSearch className="text-gray-400 font-bold" />
                  </button>
                </form>
                <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors ease duration-200">
                  + Tambahkan Alamat Baru
                </button>
              </div>
              <div>
                <button className="px-3 py-1.5 border border-green-500 bg-green-50 rounded-2xl text-green-500">
                  Semua Alamat
                </button>
              </div>
              <div className="w-full py-3 px-6 flex items-center border border-green-500 bg-green-50 rounded-xl shadow-lg">
                <div className="w-11/12 flex flex-col gap-3 ">
                  <div className="flex gap-2 items-center text-gray-500">
                    <h4 className="font-semibold ">Rumah</h4>
                    <p className="text-xs py-1 p-2 rounded-sm font-semibold bg-gray-200">
                      Utama
                    </p>
                  </div>
                  <div className="w-full text-left">
                    <h4 className="font-semibold">Abby Janu Ramadhan</h4>
                    <p>081234567890</p>
                    <p className="truncate">
                      Jl. Blambangan 2 Tambaksawah, Waru, Sidoarjo
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <HiOutlineLocationMarker className="text-xl " />
                    Sudah Pinpoint
                  </div>
                  <div className="flex gap-2 items-center">
                    <button className="text-green-600 font-semibold text-sm">
                      Share
                    </button>
                    <span className="h-4 border-r"></span>
                    <button className="text-green-600 font-semibold text-sm">
                      Ubah Alamat
                    </button>
                  </div>
                </div>
                <div>
                  <button className="px-6 py-1 rounded-md bg-green-500 text-white text-sm font-semibold hover:bg-green-700 transition-colors ease duration-200">
                    Pilih
                  </button>
                </div>
              </div>
            </div>
          ) : (
            riwayat && (
              <div className="w-full min-h-[500px] flex flex-col gap-4">
                <div className="w-full flex items-center gap-5">
                  <form className="w-80 flex items-center border rounded-lg focus:border-green-500">
                    <div className="w-full px-3 py-1">
                      <input
                        type="text"
                        placeholder="Cari transaksimu disini"
                        className="w-full bg-transparent focus:outline-none"
                      />
                    </div>
                    <button className="p-2 bg-gray-100 rounded-r-md text-lg hover:brightness-90">
                      <HiOutlineSearch className="text-gray-400 font-bold" />
                    </button>
                  </form>
                  <div
                    className="w-60 relative"
                    onClick={() => setListProducts(!listProducts)}
                  >
                    <div
                      className={`w-full px-4 py-2 flex justify-between items-center border rounded-md cursor-pointer transition ease duration-200 ${
                        listProducts && "rounded-t-md rounded-b-none"
                      }`}
                    >
                      <p>Semua Produk</p>
                      <RiArrowDownSLine
                        className={`scale-150 rounded-full font-bold text-gray-400 transition-transform ease-linear duration-150 ${
                          listProducts && "-rotate-180 "
                        }`}
                      />
                    </div>
                    {listProducts && (
                      <div className="absolute flex flex-col w-full max-h-60 overflow-y-scroll p-1 border rounded-b-md bg-white">
                        {listProductsType.map((item) => (
                          <button
                            key={item}
                            className="w-full px-3 py-2 flex flex-col items-start rounded-md text-left hover:bg-gray-200"
                          >
                            {item.category}
                            <span className="text-xs text-gray-400">
                              {item.type == null ? item.type : item.type + " "}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <button className="px-3 py-1.5 border border-green-500 bg-green-50 rounded-2xl text-green-500">
                    Semua Alamat
                  </button>
                </div>
                <div className="w-full py-3 px-6 flex items-center border border-green-500 bg-green-50 rounded-xl shadow-lg">
                  Riwayat
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
