// import React from 'react'
import Handlers from "../../Services/Handlers";

const HomeChoose = () => {
  const { homechoosedata } = Handlers();

  return (
    <>
      <div className="py-[6rem] px-[20rem] w-[100%] bg-[#f2f2f2] max-xl:px-[5rem] max-md:px-[3rem]">
        <div className="flex flex-col items-center gap-[2rem] justify-center text-center">
          <h2 className="text-[4rem] max-xl:text-[3rem]">Why choose us?</h2>
          <p className="text-[2rem] text-[#212121] max-w-[60%] max-xl:max-w-[100%]">
            We are your partners in bringing visions to life, transforming ideas
            into impactful realities. Here`s why choosing TWOM Global is your
            gateway to unparalleled creativity and excellence.
          </p>
          <div className="grid grid-cols-3 gap-[12rem] justify-center items-center mt-[8rem] max-lg:grid-cols-1 max-lg:gap-[8rem]">
            {homechoosedata.map((e) => {
              return (
                <div
                  className="flex flex-col gap-[1rem] items-center justify-center text-center"
                  key={e.id}
                >
                  {e.icon}
                  <p className="text-[2.5rem] font-semibold">{e.title}</p>
                  <p className="text-[2rem] font-normal">{e.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeChoose;
