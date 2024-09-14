import { GoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { CiAt, CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiSmartphone } from "react-icons/fi";

export default function Register() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleCheckboxChange =()=>{
    if(rememberMe===false){
      setRememberMe(true)
    }else{
      setRememberMe(false)
    }
  }
  return (
    <div className="">
      <form className="space-y-5 ">
        <div>
          <div className="border-2 flex p-3 rounded-md gap-x-2">
            <CiUser className="text-2xl text-black" />
            <input
              type="name"
              id="name"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              className="focus:outline-none bg-[#f2f2f2] w-full placeholder-black"
              placeholder="Username*"
              required
            />
          </div>
        </div>
        <div>
          <div className="border-2 flex p-3 rounded-md gap-x-2">
            <CiAt className="text-2xl text-black" />
            <input
              type="email"
              id="email"
              name="email"
              // value={formData.name}
              // onChange={handleChange}
              className="focus:outline-none bg-[#f2f2f2] w-full placeholder-black"
              placeholder="Email Address*"
              required
            />
          </div>
        </div>
        <div>
          <div className="border-2 flex p-3 rounded-md gap-x-2">
            <FiSmartphone className="text-2xl text-black" />
            <input
              type="number"
              id="phone"
              name="phone"
              // value={formData.name}
              // onChange={handleChange}
              className="focus:outline-none bg-[#f2f2f2] w-full placeholder-black"
              placeholder="Phone Number*"
              required
            />
          </div>
        </div>
        <div>
          <div className="border-2 flex p-3 rounded-md gap-x-2">
            <RiLockPasswordLine className="text-2xl text-black" />
            <input
              type="password"
              id="password"
              name="password"
              // value={formData.name}
              // onChange={handleChange}
              className="focus:outline-none bg-[#f2f2f2] w-full placeholder-black"
              placeholder="Password*"
              required
            />
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={handleCheckboxChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 placeholder-black"
            />
            <label htmlFor="rememberMe" className="text-gray-700 md:text-lg text-md">
              I accept the
              <span className="text-yellow-500"> Privacy Policy</span>
            </label>
          </div>
        </div>
        <div>
          <button className="w-full py-4 rounded-lg text-white text-xl text-center bg-[#537cd9]">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
