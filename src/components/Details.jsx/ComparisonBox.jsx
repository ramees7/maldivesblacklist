import React, { useContext, useEffect, useState } from "react";
import { IoIosGitCompare } from "react-icons/io";
import {
  IoArrowBackOutline,
  IoArrowForwardOutline,
  IoClose,
  IoInformationCircle,
} from "react-icons/io5";
import { compareDataContext } from "../../Context/ContextShares";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ComparisonBox() {
  const [currentIndexComparison, setCurrentIndexComparison] = useState(0);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(3); // Number of images to show
  const { compareData, setCompareData } = useContext(compareDataContext);

  const toggleDetailPanel = (e) => {
    e.preventDefault();
    setShowDetailPanel((prev) => !prev);
  };

  // Adjust itemsToShow based on screen width
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(2); // Show 2 items on screens below 'md'
      } else {
        setItemsToShow(3); // Show 3 items on larger screens
      }
    };

    // Initial check
    updateItemsToShow();

    // Add event listener for window resize
    window.addEventListener("resize", updateItemsToShow);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", updateItemsToShow);
    };
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("CompareData"));
    setCompareData(Array.isArray(data) ? data : []);
  }, []);

  useEffect(() => {
    localStorage.setItem("CompareData", JSON.stringify(compareData));
  }, [compareData]);

  const handleRemoveComparison = (id) => {
    const updatedItems = compareData.filter((item) => item.id !== id);
    setCompareData(updatedItems);
    if (currentIndexComparison > updatedItems.length - itemsToShow) {
      setCurrentIndexComparison(Math.max(0, updatedItems.length - itemsToShow));
    }
  };

  const handleNextComparison = () => {
    if (currentIndexComparison + itemsToShow < compareData.length) {
      setCurrentIndexComparison((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevComparison = () => {
    if (currentIndexComparison > 0) {
      setCurrentIndexComparison((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div>
      {compareData.length > 0 && (
        <div
          className="fixed bottom-0 lg:left-3/4 left-1/2 z-40 transform -translate-x-1/2 bg-white md:w-[500px] w-[300px] rounded-t-lg cursor-default"
          onClick={(e) => e.preventDefault()}
        >
          <div
            className="bg-white px-4 pt-4 cursor-pointer rounded-t-lg"
            onClick={toggleDetailPanel}
          >
            <div className="bg-blue-600 flex py-2 px-4 gap-x-5 items-center justify-center text-white rounded-t-lg">
              <IoIosGitCompare className="text-xl" />
              <h1 className="text-xl">Compare</h1>
              <div className="bg-white rounded-full w-[20px] h-[20px] flex justify-center items-center">
                <span className="text-black">{compareData.length}</span>
              </div>
            </div>
          </div>

          <div
            className={`px-3 bg-white transition-all duration-700 ease-in-out ${
              showDetailPanel
                ? "max-h-screen opacity-100 pb-5"
                : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="flex justify-between  gap-x-3 p-4 rounded-lg">
              {compareData
                .slice(
                  currentIndexComparison,
                  currentIndexComparison + itemsToShow
                )
                .map((item) => (
                  <div key={item.id} className="md:w-1/3 w-1/2">
                    <div className="border-dashed border-2 border-gray-300 p-1 rounded-lg  flex items-center justify-center flex-col relative hover:border-transparent">
                      <div className="flex justify-center items-start">
                        <div
                          className="absolute top-2 right-2 bg-gray-200 rounded-full p-1 cursor-pointer"
                          onClick={() => handleRemoveComparison(item.id)}
                        >
                          <IoClose className="text-black" />
                        </div>
                        <img
                          src={item.images[0]}
                          alt={`comparison-${item.id}`}
                          className="w-full h-32 object-cover"
                        />
                      </div>
                    </div>
                    <h1 className="text-center text-black mt-2">
                      {item.title}
                    </h1>
                  </div>
                ))}

              {compareData.length < itemsToShow &&
                Array.from({ length: itemsToShow - compareData.length }).map(
                  (_, idx) => (
                    <div
                      key={`placeholder-${idx}`}
                      className="border-dashed border-2 border-gray-300 p-1 rounded-lg w-1/3 flex items-center justify-center relative"
                    >
                      <p className="text-gray-400">Add new</p>
                    </div>
                  )
                )}
            </div>

            <div className="flex justify-between px-5 mt-5">
              {compareData.length < 2 ? (
                <div className="flex items-center mt-4 text-gray-500">
                  <div className="bg-yellow-200 text-yellow-700 p-2 rounded-full mr-2">
                    <IoInformationCircle className="text-xl" />
                  </div>
                  <p>
                    You’re almost there, select at least one more ad to compare!
                  </p>
                </div>
              ) : (
                <div className="bg-yellow-500 w-fit font-semibold text-lg text-white rounded">
                  <Link
                    to={`/compare/`}
                    className="py-3 px-6 flex gap-x-4 items-center"
                  >
                    Compare <FaArrowRightLong />
                  </Link>
                </div>
              )}

              <div className="flex justify-end mt-4">
                <button
                  onClick={handlePrevComparison}
                  disabled={currentIndexComparison === 0}
                  className={`bg-yellow-200 p-2 rounded-full shadow-lg hover:bg-yellow-300 mx-1 ${
                    currentIndexComparison === 0
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  <IoArrowBackOutline className="text-xl text-yellow-700" />
                </button>
                <button
                  onClick={handleNextComparison}
                  disabled={
                    currentIndexComparison + itemsToShow >= compareData.length
                  }
                  className={`bg-yellow-200 p-2 rounded-full shadow-lg hover:bg-yellow-300 mx-1 ${
                    currentIndexComparison + itemsToShow >= compareData.length
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  <IoArrowForwardOutline className="text-xl text-yellow-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
