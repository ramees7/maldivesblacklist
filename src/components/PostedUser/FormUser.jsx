import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function FormUser() {
  return (
    <div className="bg-white md:px-20 px-10 rounded-lg">
      <h1 className="text-2xl text-center py-5 font-semibold">
        Send a message
      </h1>
      <div className="">
        <form className="w-full mx-auto">
          <textarea
            id="message"
            rows="7"
            className="block p-2.5 w-full text-base  rounded-lg border bg-[#f2f2f2]"
            placeholder="Write your message here..."
          ></textarea>
          <div className="flex justify-center py-5">
            <div className=" bg-[#537cd9] w-fit font-semibold text-lg text-white rounded hidden lg:block">
              <Link to={"/report/"}>
                <button className="py-3 xl:px-6 lg:px-3 flex gap-x-4 items-center">
                  Send a Message <FaArrowRightLong />
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
