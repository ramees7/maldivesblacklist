import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";

export default function Checkout() {
  const [openCode, setOpenCode] = useState(false);
  const [phone, setPhone] = useState("");

  const handleCodeOpen = () => {
    if (openCode === true) {
      setOpenCode(false);
    } else {
      setOpenCode(true);
    }
  };
  return (
    <div>
      <div className="py-10 md:text-4xl text-3xl font-bold xl:px-48 lg:px-20 md:px-12 px-10">
        <h1>Checkout</h1>
      </div>
      <div className="py-20 bg-[#f2f2f2] xl:px-48 lg:px-20 md:px-12 px-10 ">
        <div className="max-w-[700px] mx-auto">
          <h1 className="mb-4 text-lg font-semibold">
            Have a discount code?{" "}
            <button
              className="border-0  underline text-[#537cd9]"
              onClick={handleCodeOpen}
            >
              Click here to enter your code
            </button>
          </h1>
          {openCode && (
            <div className="bg-white mt-8 rounded-lg">
              <form className="p-8 flex gap-x-4">
                <input
                  type="text"
                  className=" w-[600px] h-[50px] border-2 rounded-lg px-3 text-black focus:outline-none focus:ring-0"
                  placeholder="Enter your name"
                />
                <div className="bg-[#537cd9] w-fit h-[50px] font-semibold text-lg text-white rounded">
                  <button
                    type="submit"
                    className="h-full px-6 flex gap-x-4 items-center"
                  >
                    Apply
                  </button>
                </div>
              </form>
            </div>
          )}
          <div className="bg-white p-8 mt-8  rounded-lg">
            <form className=" grid grid-cols-2 gap-x-8 gap-y-4">
              {/* Facebook */}
              <div className="col-span-2 lg:col-span-1">
                <label htmlFor="firstname" className="font-semibold">
                  First name *
                </label>
                <div className="flex items-center  mt-3 bg-white p-3 border-2 border-gray-300 rounded-lg">
                  <input
                    type="text"
                    id="fb"
                    className="w-full px-4  outline-none "
                  />
                </div>
              </div>

              {/* Twitter */}
              <div className="col-span-2 lg:col-span-1">
                <label htmlFor="lastname" className="font-semibold">
                  Last name
                </label>
                <div className="flex items-center  mt-3 bg-white p-3 border-2 border-gray-300 rounded-lg">
                  <input
                    type="text"
                    id="lastname"
                    className="w-full px-4  outline-none "
                  />
                </div>
              </div>

              {/* Instagram */}

              <div className="col-span-2 lg:col-span-1">
                <label htmlFor="companyname" className="font-semibold">
                  Company name (optional)
                </label>
                <div className="flex items-center  mt-3 bg-white p-3 border-2 border-gray-300 rounded-lg">
                  <input
                    type="text"
                    id="companyname"
                    className="w-full px-4  outline-none "
                  />
                </div>
              </div>

              {/* YouTube */}
              <div className="col-span-2 lg:col-span-1">
                <label htmlFor="country" className="font-semibold">
                  Country / Region
                </label>
                <div className="flex items-center  mt-3 bg-white p-3 border-2 border-gray-300 rounded-lg">
                  <input
                    type="text"
                    id="country"
                    className="w-full px-4  outline-none "
                  />
                </div>
              </div>

              {/* LinkedIn */}

              <div className="col-span-2 lg:col-span-1">
                <label htmlFor="streetaddress" className="font-semibold">
                  Street address
                </label>
                <div className="flex items-center  mt-3 bg-white p-3 border-2 border-gray-300 rounded-lg">
                  <input
                    type="text"
                    placeholder="House number and street name"
                    id="streetaddress"
                    className="w-full px-4  outline-none "
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <label htmlFor="apartment" className="font-semibold">
                  (optional)
                </label>
                <br />
                <div className="flex items-center  mt-3 bg-white p-3 border-2 border-gray-300 rounded-lg">
                  <input
                    type="text"
                    placeholder="Apartment,suit,unit,etc(optional)"
                    id="apartment"
                    className="w-full px-4  outline-none "
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <label htmlFor="town" className="font-semibold">
                  Town / City
                </label>
                <div className="flex items-center  mt-3 bg-white p-3 border-2 border-gray-300 rounded-lg">
                  <input
                    type="text"
                    id="town"
                    className="w-full px-4  outline-none "
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <label htmlFor="district" className="font-semibold">
                  District
                </label>
                <div className="flex items-center  mt-3 bg-white p-3 border-2 border-gray-300 rounded-lg">
                  <input
                    type="text"
                    id="district"
                    className="w-full px-4  outline-none "
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <label htmlFor="postcode" className="font-semibold">
                  Postcode / ZIP (optional)
                </label>
                <div className="flex items-center  mt-3 bg-white p-3 border-2 border-gray-300 rounded-lg">
                  <input
                    type="text"
                    id="postcode"
                    className="w-full px-4  outline-none "
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <label htmlFor="phone" className="font-semibold">
                  Phone
                </label>
                <div className="flex items-center  mt-3 bg-white border-gray-300 rounded-lg">
                  <PhoneInput
                    country={"mv"}
                    value={phone}
                    onChange={setPhone}
                    className="w-full h-[50px]  text-black bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
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
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <label htmlFor="email" className="font-semibold">
                  Email address
                </label>
                <div className="flex items-center  mt-3 bg-white p-3 border-2 border-gray-300 rounded-lg">
                  <input
                    type="text"
                    id="email"
                    className="w-full px-4  outline-none "
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
