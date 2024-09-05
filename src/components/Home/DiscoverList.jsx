import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { GiRobber } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";
import moreBgImg from "../../assets/images/home_category.jpeg";

export default function DiscoverList() {
  const lists = [
    {
      title: "E-Commerce-Fraud",
      link: "/about",
      icon: <MdOutlineShoppingCart />,
    },
    {
      title: "F-Commerce-Fraud",
      link: "/about",
      icon: <FaFacebook />,
    },
    {
      title: "Fraud Caller",
      link: "/about",
      icon: <FaPhoneAlt />,
    },
    {
      title: "Fake Government Website",
      link: "/about",
      icon: <FaRegEye />,
    },
    {
      title: "Scammer",
      link: "/about",
      icon: <GiRobber />,
    },
    {
      title: "Shop Fraud",
      link: "/about",
      icon: <IoMdHome />,
    },
    {
      title: "Other Issues",
      link: "/about",
      icon: <CgMoreO />,
    },
  ];

  return (
    <div className="pb-16">
      <div>
        <h2 className="text-center py-1 bg-[#537cd9] w-fit text-white px-4 mx-auto text-md rounded-lg mb-4">
          Fraud, scams, and bad business practices.
        </h2>
        <h1 className="text-4xl font-bold mx-auto text-center">
          Discover Maldives Blacklist
        </h1>
      </div>
      <div className="pt-16 grid grid-cols-12 gap-8">
        {lists?.map((item) => (
          <Link
            to={`/${item.link}`}
            className="col-span-6 md:col-span-4 rounded-lg lg:col-span-3 h-[300px] w-full border-2 relative group"
            key={item.title}
          >
            <div className="bg-[#134513] text-white rounded-lg h-[230px] flex justify-center items-center w-full ">
              <span className="transition-opacity duration-1000 group-hover:opacity-80 text-8xl group-hover:text-7xl">
                {item.icon}
              </span>
            </div>
            <div className="absolute inset-0 flex justify-center h-[230px] items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="text-2xl text-white p-4 bg-[#b58917] rounded-full">
                <FaArrowRight />
              </div>
            </div>
            <div className="h-[70px] items-center flex justify-center">
              <h1 className="text-center font-semibold">{item.title}</h1>
            </div>
          </Link>
        ))}
        <Link
          to={"/"}
          className="relative col-span-12 md:col-span-8 rounded-lg lg:col-span-3 h-[300px] w-full border-2 text-white px-5"
          style={{
            backgroundImage: `url(${moreBgImg})`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="relative flex flex-col justify-center items-center h-full w-full">
            <h1 className="text-xl text-center font-semibold mb-5">
              Didn't find the category you're looking for?
            </h1>
            <button className="flex w-fit justify-around bg-[#ffb300] hover:bg-[#d3ad4b] gap-x-4 py-2 px-4 items-center rounded-lg">
              View all <FaArrowRight />
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
