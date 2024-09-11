import { BsGraphUpArrow } from "react-icons/bs";
import { FaLaptopCode, FaPenAlt } from "react-icons/fa";
import { FaTv } from "react-icons/fa6";
import { IoIosCopy } from "react-icons/io";
import { RiUserSettingsFill } from "react-icons/ri";

const ServiceCardData = [
  {
    id: 1,
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
    icon: (
      <IoIosCopy
        size={60}
        className="rounded-full px-[1.5rem] py-[0.5rem] bg-[#96ffa9] text-[#1d4d34]"
      />
    ),

    title: "Digital Strategy & Planning",
    desc: `Our experts craft bespoke strategies to elevate your online presence, ensuring every digital move aligns with your business goals.`,
  },
  {
    id: 4,
    icon: (
      <FaPenAlt
        size={60}
        className="rounded-full px-[1.5rem] py-[0.5rem] bg-[#f3aacb] text-[#3b1427]"
      />
    ),

    title: "Website Design & Development",
    desc: `Our team takes a strategic approach, aligning your website with your brand's goals and your audience's needs.`,
  },
  {
    id: 5,
    icon: (
      <RiUserSettingsFill
        size={60}
        className="rounded-full px-[1.5rem] py-[0.5rem] bg-[#96ffa9] text-[#1d4d34]"
      />
    ),

    title: "Video Production",
    desc: `Our Videos are meticulously crafted to not only tell your story but also to enhance your brand's image, engage your audience, and drive results.`,
  },
  {
    id: 6,
    icon: (
      <FaTv
        size={60}
        className="rounded-full px-[1.5rem] py-[0.5rem] bg-[#bad1e8] text-[#414182]"
      />
    ),

    title: "Documentaries",
    desc: `Our documentary services are more than just videos; they are powerful narratives that delve deep into your brand, cause, or message.`,
  },
];

export default ServiceCardData;
