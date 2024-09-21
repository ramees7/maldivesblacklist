import React, { useContext, useEffect, useState } from "react";
import {
  compareDataContext,
  discoverDataContext,
  selectedFraudDetailContext,
} from "../../Context/ContextShares";
import { IoEyeOutline, IoPrintOutline } from "react-icons/io5";
import { CiClock1, CiHeart } from "react-icons/ci";
import { GoAlertFill } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { IoIosChatboxes, IoIosGitCompare } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { PiWarningDiamond } from "react-icons/pi";
import ComparisonBox from "../Details.jsx/ComparisonBox";
import faqBg from "../../assets/images/faq_banner.jpg";
import ReportAbuseModal from "../Modals/ReportAbuseModal";
import ChatModal from "../Modals/ChatModal";

export default function AdsDetails() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const { discoverData, setDiscoverData } = useContext(discoverDataContext);
  const { compareData, setCompareData } = useContext(compareDataContext);
  const [showPopup, setShowPopup] = useState(false);

  const fullPath = decodeURIComponent(location.pathname.split("/")[3]);

  useEffect(() => {
    if (discoverData && fullPath) {
      const dataArray = discoverData.filter((item) => item.title === fullPath);
      setData(dataArray[0]);
    }
  }, [location, discoverData, fullPath]);

  const handleCompareClick = (e) => {
    e.preventDefault();

    const isItemInCompare = compareData.some(
      (compareItem) => compareItem.id === data.id
    );

    if (isItemInCompare) {
      const updatedCompareData = compareData.filter(
        (compareItem) => compareItem.id !== data.id
      );
      setCompareData(updatedCompareData);
    } else {
      setCompareData([...compareData, data]);
    }

    setShowPopup(true);
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

  const getTimeDifference = (joinedDate) => {
    const postedDate = new Date(joinedDate);
    const currentDate = new Date();

    const diffInMilliseconds = currentDate - postedDate;
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

    if (diffInDays < 30) {
      return diffInDays === 1 ? "1 day ago" : `${diffInDays} days ago`;
    } else if (diffInDays < 365) {
      const diffInMonths = Math.floor(diffInDays / 30);
      return diffInMonths === 1 ? "1 month ago" : `${diffInMonths} months ago`;
    } else {
      const diffInYears = Math.floor(diffInDays / 365);
      return diffInYears === 1 ? "1 year ago" : `${diffInYears} years ago`;
    }
  };

  const isItemInCompare = compareData.some(
    (compareItem) => compareItem.id === data.id
  );

  // handle Print

  const handlePrint = () => {
    const printContent = document.createElement("div");

    // Add the website name and logo
    printContent.innerHTML = `
      <div style="display:flex ; justify-content:center; align-items:center ; height:100% ;flex-direction: column;">
        <h1 style="font-weight:800;">Maldives Black List</h1></br>
        <h2>Type Of Fraud : ${data?.typeOfFraud}</h2>
        <h2>Title : ${data?.title}</h2>
        <h2>Description : ${data?.description}</h2>
        <h2>Reported User : ${data?.reportedUser.toUpperCase()}</h2>
      </div>
    `;

    // Add the images
    data?.images.forEach((image, index) => {
      printContent.innerHTML += `
        <div style="page-break-after: always; text-align: center;">
          <img src="${image}" alt="Image ${
        index + 1
      }" style="width: 100%; max-width: 600px; height:100%"/>
        </div>
      `;
    });

    // Create a new window for printing
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
      <html>
        <head>
          <title>Print Document</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            img { max-width: 100%; height: auto; }
          </style>
        </head>
        <body>${printContent.innerHTML}</body>
      </html>
    `);
    newWindow.document.close();
    newWindow.print();
    newWindow.close();
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-5 py-8">
        <div className="md:col-span-8 col-span-12 flex flex-col justify-between bg-white shadow-md p-8 rounded-lg">
          <div>
            <div className="flex justify-between md:pe-8 items-center pb-8">
              <h3 className="text-gray-500 text-md flex items-center gap-x-2">
                <CiClock1 />
                {data?.joinedDate && getTimeDifference(data?.joinedDate)}
              </h3>
              <h3 className="text-gray-500 text-md flex items-center gap-x-2">
                <IoEyeOutline />
                {data?.views > 1
                  ? `${data?.views} views `
                  : `${data?.views} view`}
              </h3>
            </div>
            <div>
              <h2 className="md:text-3xl text-2xl font-semibold pb-8">
                {data?.title}
              </h2>
              <h1 className="md:text-xl text-lg border-blue-500 py-1 px-3 rounded-lg border-2 w-fit mb-8">
                {data?.typeOfFraud}
              </h1>
              <h2 className="text-2xl font-semibold text-gray-700 pb-5">
                {data?.description}
              </h2>
              <h2 className="text-lg text-gray-700 flex gap-x-2 items-center pb-5">
                <GoAlertFill className="text-yellow-500" /> FRAUD ALERT
              </h2>
              <h2 className="text-md text-gray-700 pb-5">
                {data?.detailedDescription}
              </h2>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 col-span-12">
          <div className="bg-white shadow-md p-8 rounded-lg mb-10">
            <div className="grid grid-cols-7">
              <div className="col-span-2 flex justify-center">
                <AiOutlineUser className="text-5xl text-[#f2f2f2] p-2 rounded-full bg-[#d5e3ee]" />
              </div>
              <div className="col-span-5 flex justify-start">
                <div>
                  <h1 className="text-xl font-semibold mb-2">
                    {data?.reportedUser}
                  </h1>
                  <h3 className="mb-2">
                    Member since:{" "}
                    {data?.joinedDate && getTimeDifference(data?.joinedDate)}
                  </h3>
                  <Link
                    to={`/user/${data.reportedUser}/`}
                    className="underline text-blue-500 font-semibold"
                  >
                    See all ads
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-x-4 text-white pt-20">
              <ChatModal/>
              <button className="py-3 w-[42%] bg-[#537cd9] rounded-md flex items-center gap-x-2 justify-center">
                <MdEmail /> E-mail
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md p-8 rounded-lg mb-8">
            <div className="flex gap-x-4  justify-center">
              <div className="border-2 rounded-full text-2xl p-3 hover:text-[#537cd9] hover:border-[#537cd9]">
                <CiHeart />
              </div>
              <div className="">
                <button
                  className={`border-2 rounded-full p-3 text-2xl  ${
                    isItemInCompare
                      ? "bg-blue-500 text-white border-blue-500"
                      : "hover:text-[#537cd9] hover:border-[#537cd9]"
                  }`}
                  onClick={handleCompareClick}
                >
                  <IoIosGitCompare />
                </button>
                {showPopup && <ComparisonBox />}
              </div>
              <div
                className="border-2 rounded-full p-3 text-2xl hover:text-[#537cd9] hover:border-[#537cd9] cursor-pointer"
                onClick={handlePrint}
              >
                <IoPrintOutline />
              </div>
            </div>
          </div>
          <ReportAbuseModal/>
          
        </div>
      </div>
    </div>
  );
}
