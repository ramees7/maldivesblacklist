import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import {
  discoverDataContext,
  selectedFraudDetailContext,
  selectedTypeContext,
} from "../Context/ContextShares";
import AdsCarousel from "../components/AdsOverview/AdsCarousel";
import AdsDetails from "../components/AdsOverview/AdsDetails";
import MoreRelatedFraud from "../components/MoreRelatedFraud/MoreRelatedFraud";

export default function AdsOverview() {
  const { selectedType, setSelectedType } = useContext(selectedTypeContext);
  const [isPosteduserMorePosts, setIsPosteduserMorePosts] = useState([]);

  const location = useLocation();
  const [data, setData] = useState([]);
  const [sameTypeOfFraudData, setSameTypeOfFraudData] = useState([]);
  const { discoverData, setDiscoverData } = useContext(discoverDataContext);

  const fullPath = decodeURIComponent(location.pathname.split("/")[3]);

  useEffect(() => {
    if (discoverData && fullPath) {
      const dataArray = discoverData?.filter((item) => item.title == fullPath);
      setData(dataArray[0]);
    }
  }, [location]);

  useEffect(() => {
    const allUserData = discoverData.filter(
      (item) => item.reportedUser === data.reportedUser
    );
    setIsPosteduserMorePosts(allUserData.filter((item) => item !== data));
    const allSameTypeOfFraud = discoverData.filter(
      (item) => item.typeOfFraud === data.typeOfFraud
    );
    setSameTypeOfFraudData(allSameTypeOfFraud);
  }, [data]);

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleToTop();
  }, [location]);
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
        {/* {selectedType !== "Any" ? (
          <>
            <IoIosArrowForward className="text-yellow-500" />
            <Link to={"/ads/all"}>
              <h2 className="text-black hover:text-yellow-500 hover:cursor-pointer">
                {selectedType}
              </h2>
            </Link>
          </>
        ) : ( */}
        <>
          <IoIosArrowForward className="text-yellow-500" />
          <Link to={`/ads/all`}>
            <h2 className="text-black hover:text-yellow-500 hover:cursor-pointer">
              {data.typeOfFraud}
            </h2>
          </Link>
        </>
        {/* )} */}
        <>
          <IoIosArrowForward className="text-yellow-500" />
          <h2 className="text-gray-500 hover:text-yellow-500 hover:cursor-pointer">
            {data.title}
          </h2>
        </>
      </div>
      <AdsCarousel />
      <AdsDetails />
      {isPosteduserMorePosts.length > 1 && (
        <MoreRelatedFraud isPosteduserMorePosts={isPosteduserMorePosts} />
      )}
      {sameTypeOfFraudData.length > 1 && (
        <MoreRelatedFraud sameTypeOfFraudData={sameTypeOfFraudData} />
      )}
    </div>
  );
}
