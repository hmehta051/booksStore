import React from "react";

const CartCard = ({ productData }) => {
  return (
    <div className="shadow-md">
      <div className="flex flex-col items-center justify-center w-[200px]">
        <div className="m-auto h-fit w-[200px]">
          <img
            src={productData["cover src"]}
            alt={productData.title}
            className="w-[40%] m-auto"
          />
        </div>
        <div className="text-[14px] flex flex-col gap-2 items-center w-full h-fit p-2">
          {/* <p>Total Book: {options.length}</p> */}
          <div className="flex items-center justify-start gap-4">
            <p className="text-[#e42b26]">₹{productData.sell}</p>
          </div>
          <div className=" w-full h-[110px] overflow-scroll">
            {productData.title}
          </div>
          <div>{productData["author-publisher 2"]}</div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
