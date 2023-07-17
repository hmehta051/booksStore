import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const SingleProductPage = ({ bookData }) => {
  const dispatch = useDispatch();

  const handleAddBooks = () => {
    dispatch(addItem(bookData));
  };
  return (
    <div className="w-[96%] m-auto mt-2">
      <div className="mt-5 mb-3">
        <span className="text-[#e42b26]">
          {`Home > History & Humanities > Philosophy > Non-western philosophy >
        Oriental & indian philosophy >`}{" "}
        </span>
        <span>{`${bookData.title}`}</span>
      </div>
      <div className="flex items-start justify-start w-[100%] gap-20 m-auto">
        <div className="m-auto  w-[30%] p-4 border border-gray-400">
          <img
            src={bookData["cover src"]}
            alt={bookData.title}
            className="w-full m-auto"
          />
        </div>

        <div className="text-[14px] flex flex-col gap-2 items-start justify-start w-full h-fit p-2">
          <div className="flex items-center gap-5">
            <p> Discount:</p>
            <div className=" w-[40px] rounded-[40%] bg-[#e42b26] text-center text-white p-1">
              {bookData["cover-discount-tag"]}%
            </div>
          </div>
          <div>
            <span className="italic text-[#e42b26] text-[18px]">
              {bookData.title}
            </span>
            &nbsp;
            <span className="text-[18px]">
              ({bookData["attributes-title"]}) | Released:{" "}
              <span className="text-[16px]">
                {bookData["attributes-title 2"]}
              </span>
            </span>
          </div>
          <div>
            <span>{bookData["author-publisher"]}&nbsp;</span>
            <span className="text-[#e42b26]">
              {bookData["author-publisher 2"]}(Author)
            </span>
            <span>
              <span> | Publisher:</span>
              <span className="text-[#e42b26]">
                {" "}
                {bookData["author-publisher 4"]}(Author)
              </span>
            </span>
          </div>

          <div className="flex items-center gap-3 p-2">
            <span className="flex gap-3">
              {[...Array(5)].map((_, index) => {
                return (
                  <img
                    src="https://www.bookswagon.com/images/svg/graystar.svg"
                    alt="star"
                    key={index}
                    className="w-[20px]"
                  />
                );
              })}
            </span>
            <p>|</p>
            <span>Write a Review</span>
          </div>

          <div className="flex flex-col items-center justify-start gap-4">
            <p className="text-[#e42b26] text-[20px]">₹{bookData.sell}</p>
            <p className="line-through">₹{bookData.list}</p>
          </div>
          <div className="flex flex-col justify-start gap-2 mt-5">
            <p className=" text-green-600 text-[16px]">Available</p>
            <p className="text-[16px]">
              Ships within {bookData["order-info 2"]}
            </p>
          </div>
          <div className="flex items-center justify-start w-[60%] gap-5">
            <button
              className="w-[50%] text-white bg-[#e42b26] p-2"
              onClick={handleAddBooks}
            >
              Buy Now
            </button>
            <button className="w-[50%] text-[#e42b26] border border-[#e42b26] p-2">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
