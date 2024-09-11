import { BsGraphUpArrow } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { IoIosCopy } from "react-icons/io";

const HomeServiceData = [
  {
    id: 1,
    boxclass: "max-xl:col-span-1",
    icon: (
      <FaLaptopCode
        size={60}
        className="rounded-full px-[1.5rem] py-[0.5rem] bg-[#bad1e8] text-[#414182]"
      />
    ),
    title: "Brand Development",
    desc: `We craft brand identities that inspire, values that innovate, and stories that connect with your audience on a profound level.`,
  },
  {
    id: 2,
    boxclass: "max-xl:col-span-1",
    icon: (
      <BsGraphUpArrow
        size={60}
        className="rounded-full px-[1.5rem] py-[0.5rem] bg-[#f3aacb] text-[#3b1427]"
      />
    ),
    title: "Digital Marketing",
    desc: `Partner with us to navigate the digital landscape and achieve your marketing goals with precision and creativity.`,
  },
  {
    id: 3,
    boxclass: "max-xl:col-span-2 max-sm:col-span-1",
    icon: (
      <IoIosCopy
        size={60}
        className="rounded-full px-[1.5rem] py-[0.5rem] bg-[#96ffa9] text-[#1d4d34]"
      />
    ),
    title: "Digital Strategy & Planning",
    desc: `Our experts craft bespoke strategies to elevate your online presence, ensuring every digital move aligns with your business goals.`,
  },
];

export default HomeServiceData;
