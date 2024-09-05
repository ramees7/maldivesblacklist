import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

export default function ContactInfo() {
  const cards = [
    {
      title: "Visit Us",
      content:
        "E-14/X, ICT Tower (14th Floor), Agargaon, Dhaka - 1207, Bangladesh.",
      icon: <FaMapLocationDot />,
    },
    {
      title: "Call Us",
      content: "01795766338",
      icon: <FaPhoneAlt />,
    },
    {
      title: "Write to Us",
      content: "hi@bdblacklist.com",
      icon: <FaEnvelope />,
    },
  ];
  return (
    <div className=" pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-20">
          {cards?.map((item) => (
            <div className="bg-white px-8  h-[190px] shadow-md rounded-md text-center">
              <div className="relative bottom-[40px]">
                <div className="flex justify-center mb-4 ">
                  <div className="bg-blue-100 p-4 rounded-full text-4xl text-black">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold relative top-[15px] ">
                  {item.title}
                </h3>
                <p className="text-gray-600 relative top-[40px]">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
