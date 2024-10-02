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
      content: <ProfileImg />,
    },
    {
      title: "Social Links",
      content: <SocialLinks />,
    },
    {
      title: "Change Password",
      content: <ChangePassword />,
    },
    {
      title: "Change Email",
      content: <EmailChange />,
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
              {openIndex === index && <>{section.content}</>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
