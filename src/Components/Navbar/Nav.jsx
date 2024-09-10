// import React from 'react'
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";
import "./Nav.css";
import logo from "/Images/logo.png";

const Nav = () => {
  const { handleOnClick, navlinkdata, toggleNavbar, isActive } = Handlers();

  return (
    <>
      <header
        className={`header flex justify-center fixed w-full h-[auto] top-0 left-0 items-center py-[2rem] max-md:py-[3rem] shadow-sm z-[1001] max-md:justify-between ${
          isActive ? "active" : ""
        }`}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[black] opacity-[0.5]"></div>
        <Link
          to={"/"}
          onClick={"/"}
          className="flex items-center gap-[1rem] justify-center relative"
        >
          <img
            src={logo}
            alt="logo"
            className="w-[30%] rounded-full px-[0.2rem] py-[0.2rem] border-[1px] border-[grey]"
          />
        </Link>
        <nav className="navbar flex justify-center items-center">
          <ul className="flex justify-center items-center gap-[3rem] relative">
            {navlinkdata.map((e) => {
              return (
                <Link
                  key={e.id}
                  to={e.to}
                  onClick={handleOnClick(e.to)}
                  className={e.class}
                >
                  {e.title}
                </Link>
              );
            })}
          </ul>
        </nav>
        <div className="flex justify-end items-center px-[2rem] relative text-[white]">
          <HiMenu
            size={26}
            className="cursor-pointer nav-btn"
            onClick={toggleNavbar}
          />
        </div>
      </header>
    </>
  );
};

export default Nav;
