import React, { useContext } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FilterContext } from "../context/FilterContextProvider";

const TwoDirectionRangeSlider = () => {
  const { price, setPrice, sortData, setSortData } = useContext(FilterContext);
  const convertInNumber = (str) => {
    let cleaned_string = str.replace(",", "");
    let number_value = parseInt(cleaned_string);
    return number_value;
  };
  const handleRange = (newRange) => {
    setPrice(newRange);
    if (newRange[0] >= newRange[1]) {
      alert("Please Choose Valid Range");
    } else {
      const filterRange = sortData.filter((elem) => {
        const sellPrice = convertInNumber(elem.sell);
        return sellPrice >= newRange[0] && sellPrice <= newRange[1];
      });
      setSortData(filterRange);
    }
  };

  return (
    <div>
      <p className="text-[#e42b26]">
        Price: ₹{price[0]} - ₹{price[1]}
      </p>
      <Slider
        min={0}
        max={5000}
        range
        value={price}
        // onChange={handleRangeChange}
        onChange={handleRange}
      />
    </div>
  );
};

export default React.memo(TwoDirectionRangeSlider);
