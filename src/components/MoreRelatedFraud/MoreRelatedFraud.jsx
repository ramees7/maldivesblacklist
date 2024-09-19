import React, { useContext, useEffect, useState } from "react";
import FraudDetailCard from "./FraudDetailCard";
import { discoverDataContext } from "../../Context/ContextShares";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function MoreRelatedFraud({
  isPosteduserMorePosts,
  sameTypeOfFraudData,
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [itemsToShow, setItemsToShow] = useState(3);
  // const { discoverData } = useContext(discoverDataContext);

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

  const dataToUse = isPosteduserMorePosts
    ? isPosteduserMorePosts
    : sameTypeOfFraudData 
  const shouldDisableButtons = dataToUse.length <= itemsToShow;

  const handleNext = () => {
    if (!shouldDisableButtons) {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= dataToUse.length ? prevIndex : prevIndex + 1
      );
    }
  };

  const handlePrev = () => {
    if (!shouldDisableButtons) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? 0 : prevIndex - 1));
    }
  };

  const getVisibleItems = () => {
    const endIndex = currentIndex + itemsToShow;
    if (endIndex <= dataToUse.length) {
      return dataToUse.slice(currentIndex, endIndex);
    } else {
      return dataToUse.slice(currentIndex, currentIndex + itemsToShow);
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
                <Link to={"/ads/all/"}>
                  <button className="py-3 px-6 w-fit bg-[#537cd9] font-semibold rounded-md flex items-center gap-x-2 justify-center">
                    Display all from name
                  </button>
                </Link>
              ) : (
                <Link to={"/ads/all/"}>
                  <button className="py-3 px-6 w-fit bg-[#537cd9] font-semibold rounded-md flex items-center gap-x-2 justify-center">
                    Start a new search
                  </button>
                </Link>
              )}

              <button
                onClick={handlePrev}
                className={`p-4 bg-yellow-500 rounded-lg transition ${
                  shouldDisableButtons || currentIndex === 0
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={shouldDisableButtons || currentIndex === 0}
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className={`p-4 bg-yellow-500 rounded-lg transition ${
                  shouldDisableButtons ||
                  currentIndex + itemsToShow >= dataToUse.length
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={
                  shouldDisableButtons ||
                  currentIndex + itemsToShow >= dataToUse.length
                }
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <div className="w-full">
            <div className="flex space-x-4 items-center justify-center w-full">
              <FraudDetailCard
                filteredFraudData={getVisibleItems()}
                isPosteduserMorePosts={isPosteduserMorePosts}
              />
            </div>
          </div>
        </div>
        <div className="md:hidden block mt-10">
          <div className="flex text-white justify-between items-center">
            {isPosteduserMorePosts ? (
              <Link to={"/ads/all/"}>
                <button className="py-3 px-6 w-fit bg-[#537cd9] font-semibold rounded-md flex items-center gap-x-2 justify-center">
                  Display all from name
                </button>
              </Link>
            ) : (
              <Link to={"/ads/all/"}>
                <button className="py-3 px-6 w-fit bg-[#537cd9] font-semibold rounded-md flex items-center gap-x-2 justify-center">
                  Start a new search
                </button>
              </Link>
            )}
            <div className="gap-x-4 flex">
              <button
                onClick={handlePrev}
                className={`p-4 bg-yellow-500 rounded-lg transition ${
                  shouldDisableButtons || currentIndex === 0
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={shouldDisableButtons || currentIndex === 0}
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className={`p-4 bg-yellow-500 rounded-lg transition ${
                  shouldDisableButtons ||
                  currentIndex + itemsToShow >= dataToUse.length
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={
                  shouldDisableButtons ||
                  currentIndex + itemsToShow >= dataToUse.length
                }
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
