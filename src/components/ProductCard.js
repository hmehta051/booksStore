import React, { useState } from "react";
import QuickView from "./QuickView";
import { Link } from "react-router-dom";

const ProductCard = ({ productData }) => {
  const [quickView, setQuickView] = useState(false);
  function convertId(id) {
    if (id.endsWith(".")) {
      return id.slice(0, -1); // Remove the dot at the end
    } else {
      return id + "."; // Add a dot at the end
    }
  }

  return (
    <div className="shadow-md">
      <Link
        to={`/product/${convertId(productData.serialno)}`}
        className="flex flex-col items-center justify-center w-[200px] h-100"
      >
        <div className="m-auto h-fit w-[200px]">
          <div className="relative left-[80%] top-5 w-[40px] rounded-[40%] bg-[#e42b26] text-center text-white p-1">
            {productData["cover-discount-tag"]}%
          </div>
          <img
            src={productData["cover src"]}
            alt={productData.title}
            className="w-[40%] m-auto"
          />
        </div>
        <div className="text-[14px] flex flex-col gap-2 items-center w-full h-fit p-2">
          <div className=" w-full h-[110px] overflow-scroll">
            {productData.title}
          </div>
          <div>{productData["author-publisher 2"]}</div>
          <div className="flex items-center justify-start gap-4">
            <p className="text-[#e42b26]">₹{productData.sell}</p>
            <p className="line-through">₹{productData.list}</p>
          </div>
        </div>
      </Link>
      <button
        className="border border-[#e42b26] text-[#e42b26] w-full p-0 text-[14px] font-bold"
        onClick={() => setQuickView(true)}
      >
        QUICK VIEW
      </button>
      {quickView && (
        <QuickView
          setQuickView={setQuickView}
          quickData={productData}
          quickView={quickView}
        />
      )}
    </div>
  );
};

export default ProductCard;
