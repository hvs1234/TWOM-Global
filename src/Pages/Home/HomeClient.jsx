// import React from 'react'
import img from "/Images/1.jpg";

const HomeClient = () => {
  return (
    <>
      <div className="py-[9rem] px-[20rem] w-[100%] max-xl:px-[5rem] max-md:px-[3rem]">
        <div className="flex flex-col gap-[1rem] text-center items-center justify-center">
          <p className="text-[2.5rem] max-md:text-[2rem]">
            Our Reach & Clients
          </p>
          <h2 className="text-[4rem] text-[#212121] max-xl:text-[3rem]">
            Elevating{" "}
            <span className="font-semibold">
              <span className="text-[black] font-semibold">B</span>rands,{" "}
              <span className="text-[black] font-semibold">E</span>verywhere
            </span>
          </h2>
          <div className="flex items-center justify-center w-[100%] mt-[4rem]">
            <img src={img} alt="img" className="w-[100%]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeClient;
