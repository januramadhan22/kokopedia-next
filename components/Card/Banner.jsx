import Image from "next/image";
import React from "react";
import Banner1 from "../../public/banner/7b165985-d594-449f-acc5-5dc31339d87d.jpg.webp";
import Banner2 from "../../public/banner/59e9ecd0-b91b-40d4-aef8-b1057be0_auto_x2.jpg";
import Banner3 from "../../public/banner/b1d2ed1e-ef80-4d7a-869f-a0394f0629be.jpg";
import Banner4 from "../../public/banner/ea701ee6-f36b-473d-b429-4d2a1da0713d.jpg";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Banner() {
  return (
    <div className=" w-full flex justify-center my-10">
      <div className="absolute z-40 w-10/12 h-72 flex justify-between items-center">
        <button className="p-2 rounded-full bg-white">
          <IoIosArrowBack />
        </button>
        <button className="p-2 rounded-full bg-white">
          <IoIosArrowForward />
        </button>
      </div>
      <Image
        src={Banner1}
        width={100}
        height={100}
        layout="responsive"
        className="rounded-2xl"
      />
    </div>
  );
}

export default Banner;
