import React, { useState } from "react";
import { FaXmark, FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6"; // Import necessary icons
import { IoEyeOutline } from "react-icons/io5";

export default function Modal({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle closing the modal
  const onClose = () => {
    setIsModalOpen(false);
  };

  // Function to open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  if (!data) return null;

  return (
    <>
      {/* Eye icon button to open the modal */}
      <button
        onClick={handleOpenModal}
        className={`hover:text-blue-500 hover:border-blue-500 p-2 border-2 rounded-full`}
      >
        <IoEyeOutline />
      </button>

      {/* Modal structure */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex w-full items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg  w-[75%] relative">
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
              <div className="md:col-span-6 col-span-12">
                <h2 className="text-2xl font-semibold mb-4">{data.title}</h2>
                <p className="text-gray-600 mb-6">{data.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">{data.views} views</span>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    View Full Details
                  </button>
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
