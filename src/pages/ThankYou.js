import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="w-full">
      <Navbar />

      <div className="w-[90%] m-auto flex flex-col items-center justify-center text-[30px] h-[400px]">
        <div>Thank you for choosing us.</div>
        <div>Payment Successful</div>
        <div className="text-[20px] flex gap-2 items-center text-[#e42b26] underline mt-3">
          <div> Wait...</div>
          <div>We will Redirect to the Home Page in 2-5 Second</div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ThankYou;
