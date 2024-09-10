import { BsGraphUpArrow } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { IoIosCopy } from "react-icons/io";

const HomeServiceData = [
  {
    id: 1,
    icon: <FaLaptopCode size={60} className="text-[#414182]" />,
    title: "Brand Development",
    desc: `We craft brand identities that inspire, values that innovate, and stories that connect with your audience on a profound level.`,
  },
  {
    id: 2,
    icon: <BsGraphUpArrow size={60} className="text-[#3b1427]" />,
    title: "Digital Marketing",
    desc: `We excel in using data-driven strategies, SEO expertise, and social media savvy to boost your brand's digital presence.`,
  },
  {
    id: 3,
    icon: <IoIosCopy size={60} className="text-[#1d4d34]" />,
    title: "Digital Strategy & Planning",
    desc: `Our experts craft bespoke strategies to elevate your online presence, ensuring every digital move aligns with your business goals.`,
  },
];

export default HomeServiceData;
