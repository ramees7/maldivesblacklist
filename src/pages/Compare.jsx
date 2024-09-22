import React, { useState, useEffect, useContext } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaLock,
  FaLockOpen,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { compareDataContext } from "../Context/ContextShares";
import { message } from "antd";

export default function Compare() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [itemsToShow, setItemsToShow] = useState(2);
  const [compareDataAll, setCompareDataAll] = useState([]);
  const { compareData, setCompareData } = useContext(compareDataContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lockedItem, setLockedItem] = useState(null); // State to hold the locked item

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    if (windowWidth >= 1024) {
      setItemsToShow(2); // 2 items for large screens
    } else {
      setItemsToShow(1); // 1 item for smaller screens
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("CompareData"));
    setCompareDataAll(Array.isArray(data) ? data : []);

    // Retrieve the locked item from localStorage if it exists
    const savedLockedItem = JSON.parse(localStorage.getItem("LockedItem"));
    if (savedLockedItem) {
      setLockedItem(savedLockedItem);
    }
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + itemsToShow < compareDataAll.length) {
        return prevIndex + 1;
      }
      return prevIndex;
    });
  };

  const getVisibleItems = () => {
    if (windowWidth < 1024) {
      // No locking behavior on smaller screens, just slice the data normally
      return compareDataAll.slice(currentIndex, currentIndex + itemsToShow);
    }

    if (lockedItem) {
      // On large screens, if an item is locked, show it in the first position
      const unlockedItems = compareDataAll.filter(
        (item) => item.id !== lockedItem.id
      );
      return [
        lockedItem,
        ...unlockedItems.slice(currentIndex, currentIndex + 1),
      ];
    }

    return compareDataAll.slice(currentIndex, currentIndex + itemsToShow);
  };

  const removeItem = (id) => {
    if (lockedItem && lockedItem.id === id) {
      message.warning("Please unlock the item before removing it.");
      return;
    }

    const updatedData = compareDataAll.filter((item) => item.id !== id);
    message.success("Removed")
    setCompareDataAll(updatedData);
    setCompareData(updatedData);
    localStorage.setItem("CompareData", JSON.stringify(updatedData));
  };

  const lockItem = (item) => {
    if (lockedItem && lockedItem.id === item.id) {
      setLockedItem(null);
      message.info("Unlocked")
      localStorage.removeItem("LockedItem");
    } else {
      setLockedItem(item);
      message.success("Locked")
      localStorage.setItem("LockedItem", JSON.stringify(item));
    }
  };

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
    <div className="xl:px-48 lg:px-20 md:px-12 px-10 bg-[#f2f2f2]">
      <div className="py-20">
        <div className="grid grid-cols-12 gap-5">
          <div className="md:col-span-6 lg:col-span-4 col-span-12 md:mb-0 mb-5 px-5 md:px-0 md:h-[450px]">
            <div className="md:h-[370px] ">
              <h1 className="text-4xl font-semibold mb-4 md:justify-start justify-center flex items-center gap-x-3">
                Compare{" "}
                <span className="bg-yellow-500 text-white flex justify-center items-center rounded-full w-[30px] h-[30px] text-lg">
                  {compareDataAll?.length}
                </span>
              </h1>
              <h6 className="mt-2 text-gray-500 mb-5 md:text-start text-center leading-7 pe-3">
                Aenean porta vehicula felis, malesuada maximus justo egestas
                euismod dignissim.
              </h6>
              <div className="flex justify-between ">
                <Link
                  to={"/ads/all/"}
                  className="px-4 py-3 bg-yellow-500 font-semibold rounded-lg text-white"
                >
                  Back to search
                </Link>
                <div className="flex gap-x-4 ">
                  <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className={`py-3 px-4 bg-yellow-500 rounded-lg ${
                      currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    onClick={nextSlide}
                    disabled={
                      currentIndex + itemsToShow >= compareDataAll.length
                    }
                    className={`px-4 py-3 bg-yellow-500 rounded-lg ${
                      currentIndex + itemsToShow >= compareDataAll.length
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="h-[80px] hidden md:block ps-5 border-t">
              <h1 className="flex items-center text-lg font-semibold h-full">
                Fraud Types
              </h1>
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-8 col-span-12 flex items-center justify-center">
            <div className="relative w-full overflow-hidden">
              <div className="flex space-x-4 transition-transform duration-300">
                {getVisibleItems().map((data) => (
                  <div key={data.id} className="lg:w-[50%] px-4 relative">
                    {compareDataAll.length >= 3 && windowWidth >= 1024 && (
                      <button
                        className="absolute top-2 left-6 text-black bg-white p-1 rounded-full"
                        onClick={() => lockItem(data)}
                      >
                        {lockedItem && lockedItem.id === data.id ? (
                          <FaLock color="gold" />
                        ) : (
                          <FaLockOpen />
                        )}
                      </button>
                    )}
                    <button
                      className="absolute top-2 right-6 text-black bg-white p-1 rounded-full"
                      onClick={() => removeItem(data.id)}
                    >
                      <FaTimes />
                    </button>

                    <div className="bg-white rounded-lg shadow-lg h-[450px] flex flex-col w-full">
                      <Link to={`/ads/${data.typeOfFraud}/${data.title}`}>
                        <img
                          src={data.images[0]}
                          alt=""
                          className="h-[250px] rounded-t-lg"
                        />
                        <div className="h-[120px] flex items-center border-b text-xl font-semibold ps-5">
                          <h1>{data.title}</h1>
                        </div>
                      </Link>
                      <div className="h-[80px] flex items-center justify-between text-lg px-5">
                        <h1 className="block md:hidden font-semibold">
                          Fraud Types
                        </h1>
                        <h1 className="md:font-semibold font-normal">
                          {data.typeOfFraud}
                        </h1>
                      </div>
                    </div>
                    <div className="flex justify-center pt-8">
                      <div className="bg-[#537cd9] w-fit font-semibold text-lg text-white rounded">
                        <Link
                          to={`/ads/${data.typeOfFraud}/${data.title}`}
                          type="submit"
                          className="py-3 px-6 flex gap-x-4 items-center"
                        >
                          View ad <FaArrowRightLong />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
