import React, { useContext, useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import FraudDetailCard from "./FraudDetailCard";
import { discoverDataContext } from "../../Context/ContextShares";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function MoreRelatedFraud({ isPosteduserMorePosts }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [itemsToShow, setItemsToShow] = useState(3); // Default to 3 items for large screens
  const { discoverData, setDiscoverData } = useContext(discoverDataContext);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Adjust the number of items to show based on screen size
    if (windowWidth >= 1024) {
      setItemsToShow(4); // Large screens
    } else if (windowWidth >= 768) {
      setItemsToShow(2); // Medium screens
    } else {
      setItemsToShow(1); // Small screens
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= discoverData.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? discoverData.length - 1 : prevIndex - 1
    );
  };

  const getVisibleItems = () => {
    const endIndex = currentIndex + itemsToShow;
    if (endIndex <= discoverData.length) {
      return discoverData.slice(currentIndex, endIndex);
    } else {
      return [
        ...discoverData.slice(currentIndex),
        ...discoverData.slice(0, endIndex - discoverData.length),
      ];
    }
  };

  return (
    <>
      <div className="relative w-full mx-auto overflow-hidden py-8">
        <div className="flex md:justify-between justify-center">
          <div className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-700">
            {isPosteduserMorePosts ? (
              <h1>More from this user</h1>
            ) : (
              <h1>You may also like...</h1>
            )}
          </div>
          <div className="hidden md:block">
            <div className="flex gap-x-4 text-white items-center">
              {isPosteduserMorePosts ? (
                // change the Link path to user all see
                <Link to={"/ads/all"}>
                  <button className="py-3 px-6 w-fit bg-[#537cd9] font-semibold rounded-md flex items-center gap-x-2 justify-center">
                    Display all from name
                  </button>
                </Link>
              ) : (
                <Link to={"/ads/all"}>
                  <button className="py-3 px-6 w-fit bg-[#537cd9] font-semibold rounded-md flex items-center gap-x-2 justify-center">
                    Start a new search
                  </button>
                </Link>
              )}

              <button
                onClick={handlePrev}
                className="p-4 bg-yellow-500 rounded-lg transition"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="p-4 bg-yellow-500 rounded-lg transition"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <div className="w-full">
            <div className="flex space-x-4 items-center justify-center w-full">
              <FraudDetailCard filteredFraudData={getVisibleItems()} />
            </div>
          </div>
        </div>
        <div className="md:hidden block mt-10">
          <div className="flex  text-white justify-between items-center">
            {isPosteduserMorePosts ? (
              // change the Link path to user all see
              <Link to={"/ads/all"}>
                <button className="py-3 px-6 w-fit bg-[#537cd9] font-semibold rounded-md flex items-center gap-x-2 justify-center">
                  Display all from name
                </button>
              </Link>
            ) : (
              <Link to={"/ads/all"}>
                <button className="py-3 px-6 w-fit bg-[#537cd9] font-semibold rounded-md flex items-center gap-x-2 justify-center">
                  Start a new search
                </button>
              </Link>
            )}
            <div className="gap-x-4 flex">
              <button
                onClick={handlePrev}
                className="p-4 bg-yellow-500 rounded-lg transition"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="p-4 bg-yellow-500 rounded-lg transition"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
