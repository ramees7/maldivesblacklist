import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import FraudDetailCard from "./FraudDetailCard";

export default function MoreRelatedFraud() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [itemsToShow, setItemsToShow] = useState(3); // Default to 3 items for large screens

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Adjust the number of items to show based on screen size
    if (windowWidth >= 1024) {
      setItemsToShow(4); // Large screens
    } else if (windowWidth >= 768) {
      setItemsToShow(3); // Medium screens
    } else {
      setItemsToShow(2); // Small screens
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);



  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= items.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const getVisibleItems = () => {
    const endIndex = currentIndex + itemsToShow;
    if (endIndex <= items.length) {
      return items.slice(currentIndex, endIndex);
    } else {
      return [
        ...items.slice(currentIndex),
        ...items.slice(0, endIndex - items.length),
      ];
    }
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden py-8">
      <h1 className="text-4xl font-semibold text-center mb-8">Related Fraud</h1>
      <div className="flex items-center justify-center space-x-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="text-3xl hover:text-gray-500 transition"
        >
          <MdChevronLeft />
        </button>

        {/* Carousel Items */}
        <div className="w-full">
          <div className="flex space-x-4 items-center justify-center w-full">
            {/* {getVisibleItems().map((item) => (
              <div
                key={item.id}
                className="w-full h-40 bg-white shadow-md rounded-lg p-4 transition-all duration-500 ease-in-out"
              >
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p>{item.views} Views</p>
              </div>
            ))} */}
            <FraudDetailCard />
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="text-3xl hover:text-gray-500 transition"
        >
          <MdChevronRight />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-7 space-x-2">
        {items.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
