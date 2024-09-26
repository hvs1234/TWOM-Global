// import React from 'react'

import { Link } from "react-router-dom";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import Handlers from "../../Services/Handlers";

const ServicePart = () => {
  const { handleOnClick, servicecarddata } = Handlers();

  return (
    <>
      <div className="py-[9rem] px-[20rem] w-full h-[100%] max-xl:px-[5rem] max-md:px-[3rem]">
        <div className="flex flex-col text-center justify-center items-center gap-[2rem] w-[100%]">
          <h2 className="text-[4rem] max-xl:text-[3rem] text-[#212121] font-normal">
            What`s Services We Are Offering to Our Customers
          </h2>
          <p className="text-[2rem] text-[#212121]">
            We believe in empowering our clients with a diverse array of
            services designed to meet their unique needs.
          </p>
        </div>
        <ServiceCard homeservicedata={servicecarddata} />
      </div>
      <div className="relative py-[9rem] bg-[url('/Images/Services/2.jpg')] bg-fixed bg-no-repeat bg-center bg-cover">
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[black] opacity-[0.7]"></div>
        <div className="relative flex flex-col gap-[2rem] justify-center items-center text-center w-[100%]">
          <p className="text-[2rem] text-[white]">
            Any plan to start a project
          </p>
          <h2 className="text-[4rem] max-xl:text-[3rem] text-[white] font-semibold">
            Our Experts always ready to work with you
          </h2>
          <div className="w-[100%] mt-[2rem] transition-all duration-[0.2s] ease-in-out">
            <Link
              to={"/contact"}
              onClick={handleOnClick("/contact")}
              className="text-[2rem] text-[black] bg-[white] hover:bg-[wheat] px-[6rem] py-[1rem] rounded-full"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePart;
