// import React from 'react'
import img from "/Images/About/2.jpg";
import mission_img from "/Images/3.jpg";

const AboutMission = () => {
  return (
    <>
      <div className="py-[9rem] px-[20rem] w-full h-[100%] max-xl:px-[5rem] max-md:px-[3rem]">
        <div className="flex flex-col text-center justify-center items-center gap-[2rem] w-[100%]">
          <h2 className="text-[4rem] max-xl:text-[3rem] text-[#212121] capitalize font-normal">
            Welcome to Future-Oriented Hybrid Agency
          </h2>
          <p className="text-[2rem] text-[#212121]">
            Storytelling, branding and digital experiences.
          </p>
          <div className="flex justify-center items-center w-[100%] mt-[4rem] rounded-xl">
            <img src={img} alt="img" className="w-[100%] rounded-xl" />
          </div>
        </div>
        <div className="mt-[8rem] flex flex-col gap-[2rem] items-center justify-center text-center">
          <h2 className="text-[4rem] text-[#212121] max-xl:text-[3rem]">
            <i className="fa-solid fa-user-gear text-[#ffffff] text-[3rem] max-xl:text-[2rem] px-[1.5rem] py-[2rem] bg-[#7b5e5e] rounded-full"></i>
            &nbsp; Our Mission
          </h2>
          <p className="text-[2rem] text-[#212121] max-w-[60%] max-md:max-w-[100%] max-md:px-[3rem]">
            TWOM Global: Empowering businesses through transformative
            storytelling, creating connections that captivate and drive success.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[4rem] w-[100%] justify-center pt-[9rem] max-xl:grid-cols-1 max-xl:gap-[10rem]">
          <div className="flex flex-col gap-[2rem] justify-center items-start">
            <h2 className="text-[3rem] text-[#212121] font-normal">
              Transforming Brands Through Digital Storytelling
            </h2>
            <p className="text-[2rem] text-[#212121]">
              TWOM Global is a visionary company that excels in storytelling,
              branding, and creating transformative digital experiences. By
              fusing creativity with strategy, they craft compelling narratives
              that resonate deeply with audiences. Their expertise in digital
              innovation empowers brands to stand out, driving meaningful
              engagement and long-term success in an ever-evolving digital
              landscape.
            </p>
            <p className="text-[2rem] text-[#212121]">
              It redefines how brands connect with audiences through digital
              storytelling. By integrating creative branding strategies with
              cutting-edge technology, they deliver seamless, interactive
              experiences that captivate and inspire. Their approach not only
              enhances brand identity but also fosters deeper audience
              engagement, driving sustainable growth and success in the digital
              world.
            </p>
          </div>
          <div className="flex items-center justify-center w-[100%] rounded-xl">
            <img
              src={mission_img}
              alt="img"
              className="w-[100%] rounded-xl shadow-img_shadow"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMission;
