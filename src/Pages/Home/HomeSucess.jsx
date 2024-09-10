// import React from 'react'

import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";
import img from "/Images/3.jpg";

const HomeSucess = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div className="py-[9rem] px-[20rem] w-[100%] grid grid-cols-2 gap-[8rem] max-xl:px-[5rem] max-md:px-[3rem] max-lg:grid-cols-1">
        <div className="flex flex-col gap-[2rem] justify-center">
          <h2 className="text-[4rem] font-normal text-[#501437] max-w-[100%] max-xl:text-[3rem]">
            We help businesses launch, grow and succeed
          </h2>
          <p className="text-[2rem]">
            Whether you`re a startup looking to make a mark, a growing business
            seeking to expand, or an established brand aiming to stay at the
            top, TWOM Global is your partner in the journey. Let`s
            collaboratively write a success story that goes beyond visuals - A
            narrative that defines your brand and resonates with your audience,
            ensuring enduring success in the business world.
          </p>
          <div className="w-[100%] mt-[2rem] transition-all duration-[0.2s] ease-in-out">
            <Link
              to={"/service"}
              onClick={handleOnClick("/service")}
              className="text-[2rem] text-[white] bg-[crimson] hover:bg-[#bd3853] px-[6rem] py-[1rem] rounded-full "
            >
              Our Services
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-md shadow-img_shadow">
          <img src={img} alt="img" className="w-[100%] rounded-md" />
        </div>
      </div>
    </>
  );
};

export default HomeSucess;
