import React from "react";
import userBg from "../../assets/images/user_banner.jpg";
import { BiUser } from "react-icons/bi";

export default function UserLanding() {
  return (
    <div>
      <div
        className="relative xl:px-48 lg:px-20 md:px-12 px-10"
        style={{
          backgroundImage: `url(${userBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-25 h-full"></div>
      </div>
      <div className="relative  top-[-85px]" >
        <div className="flex justify-center  ">
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
            className="w-[150px] h-[150px] border-2 rounded-full border-[#537cd9]"
          />
        </div>
        <div className=" mt-10 ">
          <h1 className="text-4xl font-semibold text-center">User Name</h1>
          <div className="flex gap-x-2 justify-center items-center mt-2">
            <BiUser className="p-1 rounded-full text-3xl bg-yellow-500"/>
            <h3>Member since 1 week</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
