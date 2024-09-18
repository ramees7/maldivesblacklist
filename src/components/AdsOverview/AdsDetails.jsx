import React, { useContext } from "react";
import { selectedFraudDetailContext } from "../../Context/ContextShares";
import { IoEyeOutline, IoPrintOutline } from "react-icons/io5";
import { CiClock1, CiHeart } from "react-icons/ci";
import { GoAlertFill } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoIosChatboxes, IoIosGitCompare } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { PiWarningDiamond } from "react-icons/pi";

export default function AdsDetails() {
  const { selectedFraudDetail, setSelectedFraudDetail } = useContext(
    selectedFraudDetailContext
  );
  return (
    <div>
      <div className="grid grid-cols-12 gap-5 py-8 ">
        <div className="md:col-span-8 col-span-12 flex flex-col justify-between bg-white shadow-md p-8 rounded-lg">
          <div className="">
            <div className="flex justify-between md:pe-8 items-center pb-8">
              <h3 className="text-gray-500 text-md flex items-center gap-x-2">
                <CiClock1 />5 days ago
              </h3>
              <h3 className="text-gray-500 text-md flex items-center gap-x-2">
                <IoEyeOutline />
                10 views
              </h3>
            </div>
            <div className="">
              <h2 className="md:text-3xl text-2xl font-semibold pb-8">
                Freelance work online through Amazon platform
              </h2>
              <h1 className="md:text-xl text-lg border-blue-500 py-1 px-3 rounded-lg border-2 w-fit mb-8">
                E-com
              </h1>
              <h2 className="text-2xl font-semibold text-gray-700 pb-5">
                Description
              </h2>
              <h2 className="text-lg  text-gray-700 flex gap-x-2 items-center pb-5">
                <GoAlertFill className="text-yellow-500" /> FRAUD ALERT{" "}
              </h2>
              <h2 className="text-md text-gray-700 pb-5 underline">
                {" "}
                Freelance work online through Amazon platform Fraud
              </h2>
              <h2 className="text-md text-gray-700 pb-5">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                aperiam molestiae in optio aliquam omnis, saepe atque cum odit
                nobis consectetur iste cupiditate perferendis odio fuga, autem
                nam. Obcaecati, dolorem?
              </h2>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 col-span-12 ">
          <div className="bg-white shadow-md p-8 rounded-lg mb-10">
            <div className="grid grid-cols-7 ">
              <div className="col-span-2 flex justify-center">
                <AiOutlineUser className="text-5xl text-[#f2f2f2] p-2 rounded-full bg-[#d5e3ee] " />
              </div>
              <div className="col-span-5 flex justify-center">
                <div>
                  <h1 className="text-xl font-semibold mb-2">
                    Posted User Name
                  </h1>
                  <h3 className="mb-2">Member since: 11 months</h3>
                  <Link
                    to={"/"}
                    className="underline text-blue-500 font-semibold"
                  >
                    See all ads
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-x-4 text-white pt-20">
              <button className="py-3 w-[42%] bg-[#537cd9] rounded-md flex items-center gap-x-2 justify-center">
                <IoIosChatboxes /> Chat
              </button>
              <button className="py-3 w-[42%] bg-[#537cd9] rounded-md flex items-center gap-x-2 justify-center">
                <MdEmail /> E-mail
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md p-8 rounded-lg mb-8">
            <div className="flex gap-x-4 text-2xl justify-center">
              <div className="border-2 rounded-full p-3 hover:text-[#537cd9] hover:border-[#537cd9]">
                <CiHeart />
              </div>
              <div className="border-2 rounded-full p-3  hover:text-[#537cd9] hover:border-[#537cd9]">
                <IoIosGitCompare />
              </div>
              <div className="border-2 rounded-full p-3  hover:text-[#537cd9] hover:border-[#537cd9]">
                <IoPrintOutline />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-3 text-red-600 justify-center text-xl">
            <PiWarningDiamond />
            <span>Report abuse</span>
          </div>
        </div>
      </div>
    </div>
  );
}
