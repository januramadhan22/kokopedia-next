import React from "react";
import { MdOutlineClose } from "react-icons/md";

function Information({ onModal }) {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-full flex justify-between items-center mb-2">
        <h1 className="text-3xl font-semibold text-gray-800">
          Kebijakan Pengembalian Produk
        </h1>
        <MdOutlineClose
          onClick={onModal}
          className="text-3xl font-semibold text-gray-400 cursor-pointer active:scale-90"
        />
      </div>
      <div className="w-full flex flex-col gap-4 pr-5 ">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-gray-500">
            KEBIJAKAN RETUR PRODUK NON-FLASH SALE
          </h3>
          <p className="text-gray-500">
            Kami mencoba memberikan layanan terbaik untuk para customer kami,
            apabila pelanggan menerima produk dalam kondisi kurang baik atau ada
            kesalahan pengiriman oleh admin kami, maka kami akan bertanggung
            jawab sepenuhnya sesuai dengan prosedur yang sudah ditentukan
            Prosedur retur sebagai berikut: - Hubungi admin kami paling lambat 1
            hari setelah barang di terima.
          </p>
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-gray-500">
            WAJIB MEMBUAT VIDEO UNBOXING PRODUK DAN BELUM MEMBERIKAN RATING
            PRODUK BERMASALAH
          </h3>
          <p className="text-gray-500">Kirimkan data berikut ke admin:</p>

          <ol className="text-gray-500 list-decimal list-outside pl-4">
            <li>
              Nomor order, Kode produk, jumlah produk yg salah / tidak sesuai /
              rusak
            </li>
            <li>
              Foto barang yang ingin dikembalikan dan keterangan cacat dari
              barang
            </li>
            <li>
              kami tidak menerima produk yg sudah dicuci atau rusak karena
              pemakaian.
            </li>
            <li>
              WAJIB KIRIMKAN VIDEO UNBOXING SEBELUM DAN SESUDAH PAKET DIBUKA
            </li>
          </ol>
          <p className="text-gray-500 ">
            Setelah itu mohon tunggu balasan dari admin kami pada hari dan jam
            kerja,
            <br />
            nb: mohon dipatuhi untuk ketentuan retur tersebut.
            <br />
            Apabila salah satu tidak terpenuhi maka mohon maaf retur tidak bisa
            kami proses
          </p>
        </div>
      </div>
    </div>
  );
}

export default Information;
