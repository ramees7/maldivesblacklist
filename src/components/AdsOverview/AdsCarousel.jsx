import React, { useContext, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { discoverDataContext } from "../../Context/ContextShares";

export default function AdsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const location = useLocation();
  const [data, setData] = useState([]);
  const { discoverData, setDiscoverData } = useContext(discoverDataContext);

  const fullPath = decodeURIComponent(location.pathname.split("/")[3]);

  useEffect(() => {
    if (discoverData && fullPath) {
      const dataArray = discoverData?.filter((item) => item.title == fullPath);
      setData(dataArray[0]);
    }
  }, [location]);

  const handlePrev = () => {
    if (data?.images?.length) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? data.images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (data?.images?.length) {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      {data?.images?.length > 0 && (
        <>
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {data.images.map((image, index) => (
              <div key={index} className="min-w-full">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full md:h-[500px] h-[400px] object-cover"
                />
              </div>
            ))}
          </div>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-black hover:bg-gray-300"
          >
            <FaArrowLeft />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-black hover:bg-gray-300"
          >
            <FaArrowRight />
          </button>
        </>
      )}
    </div>
  );
}
