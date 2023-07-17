import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductData from "../utils/BooksData.json";
import SingleProductPage from "../components/SingleProdictPage";

const Product = () => {
  const { productId } = useParams();
  function convertId(id) {
    if (id.endsWith(".")) {
      return id.slice(0, -1); // Remove the dot at the end
    } else {
      return id + "."; // Add a dot at the end
    }
  }
  return (
    <div>
      <Navbar />
      <div>
        {ProductData.filter((el) => el.serialno === convertId(productId)).map(
          (el) => (
            <SingleProductPage bookData={el} />
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Product;
