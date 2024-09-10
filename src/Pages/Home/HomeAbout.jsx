// import React from 'react'
import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";
import about_img from "/Images/2.jpg";

const HomeAbout = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div className="py-[6rem] px-[20rem] w-full max-2xl:px-[5rem] max-md:px-[3rem]">
        <div className="flex items-center gap-[4rem] justify-center relative">
          <h2 className="text-[4rem] font-normal max-xl:text-[3rem]">
            <i className="fa-solid fa-globe text-[#212121]"></i>&nbsp;&nbsp; Creative
            Connections, Global Impact
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-[8rem] justify-center mt-[12rem] max-lg:grid-cols-1 max-lg:mt-[6rem]">
          <div className="flex flex-col gap-[1rem]">
            <h2 className="text-[2rem] font-normal uppercase">About Us</h2>
            <h2 className="text-[4rem] max-xl:text-[3rem]">
              Empowering More <span className="text-[#4d3e19]">Ideas</span> and{" "}
              <span className="text-[#4d3e19]">Shaping Futures</span> in 2024
            </h2>
            <p className="text-[2rem] text-[black] font-normal mt-[1rem]">
              At TWOM Global, we empower innovative ideas that shape the future
              of brands. Through creative strategies, we drive impactful growth
              and success.
            </p>
            <p className="text-[2rem] text-[black] font-normal mt-[1rem]">
              Our approach blends creativity and technology to craft unique
              experiences, helping businesses connect with audiences and thrive
              in a digital world. We are dedicated to turning visions into
              reality, transforming concepts into powerful narratives that
              resonate and leave a lasting impact.
            </p>
            <div className="mt-[2rem]">
              <Link
                to={"/"}
                onClick={handleOnClick("/")}
                className="text-[2rem] font-normal border-[1px] border-[grey] px-[2rem] py-[0.5rem] rounded-xl transition-all duration-[0.2s] ease-linear hover:text-[#535353]"
              >
                <i className="fa-solid fa-arrow-right-long"></i>&nbsp; Read More
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src={about_img} alt="img" className="w-[100%]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
