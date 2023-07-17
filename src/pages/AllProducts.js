import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductData from "../utils/BooksData.json";
import ProductCard from "../components/ProductCard";
import "rc-slider/assets/index.css";
import TwoDirectionRangeSlider from "../components/TwoDirectionRangeSlider";
import { FilterContext } from "../context/FilterContextProvider";

const AllProducts = () => {
  const [value, setValue] = useState("");
  const { sortData, setSortData } = useContext(FilterContext);
  const jsonData = ["English", "Hindi"];

  const [selectedItems, setSelectedItems] = useState([]);
  const convertInNumber = (str) => {
    let cleaned_string = str.replace(",", "");
    let number_value = parseInt(cleaned_string);
    return number_value;
  };
  const handleSort = (e) => {
    const val = e.target.value;
    setValue(val);

    if (val === "low") {
      const sortedData = sortData.sort(
        (a, b) => convertInNumber(a.sell) - convertInNumber(b.sell)
      );
      setSortData(sortedData);
    } else if (val === "high") {
      const sortedData = sortData.sort(
        (a, b) => convertInNumber(b.sell) - convertInNumber(a.sell)
      );
      setSortData(sortedData);
    } else if (val === "discount") {
      const sortedData = sortData.sort(
        (a, b) => b["cover-discount-tag"] - a["cover-discount-tag"]
      );
      setSortData(sortedData);
    } else if (!val === true) {
      const sortedData = sortData.sort(
        (a, b) => convertInNumber(a.serialno) - convertInNumber(b.serialno)
      );
      setSortData(sortedData);
    }
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, value]);
    } else {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((item) => item !== value)
      );
    }

    let foundObjects = ProductData.filter((obj) =>
      [...selectedItems, value].includes(obj["attributes-title 3"])
    );
    setSortData(foundObjects);
  };

  return (
    <>
      <Navbar />
      <center className="italic text-[20px] mt-4">Best Sellers</center>
      <div className="w-[96%] m-auto flex items-start justify-between">
        <div className="w-[30%]">
          <div className="italic text-[18px]">Refine your Search</div>
          <div className="mt-5">
            <TwoDirectionRangeSlider />
          </div>
          <div>
            <div className="italic text-[16px] text-[#e42b26] mb-3">
              Language
            </div>
            <div>
              {jsonData.map((item, idx) => (
                <div key={idx}>
                  <label>
                    <input
                      type="checkbox"
                      value={item}
                      checked={selectedItems.includes(item.toString())}
                      onChange={handleCheckboxChange}
                    />
                    &nbsp;
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[70%] flex flex-col gap-5">
          <div className="w-full flex items-center justify-between">
            <div>{sortData.length} results found</div>
            <div>
              <select
                className="border border-gray-500 bg-[#e9e9ed] text-black"
                onChange={handleSort}
                value={value}
              >
                <option value="">Relevance</option>
                <option value="low">Price-Low to High</option>
                <option value="high">Price-High to Low</option>
                <option value="discount">Discount</option>
              </select>
            </div>
          </div>

          <div className="flex items-start justify-start flex-wrap">
            {sortData.map((elem, index) => (
              <ProductCard productData={elem} key={index} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
