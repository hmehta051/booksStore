import React from "react";
import Slider from "react-slick";
const ScrollOffer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="w-[45%] m-auto h-fit">
      <Slider {...settings}>
        <div>
          <img
            alt="Exam Books"
            src="https://www.bookswagon.com/images/promotionimages/web/ExamWeb.jpg?v=1.8"
          />

          <h3 className="text-center text-[18px] mt-5">Exam Central</h3>
        </div>
        <div>
          <img
            alt="Business and Economics"
            src="https://www.bookswagon.com/images/promotionimages/web/BussinessWeb.jpg?v=1.8"
          />

          <h3 className="text-center text-[18px] mt-5">
            Big Discount on selected Product
          </h3>
        </div>
        <div>
          <img
            alt="Best Tarot Card Decks"
            src="https://www.bookswagon.com/images/promotionimages/web/tarotcardWeb.jpg?v=1.8"
          />

          <h3 className="text-center text-[18px] mt-5">
            Best Tarot Card Decks
          </h3>
        </div>
        <div>
          <img
            alt="Exam Books"
            src="https://www.bookswagon.com/images/promotionimages/web/ExamWeb.jpg?v=1.8"
          />

          <h3 className="text-center text-[18px] mt-5">Exam Central</h3>
        </div>
        <div>
          <img
            alt="Business and Economics"
            src="https://www.bookswagon.com/images/promotionimages/web/BussinessWeb.jpg?v=1.8"
          />

          <h3 className="text-center text-[18px] mt-5">
            Big Discount on selected Product
          </h3>
        </div>
        <div>
          <img
            alt="Best Tarot Card Decks"
            src="https://www.bookswagon.com/images/promotionimages/web/tarotcardWeb.jpg?v=1.8"
          />

          <h3 className="text-center text-[18px] mt-5">
            Best Tarot Card Decks
          </h3>
        </div>
        <div>
          <img
            alt="Exam Books"
            src="https://www.bookswagon.com/images/promotionimages/web/ExamWeb.jpg?v=1.8"
          />

          <h3 className="text-center text-[18px] mt-5">Exam Central</h3>
        </div>
        <div>
          <img
            alt="Business and Economics"
            src="https://www.bookswagon.com/images/promotionimages/web/BussinessWeb.jpg?v=1.8"
          />

          <h3 className="text-center text-[18px] mt-5">
            Big Discount on selected Product
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default ScrollOffer;
