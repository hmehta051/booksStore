import React, { createContext, useState } from "react";
import ProductData from "../utils/BooksData.json";
export const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [price, setPrice] = useState([0, 5000]);
  const [sortData, setSortData] = useState(ProductData);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  return (
    <FilterContext.Provider
      value={{
        price,
        setPrice,
        sortData,
        setSortData,
        openSearchBar,
        setOpenSearchBar,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
