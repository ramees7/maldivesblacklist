import { GoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { CiAt } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";

export default function Login() {
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <div className="">
      <form className="space-y-5 ">
        <div>
          <div className="border-2 flex p-2 rounded-md gap-x-2">
            <CiAt className="text-2xl text-black" />
            <input
              type="email"
              id="email"
              name="email"
              // value={formData.name}
              // onChange={handleChange}
              className="focus:outline-none bg-[#f2f2f2] w-full"
              placeholder="Email Address"
              required
            />
          </div>
        </div>
        <div>
          <div className="border-2 flex p-2 rounded-md gap-x-2">
            <RiLockPasswordLine className="text-2xl text-black" />
            <input
              type="password"
              id="password"
              name="password"
              // value={formData.name}
              // onChange={handleChange}
              className="focus:outline-none bg-[#f2f2f2] w-full"
              placeholder="Password"
              required
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              // onChange={handleCheckboxChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="rememberMe" className="text-gray-700 text-sm">
              Remember Me
            </label>
          </div>
          <div>
            <h2 className="text-md text-yellow-500">Forgot password?</h2>
          </div>
        </div>
        <div>
          <button className="w-full py-4 rounded-lg text-white text-xl text-center bg-[#537cd9]">
            Login
          </button>
        </div>
      </form>

      {/* <div className="w=[100%]">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(credentialResponse?.credential);
            console.log(decoded);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div> */}
    </div>
  );
}
