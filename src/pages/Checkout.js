import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import { Link, useNavigate } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";

const Checkout = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();
  const handleCheckStatus = () => {
    if (sessionStorage.getItem("authText") === "My Account") {
      navigate("/payment-done");
    } else {
      alert("Please login first");
      navigate("/login");
    }
  };
  return (
    <div className="w-full">
      <Navbar />

      {cartItems.reduce((accumulator, item) => {
        const sell = parseInt(item.sell.replace(",", ""));
        return accumulator + sell;
      }, 0) === 0 ? (
        <div className="w-[90%] m-auto flex flex-col items-center justify-center text-[30px] h-[400px]">
          <div> Nothing is Here</div>
          <Link
            to="/product"
            className="text-[20px] flex gap-2 items-center text-[#e42b26] underline mt-3"
          >
            Add some Books <GrLinkNext />
          </Link>
        </div>
      ) : (
        <>
          <div className="flex">
            {cartItems.map((elem, idx) => {
              return <CartCard key={idx} productData={elem} />;
            })}
          </div>
          <div className="flex items-center justify-between w-[80%] m-auto">
            <div className="w-[50%]"></div>

            <div
              onClick={handleCheckStatus}
              className="bg-[#e42b26] text-white p-2 w-[20%]"
            >
              Proceed to pay - ₹{" "}
              {cartItems.reduce((accumulator, item) => {
                const sell = parseInt(item.sell.replace(",", ""));
                return accumulator + sell;
              }, 0)}
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default Checkout;
