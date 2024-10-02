import React, { useState } from "react";

export default function Checkout() {
  const [openCode, setOpenCode] = useState(false);

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
            <div className="bg-white">
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
          <div className="bg-white p-8">
            <form className=" grid grid-cols-2 gap-8">
              {/* Facebook */}
              <div>
                <label htmlFor="fb">Facebook</label>
                <div className="flex items-center col-span-2 lg:col-span-1 mt-3 bg-white p-3 border-2 border-gray-300 rounded-lg">
                  <input
                    type="url"
                    placeholder="Enter the URL to your Facebook profile"
                    id="fb"
                    className="w-full px-4  outline-none "
                  />
                </div>
              </div>

              {/* Twitter */}
              <div>
                <label htmlFor="twitter">Twitter</label>
                <div className="flex items-center col-span-2 lg:col-span-1 mt-3 bg-white p-3 border-2 border-gray-300 rounded-lg">
                  <input
                    type="url"
                    placeholder="Enter the URL to your Twitter profile"
                    id="twitter"
                    className="w-full px-4  outline-none "
                  />
                </div>
              </div>

              {/* Instagram */}

              <div>
                <label htmlFor="instagram">Instagram</label>
                <div className="flex items-center col-span-2 lg:col-span-1 mt-3 bg-white p-3 border-2 border-gray-300 rounded-lg">
                  <input
                    type="url"
                    placeholder="Enter the URL to your Instagram profile"
                    id="instagram"
                    className="w-full px-4  outline-none "
                  />
                </div>
              </div>

              {/* YouTube */}
              <div>
                <label htmlFor="youtube">YouTube</label>
                <div className="flex items-center col-span-2 lg:col-span-1 mt-3 bg-white p-3 border-2 border-gray-300 rounded-lg">
                  <input
                    type="url"
                    placeholder="Enter the URL to your YouTube profile"
                    id="youtube"
                    className="w-full px-4  outline-none "
                  />
                </div>
              </div>

              {/* LinkedIn */}

              <div>
                <label htmlFor="linkedin">LinkedIn</label>
                <div className="flex items-center col-span-2 lg:col-span-1 mt-3 bg-white p-3 border-2 border-gray-300 rounded-lg">
                  <input
                    type="url"
                    placeholder="Enter the URL to your LinkedIn profile"
                    id="linkedin"
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
