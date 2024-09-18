import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  selectedFraudDetailContext,
  selectedTypeContext,
} from "../Context/ContextShares";
import AdsCarousel from "../components/AdsOverview/AdsCarousel";
import AdsDetails from "../components/AdsOverview/AdsDetails";
import MoreRelatedFraud from "../components/MoreRelatedFraud/MoreRelatedFraud";

export default function AdsOverview() {
  const { selectedType, setSelectedType } = useContext(selectedTypeContext);
  const { selectedFraudDetail, setSelectedFraudDetail } = useContext(
    selectedFraudDetailContext
  );
  const [selectedData, setSelectedData] = useState({});
  const [isPosteduserMorePosts, setIsPosteduserMorePosts] = useState(true);

  useEffect(() => {
    setSelectedData(selectedFraudDetail);
  }, [selectedFraudDetail]);

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleToTop();
  }, []);
  return (
    <div className="xl:px-48 lg:px-20 md:px-12 px-10 bg-[#f2f2f2] pb-20">
      <div className=" flex items-center gap-x-2  border-0 py-6">
        <Link to={"/"}>
          <h2 className="text-black hover:text-yellow-500 hover:cursor-pointer">
            Home
          </h2>
        </Link>
        <IoIosArrowForward className="text-yellow-500" />
        <Link to={"/ads/all"}>
          <h2 className="text-black hover:text-yellow-500 hover:cursor-pointer">
            Search Results
          </h2>
        </Link>
        {selectedType !== "Any" ? (
          <>
            <IoIosArrowForward className="text-yellow-500" />
            <Link to={"/ads/all"}>
              <h2 className="text-black hover:text-yellow-500 hover:cursor-pointer">
                {selectedType}
              </h2>
            </Link>
          </>
        ) : (
          <>
            <IoIosArrowForward className="text-yellow-500" />
            <Link to={`/ads/all`}>
              <h2 className="text-black hover:text-yellow-500 hover:cursor-pointer">
                {selectedData.typeOfFraud}
              </h2>
            </Link>
          </>
        )}
        {/* <>
          <IoIosArrowForward className="text-yellow-500" />
          <h2 className="text-gray-500 hover:text-yellow-500 hover:cursor-pointer">
            {selectedData.title}
          </h2>
        </> */}
      </div>
      <AdsCarousel />
      <AdsDetails />
      {/* here when the current ads added user other details show */}
      {isPosteduserMorePosts && <MoreRelatedFraud isPosteduserMorePosts={isPosteduserMorePosts}/>} 
      <MoreRelatedFraud />
    </div>
  );
}
