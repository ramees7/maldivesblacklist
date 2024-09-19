import React, { useContext, useState } from "react";
import { compareDataContext } from "../../Context/ContextShares";
import Modal from "../Details.jsx/Modal";
import { Link } from "react-router-dom";
import { IoIosGitCompare } from "react-icons/io";
import ComparisonBox from "../Details.jsx/ComparisonBox";
import { CiHeart } from "react-icons/ci";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function FraudDetailCard({ filteredFraudData }) {
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const { compareData, setCompareData } = useContext(compareDataContext);
  const [showPopup, setShowPopup] = useState(false);

  const handleCompareClick = (e, item) => {
    e.preventDefault();
    const isItemInCompare = compareData.some(
      (compareItem) => compareItem.id === item.id
    );

    if (isItemInCompare) {
      // Remove item if it's already in the comparison list
      const updatedCompareData = compareData.filter(
        (compareItem) => compareItem.id !== item.id
      );
      setCompareData(updatedCompareData);
    } else {
      // Add item if it's not in the comparison list
      setCompareData([...compareData, item]);
    }
    setShowPopup(true);
  };

  return (
    <div className="flex gap-6 pt-10 w-full">
      {filteredFraudData.map((item) => {
        const isItemInCompare = compareData.some(
          (compareItem) => compareItem.id === item.id
        );

        return (
          <div
            key={item.id}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden lg:w-1/4 md:w-1/2 w-[400px]"
            onMouseEnter={() => setHoveredCardId(item.id)}
            onMouseLeave={() => setHoveredCardId(null)}
          >
            <Link to={`/ads/${item.typeOfFraud}/${item.title}/`} className="">
              <div className="relative">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="object-cover h-[200px] w-full "
                />
                {hoveredCardId === item.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
                    <Carousel images={item.images} />
                  </div>
                )}
              </div>

              <div className="p-4">
                <div className="min-h-[80px] h-[100px] max-h-fit">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                </div>
                <div className="flex items-center justify-between text-gray-500 text-sm border-t-2 py-3">
                  <div className="flex items-center">
                    <Modal data={item} isItemInCompare={isItemInCompare} />
                    <button
                      className={`p-2 border-2 rounded-full mx-2 ${
                        isItemInCompare
                          ? "bg-blue-500 text-white border-blue-500"
                          : "hover:text-[#537cd9] hover:border-[#537cd9]"
                      }`}
                      onClick={(e) => handleCompareClick(e, item)}
                    >
                      <IoIosGitCompare />
                    </button>
                    {showPopup && <ComparisonBox />}
                    <button className="hover:text-[#537cd9] hover:border-[#537cd9] p-2 border-2 rounded-full">
                      <CiHeart />
                    </button>
                  </div>
                  <div>
                    <h3 className="text-md text-gray-500">
                      {item.views} views
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={images[currentIndex]}
        alt="Carousel"
        className="w-full h-full object-cover  transition-opacity duration-700 ease-in-out"
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
