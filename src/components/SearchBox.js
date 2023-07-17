import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FilterContext } from "../context/FilterContextProvider";

const SearchBox = ({ productData }) => {
  const { setOpenSearchBar } = useContext(FilterContext);
  const navigate = useNavigate();
  function convertId(id) {
    if (id.endsWith(".")) {
      return id.slice(0, -1);
    } else {
      return id + ".";
    }
  }
  const handleNavigate = () => {
    navigate(`/product/${convertId(productData.serialno)}`);
    setOpenSearchBar(false);
  };
  return (
    <div className="border border-gray-400 p-1" onClick={handleNavigate}>
      {productData.title.split(" ").slice(0, 2).join("  ")}
    </div>
  );
};

export default SearchBox;
