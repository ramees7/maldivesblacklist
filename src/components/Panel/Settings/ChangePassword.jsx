import React from "react";
import { TiTick } from "react-icons/ti";

export default function ChangePassword() {
  return (
    <div className="p-10 border-t-2">
      <form className=" grid grid-cols-2 gap-8">
        {/* Facebook */}
        <div>
          <label
            htmlFor="fb"
            className="text-base font-semibold  text-gray-700"
          >
            Old Password
          </label>
          <div className="flex items-center col-span-2 lg:col-span-1 mt-3 bg-white p-3 border-2 border-gray-300 rounded-lg">
            <input
              type="url"
              placeholder="Enter your old password"
              id="fb"
              className="w-full px-4  outline-none "
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="fb"
            className="text-base font-semibold  text-gray-700"
          >
            New Password
          </label>
          <div className="flex items-center col-span-2 lg:col-span-1 mt-3 bg-white p-3 border-2 border-gray-300 rounded-lg">
            <input
              type="url"
              placeholder="Enter your new password"
              id="fb"
              className="w-full px-4  outline-none "
            />
          </div>
        </div>
        <div className="flex justify-end col-span-2 pt-10 border-t-[1px]">
          <div className="bg-[#537cd9] w-fit font-semibold text-lg text-white rounded">
            <button
              type="submit"
              className="py-3 px-6 flex gap-x-4 items-center"
            >
              Change Password <TiTick />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
