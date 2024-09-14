import React, { useContext, useEffect, useState } from "react";
import { CiFilter, CiGrid2H, CiHeart } from "react-icons/ci";
import { IoEyeOutline, IoGridOutline } from "react-icons/io5";
import FraudTypes from "./FraudTypes";
import { IoIosGitCompare } from "react-icons/io";
import { FaArrowLeftLong, FaArrowRightLong, FaXmark } from "react-icons/fa6";
import {
  adsChangingContext,
  discoverDataContext,
  selectedTypeContext,
} from "../../Context/ContextShares";
import { useLocation, useNavigate } from "react-router-dom";

export default function ClassifiedAds({ allData, lists }) {
  const [isGridView, setIsGridView] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const { adsChanging, setAdsChanging } = useContext(adsChangingContext);
  const location = useLocation();
  const navigate = useNavigate(); // Hook to navigate programmatically
  const { selectedType, setSelectedType } = useContext(selectedTypeContext);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsGridView(true);
    }
  }, [window.innerWidth <= 768]);

  const [locationPath, setLocationPath] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [filteredFraudData, setFilteredFraudData] = useState([]);

  const { discoverData, setDiscoverData } = useContext(discoverDataContext);

  useEffect(() => {
    setLocationPath(location.pathname.slice(5));
  }, [adsChanging]);

  useEffect(() => {
    if (lists) {
      setFilteredData(lists?.filter((item) => item.link === locationPath));
    }
  }, [lists, adsChanging]);

  useEffect(() => {
    if (adsChanging) {
      setFilteredFraudData(adsChanging);
    } else {
      if (filteredData.length > 0) {
        const filtered = discoverData.filter((item) =>
          filteredData.some((fd) => fd.title === item.typeOfFraud)
        );
        setFilteredFraudData(filtered);
      } else {
        setFilteredFraudData([]);
      }
    }
  }, [filteredData, adsChanging, location]);

  const resultsCount = filteredFraudData.length;

  const handleClose = () => {
    navigate("/ads/all"); // Navigate to /ads/all
    setSelectedType(""); // Optionally clear selectedType
  };

  return (
    <div className="px-8 min-h-screen pb-20">
      <div className="flex items-center justify-between mb-6 flex-col lg:flex-row">
        <div className="lg:hidden block w-full">
          <button
            className="flex items-center text-xl justify-center bg-[#537cd9] text-white w-full py-4 mb-6 rounded-lg"
            onClick={() => setIsFilterOpen(true)}
          >
            <CiFilter />
            <span>More Filters</span>
          </button>
        </div>

        {/* Other header elements */}
        <div className="text-lg font-semibold">
          <span className="text-gray-800 text-xl">{resultsCount} Results</span>
          <span className="text-yellow-500 ml-2 text-lg">{selectedType ==="Any" ?"Classified Ads" :selectedType}</span>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center space-x-3 md:my-5 lg:my-0">
            <h1>Sort by:</h1>
            <select className="rounded px-2 h-[50px] outline-none">
              <option value="most-relevant" className="rounded-none">
                Most Relevant
              </option>
              <option value="latest">Latest</option>
            </select>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsGridView(true)}
                className={`h-[50px] px-3 rounded ${
                  isGridView ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                <IoGridOutline className="text-2xl" />
              </button>
              <button
                onClick={() => setIsGridView(false)}
                className={`h-[50px] px-3 rounded ${
                  !isGridView ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                <CiGrid2H className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-x-8 py-1 bg-[#537cd9] w-fit text-white px-4 text-md rounded-lg mb-2">
        <h2 className=" ">{selectedType ==="Any" ?"Classified Ads" :selectedType}</h2>
        {locationPath != "all" && (
          <button
            onClick={handleClose}
            className="p-1 bg-white rounded-full text-[#537cd9]"
          >
            <FaXmark />
          </button>
        )}
      </div>

      {/* Cards Layout */}
      <div
        className={
          isGridView
            ? "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10"
            : "space-y-6"
        }
      >
        {filteredFraudData?.map((item) => (
          <div
            key={item.id}
            className={`relative bg-white shadow-lg rounded-lg overflow-hidden ${
              isGridView ? "" : "flex flex-row items-start"
            }`}
            onMouseEnter={() => setHoveredCardId(item.id)} // Set hover state
            onMouseLeave={() => setHoveredCardId(null)} // Unset hover state
          >
            <div className="relative">
              <img
                src={item.images[0]}
                alt={item.title}
                className={`object-cover ${
                  isGridView ? "h-[200px] w-full" : "h-52 w-52"
                }`}
              />
              {/* Carousel only appears on hover */}
              {hoveredCardId === item.id && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
                  <Carousel images={item.images} />
                </div>
              )}
            </div>

            <div className={`p-4 ${isGridView ? "" : "flex-1"}`}>
              <div className="min-h-[80px] h-[100px] max-h-fit">
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p
                  className={`text-gray-500 ${isGridView ? "hidden" : "block"}`}
                >
                  {item.description}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between text-gray-500 text-sm border-t-2 py-3">
                <div className="flex items-center space-x-2">
                  <button className="hover:text-blue-500 hover:border-blue-500 p-2 border-2 rounded-full">
                    <IoEyeOutline />
                  </button>
                  <button className="hover:text-blue-500 hover:border-blue-500 p-2 border-2 rounded-full">
                    <IoIosGitCompare />
                  </button>
                  <button className="hover:text-blue-500 hover:border-blue-500 p-2 border-2 rounded-full">
                    <CiHeart />
                  </button>
                </div>
                <span>{item.views} Views</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Off-canvas overlay */}
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity"
            onClick={() => setIsFilterOpen(false)} // Close the off-canvas when overlay is clicked
          ></div>

          {/* Off-canvas content */}
          <div className="fixed inset-y-0 left-0 w-3/4 max-w-sm bg-white z-50 shadow-lg transform transition-transform duration-300 translate-x-0 lg:hidden">
            <div className="p-4">
              <button
                className="text-gray-700 text-2xl"
                onClick={() => setIsFilterOpen(false)}
              >
                &times;
              </button>
              {/* Render FraudTypes here */}
              <FraudTypes offcanvas={true} allData={allData} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={images[currentIndex]}
        alt="Carousel"
        className="w-full h-full object-cover  transition-opacity duration-700 ease-in-out" // Smooth transition for opacity
      />
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-r-3xl text-black transition-transform duration-500 ease-in-out hover:scale-110"
      >
        <FaArrowLeftLong />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-l-3xl text-black transition-transform duration-500 ease-in-out hover:scale-110"
      >
        <FaArrowRightLong />
      </button>
    </div>
  );
};
