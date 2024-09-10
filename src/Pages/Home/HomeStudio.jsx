// import React from 'react'

import Handlers from "../../Services/Handlers";

const HomeStudio = () => {
  const { homestudioimg } = Handlers();

  return (
    <>
      <div className="py-[9rem] px-[20rem] w-[100%] bg-[#f2f2f2] h-[100%] transition-all duration-[0.4s] ease-linear max-xl:px-[5rem] max-md:px-[3rem]">
        <div className="grid grid-cols-2 gap-[6rem] justify-center w-[100%] h-[100%] max-2xl:grid-cols-1">
          <div className="flex flex-col gap-[2rem] justify-center items-start w-[100%] order-2">
            <p className="text-[2rem] text-[#212121]">Content Creation</p>
            <h2 className="text-[4rem] capitalize font-normal text-[#212121] max-w-[80%] max-xl:text-[3rem] max-xl:max-w-[100%]">
              An agency with an{" "}
              <span className="text-[#655325]"> In-house Studio Setup</span>
            </h2>
            <p className="text-[2rem] text-[#212121] max-w-[100%]">
              An innovative agency with a dedicated in-house studio, we`ve
              crafted a central hub for all our content creation needs.
            </p>
          </div>
          <div className="grid grid-cols-3 justify-center gap-[2rem] items-center w-[100%] h-[100%] max-2xl:order-2 max-sm:grid-cols-1">
            {homestudioimg.map((e) => {
              return (
                <img src={e.img} alt="img" key={e.id} className="w-[100%] h-[100%]" />
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeStudio;
