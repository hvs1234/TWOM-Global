// import React from 'react'

import { Link } from "react-router-dom";
import Nav from "../../Components/Navbar/Nav";
import Handlers from "../../Services/Handlers";
import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";
import PropTypes from "prop-types";

const Hero = () => {
  const { handleOnClick } = Handlers();

  const AnimatedCounter = ({ id, end }) => {
    const counterRef = useRef(null);
    useEffect(() => {
      const counter = new CountUp(id, end, {
        suffix: "+",
      });
      if (!counter.error) {
        counter.start();
      } else {
        console.error(counter.error);
      }
    }, [id, end]);

    return (
      <h3
        id={id}
        ref={counterRef}
        className="counter-numbers text-[4rem] max-lg:text-[3rem]"
      >
        {end}+
      </h3>
    );
  };
  AnimatedCounter.propTypes = {
    id: PropTypes.string.isRequired,
    end: PropTypes.number.isRequired,
  };

  return (
    <>
      <Nav />
      <div className="relative object-cover w-[100%] h-[100%] max-lg:h-[100%] transition-all duration-[0.4s] ease-linear bg-no-repeat bg-center bg-cover">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-[0.4s] ease-linear"
          src="/Images/hero-video.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[black] opacity-[0.7]"></div>
        <div className="relative w-[100%] h-[100%] flex flex-col justify-center items-center text-center gap-[2rem] pt-[30rem] pb-[10rem] max-md:pt-[20rem]">
          <h1 className="text-[6rem] text-[white] font-light max-xl:text-[5rem] max-lg:text-[4rem] max-md:text-[3.5rem] max-md:max-w-[50%] max-sm:max-w-[60%] max-[500px]:max-w-[80%] max-[400px]:max-w-[90%]">
            Storytelling, Branding and{" "}
            <span className="font-normal">
              <span className="text-[#e4d4ac]">D</span>igital{" "}
              <span className="text-[#e4d4ac]">E</span>xperiences
            </span>
          </h1>
          <p className="text-[2.2rem] font-normal text-[#ededed] max-xl:text-[2rem] max-lg:max-w-[60%] max-md:max-w-[80%]">
            At TWOM Global, we specialize in the art of storytelling, the
            essence of branding, and the innovation of digital experiences.
          </p>
          <div className="hero-counter grid grid-cols-2 max-lg:grid-cols-2 gap-[10rem] max-lg:gap-[6rem] py-[4rem]">
            <div className="counter-numbers flex flex-col justify-center items-center gap-[1rem] text-[4rem] text-[white]">
              <i className="fa-solid fa-users text-[white] text-[4rem] max-lg:text-[3rem]"></i>
              <AnimatedCounter id="team" end={12} />
              <p className="text-[2.2rem] max-xl:text-[2rem] max-lg:text-[2rem]">
                Team
              </p>
            </div>
            <div className="counter-numbers flex flex-col justify-center items-center gap-[1rem] text-[4rem] text-[white]">
              <i className="fa-solid fa-headset text-[white] text-[4rem] max-lg:text-[3rem]"></i>
              <AnimatedCounter id="customer" end={126} />
              <p className="text-[2.2rem] max-xl:text-[2rem] max-lg:text-[2rem]">
                Happy Customer
              </p>
            </div>
            <div className="counter-numbers flex flex-col justify-center items-center gap-[1rem] text-[4rem] text-[white]">
              <i className="fa-solid fa-box-open text-[white] text-[4rem] max-lg:text-[3rem]"></i>
              <AnimatedCounter id="projects" end={102} />
              <p className="text-[2.2rem] max-xl:text-[2rem] max-lg:text-[2rem]">
                Projects
              </p>
            </div>
            <div className="counter-numbers flex flex-col justify-center items-center gap-[1rem] text-[4rem] text-[white]">
              <i className="fa-solid fa-trophy text-[white] text-[4rem] max-lg:text-[3rem]"></i>
              <AnimatedCounter id="completed" end={86} />
              <p className="text-[2.2rem] max-xl:text-[2rem] max-lg:text-[2rem]">
                Completed
              </p>
            </div>
          </div>
          <div className="w-[100%] mt-[2rem] transition-all duration-[0.2s] ease-in-out hover:scale-[1.05]">
            <Link
              to={"/service"}
              onClick={handleOnClick("/service")}
              className="text-[2.2rem] text-[white] bg-[crimson] hover:bg-[#bd3853] px-[6rem] py-[1rem] rounded-full"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
