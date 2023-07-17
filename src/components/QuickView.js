import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const QuickView = ({ quickData, setQuickView, quickView }) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const handleAddBooks = () => {
    const bookToAdd = { ...quickData };

    for (let i = 0; i < count; i++) {
      dispatch(addItem(bookToAdd));
    }
  };
  const closeModal = () => {
    setQuickView(false);
  };
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 m-auto flex items-center justify-center z-50 w-[800px] h-[400px] shadow-custom">
      <div className="bg-white rounded p-8 flex flex-col items-end">
        <button
          onClick={closeModal}
          className="text-gray-700 hover:text-gray-800 float-right"
        >
          <MdClose size={24} />
        </button>
        <div className="w-full flex items-center justify-start gap-6">
          <div className="flex items-center flex-col gap-3">
            <div className="m-auto h-fit w-[200px]">
              <div className="relative left-[80%] top-5 w-[40px] rounded-[40%] bg-[#e42b26] text-center text-white p-1">
                {quickData["cover-discount-tag"]}%
              </div>
              <img
                src={quickData["cover src"]}
                alt={quickData.title}
                className="w-[40%] m-auto"
              />
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  count >= 1 ? setCount((p) => p - 1) : setCount(1)
                }
                className="text-black bg-[#efefef] w-10"
              >
                -
              </button>
              <p>{count}</p>
              <button
                onClick={() => setCount((p) => p + 1)}
                className="text-black bg-[#efefef] w-10"
              >
                +
              </button>
            </div>
            <button
              className="bg-[#e42b26] w-[100px] text-white p-1"
              onClick={handleAddBooks}
            >
              Add to Cart
            </button>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <div className="flex items-center justify-start gap-4">
              <p className="text-[#e42b26] text-[20px]">₹{quickData.sell}</p>
              <p className="line-through text-[16px]">₹{quickData.list}</p>
            </div>
            <div className="italic text-[20px] text-gray-500">
              {quickData.title}
            </div>
            <div>
              {quickData["author-publisher"]} {quickData["author-publisher 2"]}
            </div>
            <div>
              Three volumes in one! A prestige treatment of Inoue's epic samurai
              series with bonus content, color pages, storyboard samples and
              more! Real-life figure Miyamoto Musashi was the most celebrated
              samurai of all time. The quintessential warrior-philosopher,
              Musashi authored A Book of Five Rings, a classic treatise in the
              canon of world philosophy and military strategy. But the path to
              enlightenment is an endless journey, and to get there through
              violent means--by way of the sword-
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
