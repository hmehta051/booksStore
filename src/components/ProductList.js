import React from "react";
import ProductData from "../utils/BooksData.json";
import ProductCard from "./ProductCard";
import ScrollOffer from "./ScrollOffer";
const ProductList = () => {
  return (
    <div className="w-[96%] m-auto mt-20 border-y-2 border-gray-500">
      <div className="text-center text-[32px] italic mt-5">Now Trending</div>
      <div className="flex items-start justify-start gap-2 overflow-x-auto mt-5">
        {ProductData.map((elem, index) => (
          <div key={index}>
            <ProductCard productData={elem} key={index} />
          </div>
        ))}
      </div>

      <ScrollOffer />

      <div className="flex items-start justify-start gap-2 overflow-x-auto mt-20 w-[88%] m-auto">
        {ProductData.map((elem, index) => (
          <ProductCard productData={elem} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
