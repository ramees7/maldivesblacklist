

import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundUp } from "react-icons/io";

export default function WhatYouCanDo({whatYouCanDo}) {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const faqRefs = useRef([]);

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
    <div>
      <div className="gap-y-8">
        <h2 className="text-4xl leading-9 font-bold mb-16 text-[#000]">
        (f) What you can do
        </h2>

        <div>
          {whatYouCanDo.map((faq, index) => (
            <div
              key={index}
              ref={(el) => (faqRefs.current[index] = el)}
              className={`bg-white  shadow-lg rounded-lg tracking-wider leading-6 ${index+1 === whatYouCanDo.length ?"mb-0" :"mb-8" }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                className="accordion-header py-5 w-full gap-x-4 flex justify-between items-center text-left text-700 px-10 text-xl"
              >
                <div>
                  <strong>Q.</strong> {faq.question}
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
                className={`accordion-content py-10 px-10 border-t-2 ${
                  openIndex === index ? "open cursor-pointer" : "hidden"
                }`}
              >
                {openIndex === index && (
                  <div className="text-gray-400">
                    <h1>{faq.answer}</h1>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
