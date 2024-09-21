import React, { useContext, useEffect, useState } from "react";
import { CiClock1, CiHeart } from "react-icons/ci";
import { FaXmark, FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6"; // Import necessary icons
import { IoIosGitCompare } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { compareDataContext } from "../../Context/ContextShares";

export default function Modal({ data, isItemInCompare }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { compareData, setCompareData } = useContext(compareDataContext);

  // const [showPopup, setShowPopup] = useState(false);

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

    // setShowPopup(true);
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("CompareData"));
    if (storedData && Array.isArray(storedData)) {
      setCompareData(storedData);
    }
  }, []);

  useEffect(() => {
    if (compareData.length > 0) {
      localStorage.setItem("CompareData", JSON.stringify(compareData));
    }
  }, [compareData]);

  const onClose = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  // Function to open the modal
  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleClickOutside = (e) => {
    // Close the modal if clicking outside the modal content
    if (e.target.id === "modal-overlay") {
      setIsModalOpen(false);
      e.preventDefault();
    }
  };

  if (!data) return null;

  return (
    <>
      <button
        onClick={handleOpenModal}
        className={`hover:text-[#537cd9] hover:border-[#537cd9] p-2 border-2 rounded-full`}
      >
        <IoEyeOutline />
      </button>

      {/* Modal structure */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex w-full items-center justify-center cursor-default"
          id="modal-overlay"
          onClick={handleClickOutside}
        >
          <div className="bg-white rounded-lg shadow-lg  w-[75%] p-8 relative">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FaXmark size={24} />
            </button>

            {/* Modal content */}
            <div className="grid grid-cols-12 gap-5">
              <div className="md:col-span-6 col-span-12">
                {/* Carousel content */}
                <Carousel images={data.images} />
              </div>
              <div className="md:col-span-6 col-span-12 flex flex-col justify-between">
                <div className="mb-5">
                  <div className="flex justify-between md:pe-8 items-center">
                    <h3 className="text-gray-500 text-md flex items-center gap-x-2">
                      <CiClock1 /> {data.dateOfPosted} days ago
                    </h3>
                    <h3 className="text-gray-500 text-md flex items-center gap-x-2">
                      <IoEyeOutline />
                      {data.views} views
                    </h3>
                  </div>
                  <div>
                    <h2 className="md:text-3xl text-2xl font-semibold mb-4">
                      {data.title}
                    </h2>
                    <h1 className="md:text-xl text-lg border-blue-500 py-1 px-3 rounded-lg border-2 w-fit">
                      {data.typeOfFraud}
                    </h1>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-5">
                  <div className=" bg-[#537cd9] font-semibold text-lg text-white rounded w-fit">
                    <Link to={"/"}>
                      <button className="py-3 px-4 flex items-center gap-x-2">
                        View More <FaArrowRightLong />
                      </button>
                    </Link>
                  </div>
                  <div>
                    <button
                      className={`p-2 border-2 rounded-full mx-2 ${
                        isItemInCompare
                          ? "bg-blue-500 text-white border-blue-500"
                          : "hover:text-[#537cd9] hover:border-[#537cd9]"
                      }`}
                      onClick={(e) => handleCompareClick(e, data)}
                    >
                      <IoIosGitCompare />
                    </button>
                    <button className="hover:text-[#537cd9] hover:border-[#537cd9] p-2 border-2 rounded-full ">
                      <CiHeart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Carousel Component
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
    <div className="relative w-full h-64 overflow-hidden">
      <img
        src={images[currentIndex]}
        alt="Carousel"
        className="w-full h-full object-cover transition-opacity duration-700 ease-in-out" // Smooth transition for opacity
      />
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-r-3xl text-black transition-transform duration-500 ease-in-out hover:scale-110"
      >
        <FaArrowLeftLong />
      </button>
      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-l-3xl text-black transition-transform duration-500 ease-in-out hover:scale-110"
      >
        <FaArrowRightLong />
      </button>
    </div>
  );
};
