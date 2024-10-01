import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundUp, IoIosArrowRoundBack } from "react-icons/io";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { TiTick } from "react-icons/ti";
import AccountDetails from "./Settings/AccountDetails";
import ProfileImg from "./Settings/ProfileImg";
import SocialLinks from "./Settings/SocialLinks";
import ChangePassword from "./Settings/ChangePassword";
import EmailChange from "./Settings/EmailChange";

export default function Settings() {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const faqRefs = useRef([]);
  const [phone, setPhone] = useState("");

  const sections = [
    { title: "Account Details", content: <AccountDetails /> },
    {
      title: "Profile Image",
      content: <ProfileImg/>,
    },
    {
      title: "Social Links",
      content: <SocialLinks/>,
    },
    {
      title: "Change Password",
      content: <ChangePassword/>,
    },
    {
      title: "Change Email",
      content: <EmailChange/>,
    },
  ];

  const toggleAccordion = (index) => {
    const newIndex = openIndex === index ? null : index;
    setOpenIndex(newIndex);
  };

  // Scroll to the opened accordion
  useEffect(() => {
    if (openIndex !== null && faqRefs.current[openIndex]) {
      faqRefs.current[openIndex].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [openIndex]);

  return (
    <div className="py-10">
      <div className="flex justify-between w-full items-center mb-20">
        <h1 className="md:text-4xl text-3xl font-semibold text-gray-700">
          Settings
        </h1>
        <div className=" bg-[#537cd9] font-semibold text-lg text-white rounded">
          <Link to={"/panel/package/"}>
            <button className="py-3 px-6">By the Package</button>
          </Link>
        </div>
      </div>

      <div className="gap-y-8 pb-8">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (faqRefs.current[index] = el)}
            className="bg-white mb-8 shadow-lg rounded-lg tracking-wider leading-6"
          >
            <button
              onClick={() => toggleAccordion(index)}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className="accordion-header py-5 w-full flex justify-between gap-x-4 items-center text-left text-gray-700 px-10 text-xl"
            >
              <div>
                <h1 className="font-bold text-2xl">{section.title}</h1>
              </div>
              <div>
                {openIndex === index || hoverIndex === index ? (
                  <div
                    className={`text-3xl border-2 rounded-full p-2 transition-all duration-500 ${
                      openIndex === index
                        ? "bg-yellow-500 border-yellow-500"
                        : "border-yellow-500 text-yellow-500"
                    }`}
                  >
                    <IoIosArrowRoundUp />
                  </div>
                ) : (
                  <div className="text-3xl border-2 rounded-full p-2 transition-all duration-500">
                    <IoIosArrowRoundBack />
                  </div>
                )}
              </div>
            </button>

            <div
              className={`accordion-content transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-full" : "max-h-0"
              }`}
            >
              {openIndex === index && (
                // <div className="py-10 px-10 border-t-2 h-full text-gray-400 transition-all duration-500">
                //   {/* Add the form directly */}
                //   <form className="mt-4 h-full">
                //     <div className="mb-7">
                //       <label
                //         htmlFor="name"
                //         className="block text-base font-semibold  text-gray-700 mb-3"
                //       >
                //         Display Name
                //       </label>
                //       <input
                //         type="text"
                //         className="w-[100%] md:w-[50%] h-[50px] border-2 rounded-lg px-3 text-black focus:outline-none focus:ring-0"
                //         placeholder="Enter your name"
                //       />
                //     </div>
                //     <div className="mb-7">
                //       <label
                //         htmlFor="name"
                //         className="block text-base font-semibold  text-gray-700 mb-3 "
                //       >
                //         Phone Number
                //       </label>

                //       <PhoneInput
                //         country={"mv"}
                //         value={phone}
                //         onChange={setPhone}
                //         className="w-full md:w-1/2 h-[50px]  text-black bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
                //         inputStyle={{
                //           height: "100%",
                //           width: "100%",
                //           border: "1px solid #dee2e6",
                //         }}
                //         buttonStyle={{
                //           border: "none",
                //           backgroundColor: "transparent",
                //         }}
                //         dropdownStyle={{
                //           maxHeight: "200px",
                //           overflowY: "scroll",
                //         }}
                //       />
                //       <div className="mt-4">
                //         <div className="flex items-center mb-2">
                //           <input
                //             type="checkbox"
                //             name="whatsapp"
                //             id="whatsapp"
                //             className="mr-2  w-4 h-4 "
                //           />
                //           <label
                //             htmlFor="whatsapp"
                //             className=" text-base font-semibold text-gray-700"
                //           >
                //             Whatsapp
                //           </label>
                //         </div>
                //         <div className="flex items-center">
                //           <input
                //             type="checkbox"
                //             name="viber"
                //             id="viber"
                //             className="mr-2 w-4 h-4"
                //           />
                //           <label
                //             htmlFor="viber"
                //             className="text-base font-semibold text-gray-700"
                //           >
                //             Viber
                //           </label>
                //         </div>
                //       </div>
                //     </div>
                //     <div className="mb-7">
                //       <label
                //         htmlFor="description"
                //         className="block text-base font-semibold  text-gray-700 mb-3"
                //       >
                //         Profile Description
                //       </label>
                //       <textarea
                //         name="description"
                //         id=""
                //         placeholder="Write something about yourself"
                //         rows={6}
                //         className="border-gray-300 border-2 focus:outline-none focus:ring-0 rounded-lg w-full p-3 text-black"
                //       ></textarea>
                //     </div>
                //     <div className="mb-7">
                //       <label
                //         htmlFor="name"
                //         className="block text-base font-semibold  text-gray-700 mb-3"
                //       >
                //         Address
                //       </label>
                //       <input
                //         type="text"
                //         className="w-full h-[50px] border-2 rounded-lg px-3 focus:outline-none focus:ring-0 text-black"
                //         placeholder="Enter your address"
                //       />
                //     </div>
                //     <div className="flex justify-end">
                //       <div className="bg-[#537cd9] w-fit font-semibold text-lg text-white rounded">
                //         <button
                //           type="submit"
                //           className="py-3 px-6 flex gap-x-4 items-center"
                //         >
                //           Send Message <TiTick />
                //         </button>
                //       </div>
                //     </div>
                //   </form>
                // </div>
                <>{section.content}</>
              )}
            </div>
          </div>
          // </div>
        ))}
      </div>
    </div>
  );
}
