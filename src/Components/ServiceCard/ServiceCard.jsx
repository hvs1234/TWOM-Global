// import React from 'react'
import PropTypes from "prop-types";

const ServiceCard = ({ homeservicedata }) => {
  return (
    <>
      <div className="mt-[8rem] grid grid-cols-3 gap-[4rem] h-[100%] w-[100%] mb-auto transition-all duration-[0.2s] ease-linear max-xl:grid-cols-2 max-sm:grid-cols-1">
        {homeservicedata.map((e) => {
          return (
            <div
              className={`flex flex-col justify-start gap-[2rem] border-[1px] border-[#212121] rounded-2xl items-start px-[4rem] py-[4rem] cursor-pointer transition-all duration-[0.3s] ease-linear hover:scale-[1.02] shadow-md mb-auto mt-auto h-[100%] w-[100%] ${e.boxclass}`}
              key={e.id}
            >
              {e.icon}
              <h2 className="text-[3rem] text-[#3a0f25]">{e.title}</h2>
              <p className="text-[2rem]">{e.desc}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

ServiceCard.propTypes = {
  homeservicedata: PropTypes.array.isRequired,
};

export default ServiceCard;
