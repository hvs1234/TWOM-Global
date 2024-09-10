// import React from 'react'
import vision_img from "/Images/About/4.jpg";

const AboutVision = () => {
  return (
    <>
      <div className="px-[20rem] w-full h-[100%] bg-[#f2f2f2] py-[9rem] max-xl:px-[5rem] max-md:px-[3rem]">
        <div className="flex flex-col gap-[2rem] items-center justify-center text-center">
          <h2 className="text-[4rem] max-xl:text-[3rem] text-[#212121]">
            <i className="fa-solid fa-house-circle-check text-[#ffffff] text-[3rem] max-xl:text-[2rem] px-[1.5rem] py-[2rem] bg-[#7b5e5e] rounded-full"></i>
            &nbsp; Our Vision
          </h2>
          <p className="text-[2rem] text-[#212121] max-w-[60%] max-md:max-w-[100%] max-md:px-[3rem]">
            To redefine visual communication globally, becoming the premier
            creative partner recognized for excellence, innovation, and
            collaborative storytelling that inspires positive change.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[8rem] w-[100%] justify-center pt-[9rem] pb-[4rem] max-xl:grid-cols-1 max-xl:gap-[10rem]">
          <div className="flex flex-col gap-[2rem] justify-center items-start order-2">
            <h2 className="text-[3rem] text-[#212121] font-normal">
              Shaping the Future with Storytelling
            </h2>
            <p className="text-[2rem] text-[#212121]">
              TWOM Global envisions a future where brands transcend traditional
              marketing and embrace storytelling as a powerful force for
              transformation. With a commitment to innovation, they create
              visually stunning and emotionally resonant digital experiences
              that captivate audiences across platforms.
            </p>
            <p className="text-[2rem] text-[#212121]">
              As a trusted partner, TWOM Global collaborates closely with
              businesses to craft unique brand narratives, ensuring that every
              project drives not only business success but also meaningful,
              positive impact. Their dedication to excellence positions them as
              leaders in the industry, continually setting new standards for
              creativity and inspiration in the digital age.
            </p>
          </div>
          <div className="flex items-center justify-center w-[100%] rounded-xl max-xl:order-2">
            <img
              src={vision_img}
              alt="img"
              className="w-[100%] rounded-xl shadow-img_shadow"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutVision;
