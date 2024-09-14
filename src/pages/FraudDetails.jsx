import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { TbBulb } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import FraudTypes from "../components/Details.jsx/FraudTypes";
import ClassifiedAds from "../components/Details.jsx/ClassifiedAds";
import { discoverDataContext } from "../Context/ContextShares";

export default function FraudDetails({ lists }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationPath, setLocationPath] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [filteredFraudData, setFilteredFraudData] = useState([]);

  const { discoverData, setDiscoverData } = useContext(discoverDataContext);

  const location = useLocation();
  useEffect(() => {
    setLocationPath(location.pathname.slice(5));
  }, []);

  useEffect(() => {
    if (lists) {
      setFilteredData(lists?.filter((item) => item.link === locationPath));
    }
  }, [lists]);

  // const data = [
  //   {
  //     id: 1,
  //     images: [
  //       "https://img.freepik.com/free-photo/fraud-word-magnifying-glass_23-2148783089.jpg",
  //       "https://miro.medium.com/v2/resize:fit:768/1*9LjCJPuRo52sPNxkvTX_WA.jpeg",
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFiQLSbtL-YNbxEzF5S62mphQ90kXpfZWfaA&s",
  //     ],
  //     title: "Makeovers by Anmon",
  //     description:
  //       "Makeovers by Anmon is SCAAAMM!! Dont take any services from them.",
  //     views: 1,
  //     dateOfPosted: "10",
  //     typeOfFraud: "Scammer",
  //     detailedDescription: "acjdj,s dsjkc nsdjcnsdj sdj jndj ",
  //     reportedUser: "name",
  //     userCurrentStatus: "",
  //     joinedDate: "",
  //   },
  //   {
  //     id: 2,
  //     images: [
  //       "https://www.stampli.com/wp-content/uploads/2019/11/SPL_Accounts-Payable-Fraud_Hero-1024x537.png",
  //       "https://via.placeholder.com/150/FFFF00/000000?text=Second+Image",
  //       "https://via.placeholder.com/150/00FF00/000000?text=Third+Image",
  //     ],
  //     title: "Freelance work online through Amazon platform",
  //     description:
  //       "Respected authority, I want to report regarding this website. They scammed me.",
  //     views: 1,
  //     dateOfPosted: "10",
  //     typeOfFraud: "Shop Fraud",
  //     detailedDescription: "acjdj,s dsjkc nsdjcnsdj sdj jndj ",
  //     reportedUser: "name",
  //     userCurrentStatus: "",
  //     joinedDate: "",
  //   },
  //   {
  //     id: 3,
  //     images: [
  //       "https://callcenterstudio.com/wp-content/uploads/2023/09/Call-Center-Fraud.jpg",
  //       "https://via.placeholder.com/150/FF0000/FFFFFF?text=Second+Image",
  //       "https://via.placeholder.com/150/0000FF/808080?text=Third+Image",
  //     ],
  //     title: "Scammed with me",
  //     description:
  //       "IMF Code is required for this transaction to be completed successfully.",
  //     views: 20,
  //     dateOfPosted: "10",
  //     typeOfFraud: "Scammer",
  //     detailedDescription: "acjdj,s dsjkc nsdjcnsdj sdj jndj ",
  //     reportedUser: "name",
  //     userCurrentStatus: "",
  //     joinedDate: "",
  //   },
  // ];

  useEffect(() => {
    if (filteredData.length > 0) {
      // Assuming filteredData contains an array and you want to match titles
      const filtered = discoverData.filter((item) =>
        filteredData.some((fd) => fd.title === item.typeOfFraud)
      );
      setFilteredFraudData(filtered);
    } else {
      setFilteredFraudData([]);
    }
  }, [filteredData]);

  // useEffect(() => {
  //   if (filteredData.length > 0) {
  //     const filteredFraud = data.filter((item) => {
  //       return filteredData.some((filteredItem) =>
  //         item.typeOfFraud === filteredItem.typeOfFraud
  //       );
  //     });
  //     setFilteredFraudData(filteredFraud);
  //   }
  // }, [filteredData]);
  // console.log(filteredFraudData);

  return (
    <div>
      <div className="xl:px-48 lg:px-20 md:px-12 px-10 bg-[#f2f2f2] py-6">
        <div className=" flex items-center gap-x-2  border-0 ">
          <Link to={"/"}>
            <h2 className="text-black hover:text-yellow-500 hover:cursor-pointer">
              Home
            </h2>
          </Link>
          <IoIosArrowForward className="text-yellow-500" />
          <h2 className="text-gray-500">About</h2>
        </div>
      </div>
      <div className="xl:px-48 lg:px-20 md:px-12 px-10 bg-[#d5e3ee] py-6 ">
        <div className="flex bg-white items-center p-3 rounded-lg">
          <TbBulb className="text-4xl bg-[#d5e3ee] p-2 rounded-lg" />
          <input
            type="text"
            placeholder="I'm looking for..."
            className="w-full px-4 py-2 placeholder-black outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="xl:px-48 lg:px-20 md:px-12 px-10 bg-[#f2f2f2] pt-20">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-3 hidden lg:block">
            <FraudTypes data={filteredFraudData} allData={discoverData} />
          </div>
          <div className="lg:col-span-9 col-span-12">
            <ClassifiedAds lists={lists} allData={discoverData} />
            {/* <ClassifiedAds data={filteredFraudData} allData={discoverData} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
