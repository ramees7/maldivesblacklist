import React, { useEffect, useState } from "react";
import { CiGrid2H, CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { IoEyeOutline, IoGridOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Modal from "../Details.jsx/Modal";

export default function Favourites() {
  const [isGridView, setIsGridView] = useState(true);
  const [sortOption, setSortOption] = useState("most-relevant");
  const [hoveredCardId, setHoveredCardId] = useState(null);

  useEffect(() => {
    // let sortedData = [...filteredFraudData];
    let sortedData;
    if (sortOption === "latest") {
      sortedData.sort(
        (a, b) => new Date(b.dateOfPosted) - new Date(a.dateOfPosted)
      );
    } else if (sortOption === "oldest") {
      sortedData.sort(
        (a, b) => new Date(a.dateOfPosted) - new Date(b.dateOfPosted)
      );
    }
    // setFilteredFraudData(sortedData);
    // }, [ sortOption,filteredFraudData]);
  }, [sortOption]);

  useEffect(() => {
    const handleResize = () => {
      const isMdOrSmaller = window.innerWidth <= 768; // Tailwind's md breakpoint is 768px
      if (isMdOrSmaller) {
        setIsGridView(true); // Always switch to grid view on smaller screens
      }
    };

    handleResize(); // Run the logic on initial load

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="py-10">
      <div className="flex justify-between w-full items-center mb-20">
        <h1 className="md:text-4xl text-3xl font-semibold  text-gray-700">
          Favourites
        </h1>
        <div className=" bg-[#537cd9] font-semibold text-lg text-white rounded ">
          <Link to={"/panel/package/"}>
            <button className="py-3 px-6 ">By the Package</button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between mb-6 flex-col lg:flex-row">
        <div className="text-lg font-semibold">
          <span className="text-gray-800 text-xl">1 Results</span>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center space-x-3 md:my-5 lg:my-0">
            <h1>Sort by:</h1>
            <select
              className=" px-2 h-[50px] outline-none"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="most-relevant" disabled className="">
                Most Relevant
              </option>
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsGridView(true)}
                className={`h-[50px] px-3 rounded ${
                  isGridView ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                <IoGridOutline className="text-2xl" />
              </button>
              <button
                onClick={() => setIsGridView(false)}
                className={`h-[50px] px-3 rounded ${
                  !isGridView ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                <CiGrid2H className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isGridView
            ? "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10"
            : "space-y-6  "
        }
          `}
      >
        <div
          className={`relative bg-white shadow-lg rounded-lg overflow-hidden  ${
            isGridView ? "" : "flex flex-row items-start px-10"
          }`}
          // onMouseEnter={() => setHoveredCardId(item.id)}
          // onMouseLeave={() => setHoveredCardId(null)}
        >
          <Link
            to={`/ads//`}
            className={`${
              isGridView ? "" : "flex w-full gap-x-10"
            } cursor-pointer`}
          >
            <div className="relative">
              <img
                src="https://cdn-icons-png.flaticon.com/512/91/91841.png"
                alt="fav image"
                className={`object-cover ${
                  isGridView ? "h-[200px] w-full" : "h-[300px] w-[400px]"
                }`}
              />
              {/* {hoveredCardId === item.id && (
              <div className="absolute inset-0  bg-black bg-opacity-50  flex items-center justify-center transition-opacity duration-300">
                <Carousel images={item.images} />
              </div>
            )} */}
            </div>

            {isGridView ? (
              <div className={`p-4 ${isGridView ? "" : "flex-1 "}`}>
                <div className="min-h-[80px] h-[8] max-h-fit">
                  <h2 className="font-semibold text-2xl">title</h2>
                  <h2 className="font-semibold text-lg">Fraud Types</h2>
                </div>
                <div className=" flex items-center justify-between text-gray-500 text-sm border-t-2 py-3">
                  <div className="flex items-center  gap-x-3">
                    <div
                      onClick={(e) => e.preventDefault()}
                      className="p-2 border-2 rounded-full "
                    >
                      <IoEyeOutline />
                      {/* <Modal data={item} isItemInCompare={isItemInCompare} /> */}
                    </div>

                    <button className="p-2 border-2 rounded-full mx-2 ">
                      {/* className={`p-2 border-2 rounded-full mx-2 ${
                   isItemInCompare
                      ? "bg-blue-500 text-white border-blue-500"
                      : "hover:text-[#537cd9] hover:border-[#537cd9]"
                  }`}
                  onClick={(e) => handleCompareClick(e, item)}
                > */}
                      <IoIosGitCompare />
                    </button>
                    {/* {showPopup && <ComparisonBox />} */}

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
                    <h3 className="text-md text-gray-500">10 views</h3>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full">
                <div className="h-[220px]  border-b w-full flex justify-center flex-col gap-4">
                  <h1 className="text-2xl font-semibold">opoohar.com fraud</h1>
                  <div className="px-4 py-1 bg-[#f2f2f2] w-fit">
                    <h1 className="text-base">F-Commerce Fraud</h1>
                  </div>
                </div>
                <div className="flex justify-between items-center h-[80px]">
                  <div className="flex gap-x-3 items-center">
                    <img
                      src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="profile "
                      className="w-[50px] h-[50px] rounded-full"
                    />
                    <h1 className="font-semibold">Developer</h1>
                  </div>
                  <div>
                    <button className="p-2 border-2 rounded-full mx-2 ">
                      {/* className={`p-2 border-2 rounded-full mx-2 ${
                   isItemInCompare
                      ? "bg-blue-500 text-white border-blue-500"
                      : "hover:text-[#537cd9] hover:border-[#537cd9]"
                  }`}
                  onClick={(e) => handleCompareClick(e, item)}
                > */}
                      <IoIosGitCompare />
                    </button>
                    {/* {showPopup && <ComparisonBox />} */}
                    <button
                      className="hover:text-[#537cd9] hover:border-[#537cd9] p-2 border-2 rounded-full "
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <CiHeart />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
