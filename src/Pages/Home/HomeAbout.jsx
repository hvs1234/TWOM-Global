// import React from 'react'
import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";
import about_img from "/Images/2.jpg";
import about_img2 from "/Images/About/6.jpg";
import about_img3 from "/Images/About/7.jpg";

const HomeAbout = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div className="py-[6rem] px-[20rem] w-full max-2xl:px-[5rem] max-md:px-[3rem]">
        <div className="flex items-center gap-[8rem] justify-center relative max-xl:flex-col max-xl:justify-start max-xl:items-start max-xl:gap-[4rem]">
          <div className="flex flex-col items-start justify-center max-xl:flex-row max-xl:gap-[1rem] max-sm:flex-wrap max-sm:items-start max-sm:justify-start max-sm:gap-0">
            <h2 className="text-[4rem] font-normal text-[#212121] max-xl:text-[3rem]">
              Creative{" "}
              <span className="text-[black] font-semibold">Connections</span>,
            </h2>
            <h2 className="text-[4rem] font-normal text-[#212121] max-xl:text-[3rem]">
              Global <span className="text-[black] font-semibold">Impact</span>
            </h2>
          </div>
          <div className="flex items-center gap-[2rem]">
            <img src={about_img2} alt="img" className="w-[50%]" />
            <img src={about_img3} alt="img" className="w-[50%]" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[8rem] justify-center mt-[10rem] max-lg:grid-cols-1 max-xl:mt-[6rem]">
          <div className="flex flex-col gap-[1rem]">
            <h2 className="text-[2rem] font-normal uppercase">About Us</h2>
            <h2 className="text-[4rem] max-xl:text-[3rem]">
              Empowering More{" "}
              <span className="text-[goldenrod] font-semibold">Ideas</span> and{" "}
              <span className="text-[goldenrod] font-semibold">
                Shaping Futures
              </span>{" "}
              in 2024
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
            <div className="mt-[1rem]">
              <Link
                to={"/"}
                onClick={handleOnClick("/")}
                className="text-[2rem] font-normal py-[0.5rem] rounded-xl transition-all duration-[0.2s] ease-linear hover:text-[goldenrod]"
              >
                <i className="fa-solid fa-chevron-right text-[1.5rem]"></i>
                &nbsp; Read More
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
