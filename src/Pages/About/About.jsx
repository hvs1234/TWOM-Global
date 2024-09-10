// import React from 'react'
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Navbar/Nav";
import AboutMission from "./AboutMission";
import AboutValue from "./AboutValue";
import AboutVision from "./AboutVision";

const About = () => {
  return (
    <>
      <Nav />
      <div className="relative object-cover w-full h-[100%] transition-all duration-[0.4s] ease-linear bg-[url('/Images/About/1.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="absolute top-0 left-0 w-full h-[100%] bg-[black] opacity-[0.7]"></div>
        <div className="relative flex flex-col items-center justify-center text-center gap-[2rem] pt-[25rem] pb-[10rem] h-[100%]">
          <h2 className="text-[6rem] font-normal text-[white] max-xl:text-[5rem] max-lg:text-[4rem] max-md:text-[3.5rem]">
            So let us tell you our story
          </h2>
          <p className="text-[2rem] text-[#f2f2f2] font-normal max-w-[50%] max-md:max-w-[80%] max-[500px]:max-w-[100%] max-[500px]:px-[3rem]">
            TWOM Global crafts powerful stories, blending branding and
            innovative digital experiences to help businesses build lasting
            connections with their audiences.
          </p>
        </div>
      </div>
      <AboutMission />
      <AboutVision />
      <AboutValue />

      {/* Footer */}

      <Footer />
    </>
  );
};

export default About;
