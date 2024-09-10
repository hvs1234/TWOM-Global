// import React from 'react'

import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "/Images/logo.png";
import Handlers from "../../Services/Handlers";

const Footer = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div className="pt-[9rem] pb-[2rem] bg-[black] w-[100%] px-[40rem] ml-auto mr-auto max-xl:px-[5rem]">
        <div className="flex items-start justify-center gap-[10rem] max-xl:flex-wrap max-sm:flex-col max-xl:justify-start ml-auto mr-auto">
          <div className="flex flex-col gap-[0rem]">
            <div className="flex items-start justify-start">
              <img src={logo} alt="logo" className="w-[60%]" />
            </div>
            <div className="flex flex-col gap-[3rem]">
              <p className="text-[2rem] text-[white]">Social Links</p>
              <div className="flex items-center gap-[2rem]">
                <a
                  href="https://www.facebook.com/profile.php?id=100094131202196"
                  target="_blank"
                  className=""
                >
                  <FaFacebook
                    className="transition-all duration-[0.2s] ease-linear hover:text-[goldenrod] text-[white]"
                    size={20}
                  />
                </a>
                <a
                  href="https://www.instagram.com/twomglobal/"
                  target="_blank"
                  className=""
                >
                  <FaInstagram
                    className="transition-all duration-[0.2s] ease-linear hover:text-[goldenrod] text-[white]"
                    size={20}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/twom-global/"
                  target="_blank"
                  className=""
                >
                  <FaLinkedin
                    className="transition-all duration-[0.2s] ease-linear hover:text-[goldenrod] text-[white]"
                    size={20}
                  />
                </a>
                <a
                  href="https://www.youtube.com/@TWOMGlobal"
                  target="_blank"
                  className=""
                >
                  <FaYoutube
                    className="transition-all duration-[0.2s] ease-linear hover:text-[goldenrod] text-[white]"
                    size={20}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[3rem]">
            <p className="text-[2rem] text-[white]">Company</p>
            <ul className="flex flex-col gap-[2rem]">
              <Link
                to={"/"}
                onClick={handleOnClick("/")}
                className="text-[white] transition-all duration-[0.3s] ease-linear hover:text-[goldenrod] text-[1.6rem]"
              >
                Home
              </Link>
              <Link
                to={"/about"}
                onClick={handleOnClick("/about")}
                className="text-[white] transition-all duration-[0.3s] ease-linear hover:text-[goldenrod] text-[1.6rem]"
              >
                About
              </Link>
              <Link
                to={"/service"}
                onClick={handleOnClick("/service")}
                className="text-[white] transition-all duration-[0.3s] ease-linear hover:text-[goldenrod] text-[1.6rem]"
              >
                Services
              </Link>
              <Link
                to={"/contact"}
                onClick={handleOnClick("/contact")}
                className="text-[white] transition-all duration-[0.3s] ease-linear hover:text-[goldenrod] text-[1.6rem]"
              >
                Contact
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-[3rem]">
            <p className="text-[2rem] text-[white]">Legal Support</p>
            <ul className="flex flex-col gap-[2rem]">
              <Link
                to={"/about"}
                onClick={handleOnClick("/about")}
                className="text-[white] transition-all duration-[0.3s] ease-linear hover:text-[goldenrod] text-[1.6rem]"
              >
                About Us
              </Link>
              <Link
                to={"/contact"}
                onClick={handleOnClick("/contact")}
                className="text-[white] transition-all duration-[0.3s] ease-linear hover:text-[goldenrod] text-[1.6rem]"
              >
                Contact
              </Link>
              <a
                href="https://www.termsfeed.com/live/a883acb1-f9f2-469d-a46e-8efd9dcc7246"
                target="_blank"
                className="text-[white] transition-all duration-[0.3s] ease-linear hover:text-[goldenrod] text-[1.6rem]"
              >
                Privacy Policy
              </a>
              <a
                href="https://www.termsfeed.com/live/b0cda9ab-0ce8-4d26-a772-98883d17ba0c"
                target="_blank"
                className="text-[white] transition-all duration-[0.3s] ease-linear hover:text-[goldenrod] text-[1.6rem]"
              >
                Terms & Conditions
              </a>
            </ul>
          </div>
          <div className="flex flex-col gap-[3rem]">
            <p className="text-[2rem] text-[white]">Address</p>
            <ul className="flex flex-col gap-[2rem]">
              <p className="text-[white] transition-all duration-[0.3s] ease-linear text-[1.6rem]">
                <i className="fa-solid fa-location-dot text-[2rem]"></i>&nbsp;
                Lane No. 2, Ashok Vihar, Dehradun, Uttarakhand 248001
              </p>
              <a
                href="tel:9760373493"
                className="text-[white] transition-all duration-[0.3s] ease-linear hover:text-[goldenrod] text-[1.6rem]"
              >
                <i className="fa-solid fa-phone"></i>&nbsp; 097603 73493
              </a>
              <a
                href="mailto:globaltwom@gmail.com"
                className="text-[white] transition-all duration-[0.3s] ease-linear hover:text-[goldenrod] text-[1.6rem]"
              >
                <i className="fa-solid fa-envelope"></i>&nbsp;
                globaltwom@gmail.com
              </a>
            </ul>
          </div>
        </div>
        <div className="flex items-center text-center justify-center mt-[8rem]">
          <p className="text-[1.6rem] text-[white]">
            &copy; 2024. TWOM Global | All right reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
