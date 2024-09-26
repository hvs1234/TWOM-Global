import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import Handlers from "../../Services/Handlers";

const ServiceSwiper = () => {
  const { serviceclientdata } = Handlers();

  return (
    <>
      <div className="py-[9rem] px-[20rem] w-[100%] h-[100%] relative object-cover max-xl:px-[5rem] max-md:px-[3rem]">
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[url('/Images/3.jpg')] bg-no-repeat bg-center bg-cover opacity-[0.2]"></div>
        <div className="flex flex-col gap-[2rem] justify-center items-center text-center">
          <h2 className="text-[4rem] font-normal text-[#212121] max-xl:text-[3rem]">
            What Our Clients Say!
          </h2>
          <p className="text-[2rem] text-[#212121] font-normal">
            Discover the impact of TWOM Global through the words of our clients.
          </p>
        </div>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper py-[9rem] w-[100%] h-[100%] relative object-cover"
        >
          {serviceclientdata.map((e) => {
            return (
              <SwiperSlide
                className="flex gap-[4rem] justify-center items-center max-md:flex-col max-md:justify-start"
                key={e.id}
              >
                <div className="flex justify-center items-center w-[auto]">
                  <img
                    src={e.img}
                    alt="img"
                    className="w-[100%] max-md:w-[80%] rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-[2rem] justify-center w-[50%] max-md:w-[100%] max-md:px-[3rem]">
                  <p className="text-[2rem] text-[#212121]">{e.desc}</p>
                  <div className="flex flex-col gap-[1rem]">
                    <p className="text-[2rem] text-[#3a1529] font-semibold">
                      <i className="fa-regular fa-handshake"></i>&nbsp; {e.name}
                    </p>
                    <p className="text-[2rem]">{e.from}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default ServiceSwiper;
