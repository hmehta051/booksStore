import React, { useEffect, useState } from "react";
import {
  BiSolidLeftArrowCircle,
  BiSolidRightArrowCircle,
} from "react-icons/bi";
const ImageSlider = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const Images = [
    "https://www.bookswagon.com/images/bannerimages/82_inr.jpg?v=1.8",
    "https://www.bookswagon.com/images/bannerimages/83_inr.jpg?v=1.8",
    "https://www.bookswagon.com/images/bannerimages/84_inr.jpg?v=1.6",
    "https://www.bookswagon.com/images/bannerimages/81_inr.jpg?v=1.8",
    "https://www.bookswagon.com/images/bannerimages/85_inr.jpg",
    "https://www.bookswagon.com/images/bannerimages/80_inr.jpg?v=1.8",
    "https://www.bookswagon.com/images/bannerimages/79_inr.jpg?v=1.6",
  ];
  useEffect(() => {
    const bomb = setInterval(() => {
      setCurrIndex((p) => (p + 1) % Images.length);
    }, 3000);

    return () => {
      clearInterval(bomb);
    };
  }, [Images.length]);

  const handleNextImage = () => {
    setCurrIndex((p) => (p + 1) % Images.length);
  };

  const handlePrevPage = () => {
    setCurrIndex((p) => (p === 0 ? Images.length - 1 : p - 1));
  };

  return (
    <>
      <img src={Images[currIndex]} alt="slider" />
      <div className="w-full flex items-center justify-center gap-2 mt-2">
        <button onClick={handlePrevPage}>
          <BiSolidLeftArrowCircle className="text-[25px]" />
        </button>
        <button onClick={handleNextImage}>
          <BiSolidRightArrowCircle className="text-[25px]" />
        </button>
      </div>
    </>
  );
};

export default ImageSlider;
