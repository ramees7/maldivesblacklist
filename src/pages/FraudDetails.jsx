import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { TbBulb } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import FraudTypes from "../components/Details.jsx/FraudTypes";
import ClassifiedAds from "../components/Details.jsx/ClassifiedAds";
import {
  discoverDataContext,
  fraudListsContext,
  selectedTypeContext,
} from "../Context/ContextShares";

export default function FraudDetails() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationPath, setLocationPath] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [filteredFraudData, setFilteredFraudData] = useState([]);
  const { fraudLists, setFraudLists } = useContext(fraudListsContext);

  const { discoverData, setDiscoverData } = useContext(discoverDataContext);
  const { selectedType, setSelectedType } = useContext(selectedTypeContext);

  const location = useLocation();
  useEffect(() => {
    setLocationPath(location.pathname.slice(5));
  }, []);

  useEffect(() => {
    if (fraudLists) {
      setFilteredData(fraudLists?.filter((item) => item.link === locationPath));
    }
  }, [fraudLists]);

  useEffect(() => {
    if (filteredData.length > 0) {
      // Assuming filteredData contains an array and you want to match titles
      const filtered = discoverData.filter((item) =>
        filteredData.some((fd) => fd.title === item.typeOfFraud)
      );
      setFilteredFraudData(filtered);
    } else {
      setFilteredFraudData([]);
    }
  }, [filteredData]);

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleToTop();
  }, []);


  return (
    <div>
      <div className="xl:px-48 lg:px-20 md:px-12 px-10 bg-[#f2f2f2] py-6">
        <div className=" flex items-center gap-x-2 flex-wrap  border-0 ">
          <Link to={"/"}>
            <h2 className="text-black hover:text-yellow-500 hover:cursor-pointer">
              Home
            </h2>
          </Link>
          <IoIosArrowForward className="text-yellow-500" />
          <Link to={"/ads/all/"}>
            <h2 className="text-black hover:text-yellow-500 hover:cursor-pointer">
              Search Results
            </h2>
          </Link>

          {selectedType !== "Any" && (
            <>
              <IoIosArrowForward className="text-yellow-500" />
              <h2 className="text-gray-500">{selectedType}</h2>
            </>
          )}
        </div>
      </div>
      <div className="xl:px-48 lg:px-20 md:px-12 px-10 bg-[#d5e3ee] py-6 ">
        <div className="flex bg-white items-center p-3 rounded-lg">
          <TbBulb className="text-4xl bg-[#d5e3ee] p-2 rounded-lg" />
          <input
            type="text"
            placeholder="I'm looking for..."
            className="w-full px-4 py-2 placeholder-black outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="xl:px-48 lg:px-20 md:px-12 px-10 bg-[#f2f2f2] pt-20">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-3 hidden lg:block">
            <FraudTypes data={filteredFraudData} allData={discoverData} />
          </div>
          <div className="lg:col-span-9 col-span-12">
            <ClassifiedAds allData={discoverData} />
            {/* <ClassifiedAds data={filteredFraudData} allData={discoverData} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
