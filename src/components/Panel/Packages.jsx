import React, { useContext, useState } from "react";
import { packageListContext } from "../../Context/ContextShares";
import { FaArrowRightLong } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Packages() {
  const { packageListData, setPackageListData } =
    useContext(packageListContext);
    const [choosed,setChoosed]=useState("")

  const choosePackage = (index) => {
    const updatedPackages = packageListData.map((item, i) => {
      setChoosed(index)
      return { ...item, isChoosed: i === index };
    });
    setPackageListData(updatedPackages);
  };

  return (
    <div>
      <div className="py-10 md:text-4xl text-3xl font-bold xl:px-48 lg:px-20 md:px-12 px-10">
        <h1>Purchase New Package</h1>
      </div>
      <div className="py-20 bg-[#f2f2f2] xl:px-48 lg:px-20 md:px-12 px-10 grid grid-cols-12 gap-5">
        {packageListData?.map((item, index) => (
          <div
            key={index}
            className={`lg:col-span-4 md:col-span-6 col-span-12 h-full min-h-[500px] rounded-lg bg-white shadow-lg ${
              item.mostPopular && "border-[#537cd9] border-2"
            }`}
          >
            <div
              className={`${
                item.mostPopular ? "bg-[#537cd9]" : "bg-[#d5e3ee]"
              } p-6 rounded-t-lg flex justify-between h-[100px] items-center`}
            >
              <h1
                className={`text-2xl font-semibold ${
                  item.mostPopular && "text-white"
                }`}
              >
                {item.title}
              </h1>
              {item.mostPopular && (
                <div className="items-center flex px-5 py-2 rounded-md bg-white">
                  <h1 className="text-sm">Most Popular</h1>
                </div>
              )}
            </div>
            <div className="p-6 space-y-8 pb-10">
              <h1 className="text-4xl font-bold mt-5">ރ{item.price}</h1>
              <div className="bg-[#537cd9] w-fit font-semibold text-lg text-white rounded">
                <button
                  type="button"
                  className="py-3 px-6 flex gap-x-4 items-center"
                  onClick={() => choosePackage(index)}
                >
                  {item.isChoosed ? (
                    <div className="flex items-center gap-x-3">
                      Active <TiTick />
                    </div>
                  ) : (
                    "Choose this package"
                  )}
                </button>
              </div>

              <div className="space-y-4">
                {item.informations.map((info, ind) => (
                  <div key={ind} className="flex gap-x-3 items-center">
                    <div className="bg-[#f2f2f2] flex justify-center items-center h-[25px] w-[25px] rounded-full">
                      <TiTick />
                    </div>
                    <h1 className="text-base">{info}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        {
          choosed &&
          <div className="flex justify-end col-span-12 mt-10">
          <Link
            to={"/checkout/"}
            className="bg-[#537cd9] w-fit font-semibold text-lg text-white rounded"
          >
            <button
              type="submit"
              className="py-3 px-6 flex gap-x-4 items-center"
            >
              Next <FaArrowRightLong />
            </button>
          </Link>
        </div>
        }
      </div>
    </div>
  );
}
