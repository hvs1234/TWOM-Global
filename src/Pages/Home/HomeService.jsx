// import React from 'react'
import { Link } from "react-router-dom";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import Handlers from "../../Services/Handlers";

const HomeService = () => {
  const { homeservicedata, handleOnClick } = Handlers();

  return (
    <>
      <div className="py-[6rem] px-[20rem] w-[100%] bg-[#f2f2f2] max-xl:px-[5rem] max-md:px-[3rem]">
        <div className="flex flex-col gap-[1rem] text-center items-center justify-center">
          <h2 className="text-[4rem] text-[#212121] max-xl:text-[3rem]">
            What`s Services We Are Offering to Our Customers
          </h2>
          <p className="text-[2rem]">
            We believe in empowering our clients with a diverse array of
            services designed to meet their unique needs.
          </p>
        </div>
        <ServiceCard homeservicedata={homeservicedata} />
        <div className="flex justify-center items-center text-center mt-[4rem]">
          <Link
            to={"/service"}
            onClick={handleOnClick("/service")}
            className="text-[2.5rem] text-[#212121] hover:scale-[1.02] transition-all duration-[0.2s] ease-in-out hover:text-[#2c2c46]"
          >
          <i className="fa-solid fa-chevron-right text-[2rem]"></i>&nbsp; See More
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeService;
