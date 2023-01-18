import React from "react";

function TopCategories({ name, gender, image }) {
  return (
    <div className="w-32 h-32 p-3 border rounded-lg flex flex-col justify-center gap-1">
      <div className="w-full h-20 flex justify-center">
        <div className="w-16 h-16 flex justify-center items-center rounded-md">
          <img src={image} alt={image} className="max-h-full" />
        </div>
      </div>
      <div className="text-sm text-center w-full h-12 flex flex-col text-gray-700">
        <p className="font-semibold">{name}</p>
        <p className="leading-tight">{gender}</p>
      </div>
    </div>
  );
}

export default TopCategories;
