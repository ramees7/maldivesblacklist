import React from "react";
import { Link } from "react-router-dom";
import noMessage from '../../assets/images/no-message.png'

export default function Messages() {
  return (
    <div className="py-10">
      <div className="flex justify-between w-full items-center mb-20">
        <h1 className="md:text-4xl text-3xl font-semibold  text-gray-700">
          Messages
        </h1>
        <div className=" bg-[#537cd9] font-semibold text-lg text-white rounded ">
          <Link to={"/package/"}>
            <button className="py-3 px-6 ">By the Package</button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-[500px] flex justify-center items-center flex-col gap-y-6 rounded-lg">
        <h1 className="text-2xl font-semibold">You don't have any messages yet</h1>
        <img
          src={noMessage}
          alt="openbox not found"
          className="w-[100px] h-[100px]"
        />
      </div>
    </div>
  );
}
