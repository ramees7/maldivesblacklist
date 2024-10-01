import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import PhoneInput from "react-phone-input-2";

export default function AccountDetails() {
    const [phone, setPhone] = useState("");

  return (
    <div className="p-10 border-t-2 h-full text-gray-400 transition-all duration-500">
      {/* Add the form directly */}
      <form className="mt-4 h-full">
        <div className="mb-7">
          <label
            htmlFor="name"
            className="block text-base font-semibold  text-gray-700 mb-3"
          >
            Display Name
          </label>
          <input
            type="text"
            className="w-[100%] md:w-[50%] h-[50px] border-2 rounded-lg px-3 text-black focus:outline-none focus:ring-0"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-7">
          <label
            htmlFor="name"
            className="block text-base font-semibold  text-gray-700 mb-3 "
          >
            Phone Number
          </label>

          <PhoneInput
            country={"mv"}
            value={phone}
            onChange={setPhone}
            className="w-full md:w-1/2 h-[50px]  text-black bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
            inputStyle={{
              height: "100%",
              width: "100%",
              border: "1px solid #dee2e6",
            }}
            buttonStyle={{
              border: "none",
              backgroundColor: "transparent",
            }}
            dropdownStyle={{
              maxHeight: "200px",
              overflowY: "scroll",
            }}
          />
          <div className="mt-4">
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                name="whatsapp"
                id="whatsapp"
                className="mr-2  w-4 h-4 "
              />
              <label
                htmlFor="whatsapp"
                className=" text-base font-semibold text-gray-700"
              >
                Whatsapp
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="viber"
                id="viber"
                className="mr-2 w-4 h-4"
              />
              <label
                htmlFor="viber"
                className="text-base font-semibold text-gray-700"
              >
                Viber
              </label>
            </div>
          </div>
        </div>
        <div className="mb-7">
          <label
            htmlFor="description"
            className="block text-base font-semibold  text-gray-700 mb-3"
          >
            Profile Description
          </label>
          <textarea
            name="description"
            id=""
            placeholder="Write something about yourself"
            rows={6}
            className="border-gray-300 border-2 focus:outline-none focus:ring-0 rounded-lg w-full p-3 text-black"
          ></textarea>
        </div>
        <div className="mb-7">
          <label
            htmlFor="name"
            className="block text-base font-semibold  text-gray-700 mb-3"
          >
            Address
          </label>
          <input
            type="text"
            className="w-full h-[50px] border-2 rounded-lg px-3 focus:outline-none focus:ring-0 text-black"
            placeholder="Enter your address"
          />
        </div>
        <div className="flex justify-end">
          <div className="bg-[#537cd9] w-fit font-semibold text-lg text-white rounded">
            <button
              type="submit"
              className="py-3 px-6 flex gap-x-4 items-center"
            >
              Send Message <TiTick />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
