import React, { useState } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <header className=" fixed w-full z-10 bg-secondary text-white py-4">
      {/* desktop navigation section  */}
      <nav className=" container flex justify-between items-center">
        <div className=" flex items-center gap-2">
          <GiSteeringWheel size={35} className=" text-primary" />
          <Link to="/" className=" font-bold text-2xl">
            VehiKart
          </Link>
        </div>

        <div className=" hidden md:flex items-center gap-8 font-medium text-xl">
          <Link
            to="/"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
            Home
          </Link>
          <Link
            to="/about"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
            About Us
          </Link>
          <Link
            to="/cars"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
            Buy
          </Link>
          <Link
            to="/services"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
            Sell
          </Link>

          <button className=" hidden lg:flex border-2 border-primary text-lg px-4 rounded-md hover:bg-primary transition duration-200 ease-linear">
            Sign In
          </button>
        </div>

        <div className=" md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <RiMenuUnfoldFill size={25} onClick={handleChange} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
