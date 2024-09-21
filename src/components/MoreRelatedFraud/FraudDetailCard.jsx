// import React, { useContext, useState } from "react";
// import { compareDataContext } from "../../Context/ContextShares";
// import Modal from "../Details.jsx/Modal";
// import { Link } from "react-router-dom";
// import { IoIosGitCompare } from "react-icons/io";
// import ComparisonBox from "../Details.jsx/ComparisonBox";
// import { CiHeart } from "react-icons/ci";
// import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// export default function FraudDetailCard({ filteredFraudData, userview }) {
//   const [hoveredCardId, setHoveredCardId] = useState(null);
//   const { compareData, setCompareData } = useContext(compareDataContext);
//   const [showPopup, setShowPopup] = useState(false);

//   const handleCompareClick = (e, item) => {
//     e.preventDefault();
//     const isItemInCompare = compareData.some(
//       (compareItem) => compareItem.id === item.id
//     );

//     if (isItemInCompare) {
//       // Remove item if it's already in the comparison list
//       const updatedCompareData = compareData.filter(
//         (compareItem) => compareItem.id !== item.id
//       );
//       setCompareData(updatedCompareData);
//     } else {
//       // Add item if it's not in the comparison list
//       setCompareData([...compareData, item]);
//     }
//     setShowPopup(true);
//   };

//   return (
//     <div
//       className={`${
//         userview ? "grid grid-cols-12 gap-6 pt-10" : "flex gap-6 pt-10 w-full"
//       } `}
//     >
//       {filteredFraudData.map((item) => {
//         const isItemInCompare = compareData.some(
//           (compareItem) => compareItem.id === item.id
//         );

//         return (
//           <div
//             key={item.id}
//             className={`${
//               userview ? "md:col-span-4 lg:col-span-3 col-span-12 " : " lg:w-1/4 md:w-1/2 w-[400px]"
//             } relative bg-white shadow-lg rounded-lg overflow-hidden`}
//             onMouseEnter={() => setHoveredCardId(item.id)}
//             onMouseLeave={() => setHoveredCardId(null)}
//           >
//             <Link to={`/ads/${item.typeOfFraud}/${item.title}/`} className="">
//               <div className="relative">
//                 <img
//                   src={item.images[0]}
//                   alt={item.title}
//                   className="object-cover h-[200px] w-full "
//                 />
//                 {hoveredCardId === item.id && (
//                   <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
//                     <Carousel images={item.images} />
//                   </div>
//                 )}
//               </div>

//               <div className="p-4">
//                 <div className="min-h-[80px] h-[100px] max-h-fit">
//                   <h2 className="font-semibold text-lg">{item.title}</h2>
//                 </div>
//                 <div className="flex items-center justify-between text-gray-500 text-sm border-t-2 py-3">
//                   <div className="flex items-center">
//                     <Modal data={item} isItemInCompare={isItemInCompare} />
//                     <button
//                       className={`p-2 border-2 rounded-full mx-2 ${
//                         isItemInCompare
//                           ? "bg-blue-500 text-white border-blue-500"
//                           : "hover:text-[#537cd9] hover:border-[#537cd9]"
//                       }`}
//                       onClick={(e) => handleCompareClick(e, item)}
//                     >
//                       <IoIosGitCompare />
//                     </button>
//                     {showPopup && <ComparisonBox />}
//                     <button className="hover:text-[#537cd9] hover:border-[#537cd9] p-2 border-2 rounded-full">
//                       <CiHeart />
//                     </button>
//                   </div>
//                   <div>
//                     <h3 className="text-md text-gray-500">
//                       {item.views} views
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// const Carousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = (e) => {
//     e.preventDefault();
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrev = (e) => {
//     e.preventDefault();
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="relative w-full h-full overflow-hidden">
//       <img
//         src={images[currentIndex]}
//         alt="Carousel"
//         className="w-full h-full object-cover  transition-opacity duration-700 ease-in-out"
//       />
//       <button
//         onClick={handlePrev}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-r-3xl text-black transition-transform duration-500 ease-in-out hover:scale-110"
//       >
//         <FaArrowLeftLong />
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-l-3xl text-black transition-transform duration-500 ease-in-out hover:scale-110"
//       >
//         <FaArrowRightLong />
//       </button>
//     </div>
//   );
// };

import React, { useContext, useState } from "react";
import { compareDataContext } from "../../Context/ContextShares";
import Modal from "../Details.jsx/Modal";
import { Link } from "react-router-dom";
import { IoIosGitCompare } from "react-icons/io";
import ComparisonBox from "../Details.jsx/ComparisonBox";
import { CiHeart } from "react-icons/ci";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function FraudDetailCard({ filteredFraudData, userview }) {
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const { compareData, setCompareData } = useContext(compareDataContext);
  const [showPopup, setShowPopup] = useState(false);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredFraudData.length / itemsPerPage);

  // Get the data to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredFraudData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleCompareClick = (e, item) => {
    e.preventDefault();
    const isItemInCompare = compareData.some(
      (compareItem) => compareItem.id === item.id
    );

    if (isItemInCompare) {
      const updatedCompareData = compareData.filter(
        (compareItem) => compareItem.id !== item.id
      );
      setCompareData(updatedCompareData);
    } else {
      setCompareData([...compareData, item]);
    }
    setShowPopup(true);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;
  const resultsCount = filteredFraudData.length;

  return (
    <div className="w-full">
      <div
        className={`${
          userview ? "grid grid-cols-12 gap-6 pt-10" : "flex gap-6 pt-10 w-full"
        }`}
      >
        {currentItems.map((item) => {
          const isItemInCompare = compareData.some(
            (compareItem) => compareItem.id === item.id
          );

          return (
            <div
              key={item.id}
              className={`${
                userview
                  ? "md:col-span-4 lg:col-span-3 sm:col-span-6 col-span-12 "
                  : " lg:w-1/4 md:w-1/2 w-[400px]"
              } relative bg-white shadow-lg rounded-lg overflow-hidden`}
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

      {/* Pagination Controls */}
      {totalPages > 0 && (
        <div className="flex justify-between mt-10">
          {userview && (
            <div>
              <h1>
                Showing {indexOfFirstItem + 1} to{" "}
                {Math.min(indexOfLastItem, resultsCount)} of {resultsCount}{" "}
                results
              </h1>
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-end gap-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-[#d5e3ee] text-black rounded-l-lg disabled:opacity-50"
              >
                <FaArrowLeftLong />
              </button>
              {[...Array(totalPages).keys()].map((pageNumber) => (
                <button
                  key={pageNumber + 1}
                  onClick={() => handlePageChange(pageNumber + 1)}
                  className={`px-4 py-2 ${
                    currentPage === pageNumber + 1
                      ? "bg-yellow-500 text-black"
                      : "bg-[#d5e3ee] hover:text-yellow-500"
                  } rounded-md`}
                >
                  {pageNumber + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-[#d5e3ee] text-black rounded-r-lg disabled:opacity-50"
              >
                <FaArrowRightLong />
              </button>
            </div>
          )}
        </div>
      )}
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
