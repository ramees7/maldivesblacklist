import React from "react";
import { TbMessage2Question } from "react-icons/tb";
import { PiNotepad } from "react-icons/pi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { BsArrowDown, BsArrowRight } from "react-icons/bs"; // Importing the arrow icon

export default function HowWorks() {
  return (
    <div className="pb-16">
      <h1 className="text-4xl font-semibold text-center">How It Works?</h1>
      <div className="grid grid-cols-11 pt-12 gap-y-10 items-center">
        {/* Step 1 */}
        <div className="col-span-11 lg:col-span-3 flex justify-center px-10 ">
          <div className="max-w-[300px] text-center">
            <TbMessage2Question className="text-5xl mx-auto" />
            <h1 className="mt-4 text-2xl font-semibold">
              Tell us what happened
            </h1>
            <h6 className="mt-2 text-gray-500">
              Report a scam, a company, or an unwanted call.
            </h6>
          </div>
        </div>

        {/* Arrow 1 (between Step 1 and Step 2) */}
        <div className="hidden lg:flex col-span-1 justify-center">
          <BsArrowRight className="text-4xl text-gray-400" />
        </div>
        <div className="flex lg:hidden col-span-12 justify-center">
          <BsArrowDown className="text-4xl text-gray-400" />
        </div>

        {/* Step 2 */}
        <div className="col-span-11 lg:col-span-3 flex justify-center px-10">
          <div className="max-w-[300px] text-center">
            <PiNotepad className="text-5xl mx-auto" />
            <h1 className="mt-4 text-2xl font-semibold">Get your next steps</h1>
            <h6 className="mt-2 text-gray-500">
              Upload your evidences, screenshots, NIDs.
            </h6>
          </div>
        </div>

        {/* Arrow 2 (between Step 2 and Step 3) */}
        <div className="hidden lg:flex col-span-1 justify-center">
          <BsArrowRight className="text-4xl text-gray-400" />
        </div>
        <div className="flex lg:hidden col-span-12 justify-center">
          <BsArrowDown className="text-4xl text-gray-400" />
        </div>

        {/* Step 3 */}
        <div className="col-span-11 lg:col-span-3 flex justify-center px-10">
          <div className="max-w-[300px] text-center">
            <IoShieldCheckmarkOutline className="text-5xl mx-auto" />
            <h1 className="mt-4 text-2xl font-semibold">Help stop fraud</h1>
            <h6 className="mt-2 text-gray-500">
              We use and share reports with our law enforcement partners to help
              with investigations.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
