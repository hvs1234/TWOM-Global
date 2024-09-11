// import React from 'react'

const ContactForm = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-start gap-[4rem] w-[100%]">
        <form
          action="https://formspree.io/f/xwpezjzp"
          method="POST"
          className="w-[100%] flex flex-col gap-[2rem] py-[2rem]"
        >
          <div className="flex flex-col gap-[1rem] mb-[2rem]">
            <p className="text-[3rem] text-[#212121]">Send us a message!</p>
          </div>
          <div className="grid grid-cols-1">
            <div className="flex flex-col gap-[1rem] w-[100%]">
              <input
                type="text"
                name="Name"
                required
                id="name"
                placeholder="Your Name"
                autoComplete="off"
                className="px-[2rem] py-[1rem] bg-[#f2f2f2] rounded-xl w-[100%] text-[#212121] text-[2rem] outline-0 capitalize font-normal border-[1px] border-[darkgrey] resize-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="flex flex-col gap-[1rem] w-[100%]">
              <input
                type="email"
                name="Email"
                required
                id="email"
                placeholder="Your Email"
                autoComplete="off"
                className="px-[2rem] py-[1rem] bg-[#f2f2f2] rounded-xl w-[100%] text-[#212121] text-[2rem] outline-0 capitalize font-normal border-[1px] border-[darkgrey] resize-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="flex flex-col gap-[1rem] w-[100%]">
              <input
                type="number"
                name="Phone"
                required
                id="phone"
                placeholder="Your Phone Number"
                autoComplete="off"
                className="px-[2rem] py-[1rem] bg-[#f2f2f2] rounded-xl w-[100%] text-[#212121] text-[2rem] outline-0 capitalize font-normal border-[1px] border-[darkgrey] resize-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="flex flex-col gap-[1rem] w-[100%]">
              <textarea
                rows={5}
                cols={30}
                type="text"
                name="Message"
                id="message"
                required
                placeholder="Your Message"
                autoComplete="off"
                className="px-[2rem] py-[1rem] bg-[#f2f2f2] rounded-xl w-[100%] text-[#212121] text-[2rem] outline-0 capitalize font-normal border-[1px] border-[darkgrey] resize-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="flex flex-col gap-[1rem] w-[100%]">
              <button
                type="submit"
                className="px-[2rem] py-[1rem] bg-[orangered] text-[white] text-[2rem] rounded-xl"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="flex items-center justify-center gap-[2rem]">
          <i className="fa-solid fa-location-dot rounded-full px-[1.5rem] py-[1.2rem] bg-[darkred] text-[white] text-[3rem] opacity-[0.8]" />
          <div className="flex flex-col gap-[1rem]">
            <p className="text-[2rem] font-semibold">Address</p>
            <p className="text-[2rem] font-normal">
              Lane No. 2, Ashok Vihar, Dehradun, Uttarakhand (India)
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[2rem]">
          <i className="fa-solid fa-clock rounded-full px-[1.2rem] py-[1.2rem] bg-[#008b23] text-[white] text-[3rem] opacity-[0.8]" />
          <div className="flex flex-col gap-[1rem]">
            <p className="text-[2rem] font-semibold">Opening Hours</p>
            <p className="text-[2rem] font-normal">
              Monday to Friday : 9am - 6pm <br /> Saturday : 10am - 4pm
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[2rem]">
          <i className="fa-solid fa-envelope-open-text rounded-full px-[1.5rem] py-[1.2rem] bg-[#324076] text-[white] text-[3rem] opacity-[0.8]" />
          <div className="flex flex-col gap-[1rem]">
            <p className="text-[2rem] font-semibold">Contact Info</p>
            <div className="flex flex-col">
              <a
                href="tel:9760373493"
                className="text-[2rem] font-normal hover:text-[darkblue]"
              >
                +91 976 03 73493
              </a>
              <a
                href="mailto:info@twomglobal.com"
                className="text-[2rem] font-normal hover:text-[darkblue]"
              >
                info@twomglobal.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
