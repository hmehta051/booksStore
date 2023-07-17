import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = JSON.parse(sessionStorage.getItem("authUser"));
    if (userData === null) {
      alert("User Not Found");
      navigate("/signup");
    } else {
      let count = 0;
      userData.forEach((element) => {
        if (element.name === name && element.number === number) {
          alert("Log In Successfully");
          sessionStorage.setItem("authText", "My Account");
          navigate("/");
          count++;
        }
      });
      if (count === 0) {
        alert("Invalid User");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <form
          className="w-full max-w-sm bg-white rounded-lg p-8"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="number"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Number
            </label>
            <input
              type="text"
              id="number"
              value={number}
              onChange={handleNumberChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your number"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-[#e42b26] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
          <Link to="/signup" className="text-[#e42b26] underline">
            New Account Click Here
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
