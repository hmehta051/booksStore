import React, { useContext, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsCart, BsPersonCircle } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { MdArrowDropDown, MdKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";
import ProductData from "../utils/BooksData.json";
import { FilterContext } from "../context/FilterContextProvider";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  const { sortData, setSortData, openSearchBar, setOpenSearchBar } =
    useContext(FilterContext);
  const filterData = (name, search) => {
    const filterName = name.filter((elem) =>
      elem.title.toLowerCase().includes(search.toLowerCase())
    );
    return filterName;
  };
  const handleSearch = () => {
    if (search !== "" && search.length > 1) {
      setOpenSearchBar(true);
      const data = filterData(ProductData, search);
      if (data.length === 0) {
        setSortData("No match Found");
      } else {
        setSortData(data);
      }
    } else {
      setOpenSearchBar(false);
      setSortData(ProductData);
    }
  };
  React.useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [search]);
  const handleAuth = () => {
    if (sessionStorage.getItem("authText") === "My Account") {
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  const handleLogout = () => {
    sessionStorage.removeItem("authText");
    sessionStorage.removeItem("authUser");
    window.location.reload();
  };
  return (
    <>
      <div className="flex flex-col w-full h-full p-2 sticky bg-white z-40 top-0 border-b-2 border-red-400">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-between w-[70%]">
            <Link to="/" className="w-[20%]">
              <img
                src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/logo-new.png"
                alt="Logo"
              />
            </Link>
            <div className="flex items-center w-[70%] h-full">
              <input
                type="search"
                placeholder="Search by Title,Author,Publisher or ISBN"
                className="w-[90%] p-1 border border-[#e42b26]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <BiSearchAlt2
                className="bg-red-700 text-white text-[35px] border border-[#e42b26] p-1"
                onClick={handleSearch}
              />
            </div>
          </div>
          <div className="flex items-center justify-end gap-4 w-[30%]">
            <div className="flex items-center gap-2 text-[#e42b26]">
              <BsPersonCircle />
              <p>
                {sessionStorage.getItem("authText") ? (
                  <div className="flex gap-2">
                    <p onClick={handleAuth}>My Account</p>
                    <p onClick={handleLogout}>Logout</p>
                  </div>
                ) : (
                  <div onClick={handleAuth}>Signup/Login</div>
                )}
              </p>
              <MdKeyboardArrowRight />
            </div>
            <p className=" text-[#e42b26]">|</p>
            <Link
              to="/checkout"
              className="text-[#e42b26] flex items-center mr-3 gap-2"
            >
              <BsCart /> {cartItems.length} items
            </Link>
          </div>
        </div>
        <div className="w-[46%] fixed top-[8%] left-[21.5%]">
          {openSearchBar ? (
            <div className="h-auto max-h-80 overflow-scroll shadow-lg border border-gray-400">
              {sortData === "No match Found" ? (
                <p className="p-2"> Not Match Found</p>
              ) : (
                <>
                  {sortData.map((el, idx) => (
                    <SearchBox productData={el} key={idx} />
                  ))}
                </>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex items-center justify-between w-full mt-5">
          <div className="flex items-center gap-4">
            <Link to="/product" className="flex items-center gap-1">
              <p>Books</p>
              <MdArrowDropDown />
            </Link>
            <Link to="/product">New Arrivals</Link>
            <Link to="/product">Box Sets</Link>
            <Link to="/product">Best Sets</Link>
            <Link to="/product">Fiction Book</Link>
            <Link to="/product">Award Winners</Link>
            <Link to="/product">Featured Authors</Link>
            <Link to="/product">Today's Deal</Link>
            <Link to="/product">Request Book</Link>
          </div>
          <div className="text-[#e42b26]">
            <AiOutlineHeart className="text-xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
