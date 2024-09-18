import React, { useContext, useEffect, useState } from "react";
import {
  adsChangingContext,
  compareDataContext,
} from "../../Context/ContextShares";
import Modal from "../Details.jsx/Modal";
import { Link } from "react-router-dom";
import { IoIosGitCompare } from "react-icons/io";
import ComparisonBox from "../Details.jsx/ComparisonBox";
import { CiHeart } from "react-icons/ci";
import { useLocation } from "react-router-dom";

export default function FraudDetailCard() {
  const [filteredData, setFilteredData] = useState([]);
  const [filteredFraudData, setFilteredFraudData] = useState([]);
  const { adsChanging, setAdsChanging } = useContext(adsChangingContext);
  const [showPopup, setShowPopup] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const { compareData, setCompareData } = useContext(compareDataContext);
  const location = useLocation()
  
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

  //   const handleClose = () => {
  //     navigate("/ads/all");
  //     setSelectedType("");
  //   };

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
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        {filteredFraudData.map((item) => {
          const isItemInCompare = compareData.some(
            (compareItem) => compareItem.id === item.id
          );
          return (
            <div
              key={item.id}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden"
              onMouseEnter={() => setHoveredCardId(item.id)}
              onMouseLeave={() => setHoveredCardId(null)}
            >
              <Link
                to={`/ads/${item.typeOfFraud}/${item.title}`}
                className=""
                onClick={() => handleSelectedFraudDetails(item)}
              >
                <div className="relative">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="object-cover h-[200px] w-full"
                  />
                  {hoveredCardId === item.id && (
                    <div className="absolute inset-0  bg-black bg-opacity-50  flex items-center justify-center transition-opacity duration-300">
                      <Carousel images={item.images} />
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <div className="min-h-[80px] h-[100px] max-h-fit">
                    <h2 className="font-semibold text-lg">{item.title}</h2>
                    <p className="text-gray-500 hidden">{item.description}</p>
                  </div>
                  <div className=" flex items-center justify-between text-gray-500 text-sm border-t-2 py-3">
                    <div className="flex items-center ">
                      <div onClick={(e) => e.preventDefault()}>
                        <Modal data={item} isItemInCompare={isItemInCompare} />
                      </div>

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

                      <button
                        className="hover:text-[#537cd9] hover:border-[#537cd9] p-2 border-2 rounded-full "
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
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
    </div>
  );
}
