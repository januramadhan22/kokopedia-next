import React, { useState } from "react";
import { TfiUser } from "react-icons/tfi";

function Profile() {
  const [bio, setBio] = useState(true);
  const [alamat, setAlamat] = useState(false);
  const [riwayat, setRiwayat] = useState(false);

  return (
    <div className="w-full py-10 px-48 space-y-4">
      <div className="flex gap-2 text-gray-500 items-baseline">
        <TfiUser />
        <p className="font-semibold">Username</p>
      </div>
      <div className="w-full border rounded-lg">
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
          ) : (
            "Alamat"
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
