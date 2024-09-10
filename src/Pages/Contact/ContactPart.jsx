// import React from 'react'
import img from "/Images/Contact/1.jpg";
import ContactForm from "./ContactForm";

const ContactPart = () => {
  return (
    <>
      <div className="py-[9rem] px-[20rem] w-[100%] relative object-cover max-xl:px-[5rem] max-md:px-[3rem]">
        <div className="grid grid-cols-2 gap-[4rem] w-[100%] h-[100%] justify-center max-xl:grid-cols-1">
          <div className="flex flex-col gap-[2rem] justify-center w-[100%]">
            <div className="flex flex-col gap-[1rem]">
              <p className="text-[2rem] text-[#212121]">Let`s Talk with us</p>
              <h2 className="text-[3rem] text-[#212121] font-normal">
                Connect with TWOM Global
              </h2>
            </div>
            <div className="flex items-center justify-center w-[100%]">
              <img src={img} alt="img" className="w-[100%]" />
            </div>
            <p className="text-[2rem] text-[#212121]">
              Welcome To <span className="font-semibold">TWOM Global</span>,
              empowering limitless possibilities
            </p>
            <p className="text-[2rem] text-[#212121]">
              We are dedicated to empowering businesses with cutting-edge
              solutions, transforming challenges into opportunities. At TWOM
              Global, we believe in pushing boundaries, fostering growth, and
              creating lasting impact. Join us on a journey of limitless
              possibilities and remarkable achievements!
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4292.886816560065!2d78.04757377622117!3d30.291917506802072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929e483efcbb1%3A0xfd367dee882bff70!2sTWOM%20Global!5e1!3m2!1sen!2sin!4v1725887378004!5m2!1sen!2sin"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-[100%] h-[50vh]"
      ></iframe>
    </>
  );
};

export default ContactPart;
