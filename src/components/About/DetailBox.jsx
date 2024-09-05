import React from "react";

export default function DetailBox() {
  const detail = [
    {
      count: 2,
      letter: "M",
      title: "Blacklisted",
    },
    {
      count: 1,
      letter: "K",
      title: "Whitelisted",
    },
    {
      count: 1000,
      letter: "+",
      title: "Registered users",
    },
    {
      count: 5,
      letter: "+",
      title: "Awards",
    },
  ];
  return (
    <div className="bg-[#ecebeb] py-8 shadow-md">
      <div className="grid grid-cols-12 gap-y-10 items-center">
        {/* Step 1 */}
        {detail?.map((item) => (
          <div
            className="col-span-12 lg:col-span-3 flex justify-center px-10 "
            key={item.title}
          >
            <div className="max-w-[300px] text-center">
              <div className="flex items-center gap-x-1 justify-center">
                <h1
                  className="text-4xl font-semibold text-blue-500"
                  style={{ fontFamily: "'Monoton', sans-serif" }}
                >
                  {item.count}
                </h1>
                <h5 className="text-sm">{item.letter}</h5>
              </div>
              <h6 className="mt-2 text-gray-500">{item.title}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
