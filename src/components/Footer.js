import React from "react";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsLinkedin, BsPinterest, BsYoutube } from "react-icons/bs";
import { footerData } from "../utils/footerData";

const Footer = () => {
  return (
    <div className="mt-10 mb-5">
      <div className="flex items-start justify-evenly">
        {footerData.map((elem, index) => {
          return (
            <div key={index}>
              <div className="italic text-[#e42b26] mb-3">{elem.title}</div>
              {elem.links.map((el, idx) => {
                return <div key={idx}>{el}</div>;
              })}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-4 mt-5">
          <BsFacebook className="text-[25px]" />
          <AiFillTwitterCircle className="text-[25px]" />
          <BsLinkedin className="text-[25px]" />
          <BsPinterest className="text-[25px]" />
          <BsYoutube className="text-[25px]" />
          <AiFillInstagram className="text-[25px]" />
        </div>
        <div>Copyright © 2023 . Bookswagon.com. All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Footer;
