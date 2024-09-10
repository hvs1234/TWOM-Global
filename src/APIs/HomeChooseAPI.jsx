import { BsSuitcaseLgFill } from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";
import { IoTimerSharp } from "react-icons/io5";

const HomeChooseData = [
  {
    id: 1,
    icon: <BsSuitcaseLgFill size={60} className="text-[#391616]" />,
    title: "Global experience",
    desc: `We have worked with multinational companies, as well as smaller businesses from all continents.`,
  },
  {
    id: 2,
    icon: <IoTimerSharp size={60} className="text-[#18451d]" />,
    title: "Quality for value",
    desc: `Our motto is to provide only the highest quality to our clients, no matter the circumstances.`,
  },
  {
    id: 3,
    icon: <FaTruckFast size={60} className="text-[#272868]" />,
    title: "High standards",
    desc: `We take data seriously, meaning that we only deliver work that we can be proud of.`,
  },
];

export default HomeChooseData;
