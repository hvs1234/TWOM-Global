// import React from 'react'
import value_img from "/Images/About/5.jpg";

const AboutValue = () => {
  return (
    <>
      <div className="px-[20rem] w-full h-[100%] py-[9rem] max-xl:px-[5rem] max-md:px-[3rem]">
        <div className="flex flex-col gap-[2rem] items-center justify-center text-center">
          <h2 className="text-[4rem] max-xl:text-[3rem] text-[#212121]">
            <i className="fa-solid fa-hand-holding-dollar text-[#ffffff] text-[3rem] max-xl:text-[2rem] px-[1.5rem] py-[2rem] bg-[#7b5e5e] rounded-full"></i>
            &nbsp; Our Values
          </h2>
          <p className="text-[2rem] text-[#212121] max-w-[60%] max-md:max-w-[100%] max-md:px-[3rem]">
            TWOM Global values creative excellence, client success through
            collaboration, integrity and transparency, continuous growth, and a
            positive impact on society and the environment.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[8rem] w-[100%] justify-center pt-[9rem] pb-[4rem] max-xl:grid-cols-1 max-xl:gap-[10rem]">
          <div className="flex flex-col gap-[2rem] justify-center items-start">
            <h2 className="text-[3rem] text-[#212121] font-normal">
              Empowering Success with Purposeful Innovation
            </h2>
            <p className="text-[2rem] text-[#212121]">
              TWOM Global is dedicated to fostering innovation and excellence,
              striving to exceed client expectations through dynamic
              partnerships and open communication. We prioritize integrity and
              transparency in every interaction, ensuring trust and long-term
              success.
            </p>
            <p className="text-[2rem] text-[#212121]">
              Committed to continuous improvement, we embrace learning and
              adaptability to stay ahead in a rapidly changing world. Our core
              values also extend to making a meaningful impact on both society
              and the environment, believing that business success and social
              responsibility go hand in hand. At TWOM Global, we aim to inspire
              positive change and create value for all stakeholders involved.
            </p>
          </div>
          <div className="flex items-center justify-center w-[100%] rounded-xl">
            <img
              src={value_img}
              alt="img"
              className="w-[100%] rounded-xl shadow-img_shadow"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutValue;
