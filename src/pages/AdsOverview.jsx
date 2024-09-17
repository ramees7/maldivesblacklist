import React, { useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { selectedTypeContext } from "../Context/ContextShares";

export default function AdsOverview() {
  const { selectedType, setSelectedType } = useContext(selectedTypeContext);

  return (
    <div className="xl:px-48 lg:px-20 md:px-12 px-10 bg-[#f2f2f2] pb-20">
      <div className=" flex items-center gap-x-2  border-0 py-6">
        <Link to={"/"}>
          <h2 className="text-black hover:text-yellow-500 hover:cursor-pointer">
            Home
          </h2>
        </Link>
        <IoIosArrowForward className="text-yellow-500" />
        <Link to={"/ads/all"}>
          <h2 className="text-black hover:text-yellow-500 hover:cursor-pointer">
            Search Results
          </h2>
        </Link>
        {selectedType !== "Any" && (
          <>
            <IoIosArrowForward className="text-yellow-500" />
            <Link to={"/ads/all"}>
              <h2 className="text-black hover:text-yellow-500 hover:cursor-pointer">
                {selectedType}
              </h2>
            </Link>
          </>
        )}
        {/* use context to find the type */}
      </div>
    </div>
  );
}
