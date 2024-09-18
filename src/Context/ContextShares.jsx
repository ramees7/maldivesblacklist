import React, { createContext, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { GiRobber } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";

export const adsChangingContext = createContext();
export const discoverDataContext = createContext();
export const selectedTypeContext = createContext();
export const selectedFraudDetailContext = createContext();
export const compareDataContext = createContext();
export const fraudListsContext = createContext();

export default function ContextShares({ children }) {
  const [adsChanging, setAdsChanging] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedFraudDetail, setSelectedFraudDetail] = useState({});
  const [compareData, setCompareData] = useState([]);

  const dicoverDataAll = [
    {
      id: 1,
      images: [
        "https://img.freepik.com/free-photo/fraud-word-magnifying-glass_23-2148783089.jpg",
        "https://miro.medium.com/v2/resize:fit:768/1*9LjCJPuRo52sPNxkvTX_WA.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFiQLSbtL-YNbxEzF5S62mphQ90kXpfZWfaA&s",
      ],
      title: "Makeovers by Anmon dsd f fbjk j jkdfnj jfdn djjk jd",
      description:
        "Makeovers by Anmon is SCAAAMM!! Dont take any services from them.",
      views: 1,
      dateOfPosted: "10",
      typeOfFraud: "Scammer",
      detailedDescription: "acjdj,s dsjkc nsdjcnsdj sdj jndj ",
      reportedUser: "ramees",
      userCurrentStatus: 10,
      joinedDate: "",
    },
    {
      id: 2,
      images: [
        "https://www.stampli.com/wp-content/uploads/2019/11/SPL_Accounts-Payable-Fraud_Hero-1024x537.png",
        "https://via.placeholder.com/150/FFFF00/000000?text=Second+Image",
        "https://via.placeholder.com/150/00FF00/000000?text=Third+Image",
      ],
      title: "Freelance work online through Amazon platform",
      description:
        "Respected authority, I want to report regarding this website. They scammed me.",
      views: 1,
      dateOfPosted: "10",
      typeOfFraud: "Shop Fraud",
      detailedDescription: "acjdj,s dsjkc nsdjcnsdj sdj jndj ",
      reportedUser: "ramees",
      userCurrentStatus: "",
      joinedDate: "",
    },
    {
      id: 3,
      images: [
        "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg",
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Second+Image",
        "https://via.placeholder.com/150/0000FF/808080?text=Third+Image",
      ],
      title: "Scammed with me",
      description:
        "IMF Code is required for this transaction to be completed successfully.",
      views: 20,
      dateOfPosted: "10",
      typeOfFraud: "Scammer",
      detailedDescription: "acjdj,s dsjkc nsdjcnsdj sdj jndj ",
      reportedUser: "jithin",
      userCurrentStatus: "",
      joinedDate: "",
    },
    {
      id: 4,
      images: [
        "https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg",
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Second+Image",
        "https://via.placeholder.com/150/0000FF/808080?text=Third+Image",
      ],
      title: "Scammed with me",
      description:
        "IMF Code is required for this transaction to be completed successfully.",
      views: 20,
      dateOfPosted: "10",
      typeOfFraud: "Fake Government Website",
      detailedDescription: "acjdj,s dsjkc nsdjcnsdj sdj jndj ",
      reportedUser: "gopika",
      userCurrentStatus: "",
      joinedDate: "",
    },
    {
      id: 5,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8SdsR9K6qNNxkExuSRl5RWtaas2EIeFLl8A&s",
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Second+Image",
        "https://via.placeholder.com/150/0000FF/808080?text=Third+Image",
      ],
      title: "Scammed with me",
      description:
        "IMF Code is required for this transaction to be completed successfully.",
      views: 20,
      dateOfPosted: "10",
      typeOfFraud: "Fake Government Website",
      detailedDescription: "acjdj,s dsjkc nsdjcnsdj sdj jndj ",
      reportedUser: "rashid",
      userCurrentStatus: "",
      joinedDate: "",
    },
    {
      id: 6,
      images: [
        "https://static.vecteezy.com/system/resources/thumbnails/023/033/609/small_2x/wonderful-mushroom-wallpaper-fantasy-wallpaper-4k-mushroom-light-fantasy-mushroom-jungle-generative-ai-photo.jpeg",
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Second+Image",
        "https://via.placeholder.com/150/0000FF/808080?text=Third+Image",
      ],
      title: "Scammed with me",
      description:
        "IMF Code is required for this transaction to be completed successfully.",
      views: 20,
      dateOfPosted: "10",
      typeOfFraud: "Scammer",
      detailedDescription: "acjdj,s dsjkc nsdjcnsdj sdj jndj ",
      reportedUser: "gopika",
      userCurrentStatus: "",
      joinedDate: "",
    },
    {
      id: 7,
      images: [
        "https://t4.ftcdn.net/jpg/05/50/33/47/360_F_550334715_0d2cdaljV4Xd3x7yVUhRxfmLLEUyMdXr.jpg",
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Second+Image",
        "https://via.placeholder.com/150/0000FF/808080?text=Third+Image",
      ],
      title: "Scammed with me",
      description:
        "IMF Code is required for this transaction to be completed successfully.",
      views: 20,
      dateOfPosted: "10",
      typeOfFraud: "Scammer",
      detailedDescription: "acjdj,s dsjkc nsdjcnsdj sdj jndj ",
      reportedUser: "sidharth",
      userCurrentStatus: "",
      joinedDate: "",
    },
    {
      id: 8,
      images: [
        "https://img.freepik.com/free-photo/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai_188544-15662.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726531200&semt=ais_hybrid",
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Second+Image",
        "https://via.placeholder.com/150/0000FF/808080?text=Third+Image",
      ],
      title: "Scammed with me",
      description:
        "IMF Code is required for this transaction to be completed successfully.",
      views: 20,
      dateOfPosted: "10",
      typeOfFraud: "Scammer",
      detailedDescription: "acjdj,s dsjkc nsdjcnsdj sdj jndj ",
      reportedUser: "ramees",
      userCurrentStatus: "",
      joinedDate: "",
    },
    {
      id: 9,
      images: [
        "https://callcenterstudio.com/wp-content/uploads/2023/09/Call-Center-Fraud.jpg",
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Second+Image",
        "https://via.placeholder.com/150/0000FF/808080?text=Third+Image",
      ],
      title: "Scammed with me",
      description:
        "IMF Code is required for this transaction to be completed successfully.",
      views: 20,
      dateOfPosted: "10",
      typeOfFraud: "Scammer",
      detailedDescription: "acjdj,s dsjkc nsdjcnsdj sdj jndj ",
      reportedUser: "gopika",
      userCurrentStatus: "",
      joinedDate: "",
    },
    {
      id: 10,
      images: [
        "https://callcenterstudio.com/wp-content/uploads/2023/09/Call-Center-Fraud.jpg",
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Second+Image",
        "https://via.placeholder.com/150/0000FF/808080?text=Third+Image",
      ],
      title: "Scammed with me",
      description:
        "IMF Code is required for this transaction to be completed successfully.",
      views: 20,
      dateOfPosted: "10",
      typeOfFraud: "Fake Government Website",
      detailedDescription: "acjdj,s dsjkc nsdjcnsdj sdj jndj ",
      reportedUser: "ramees",
      userCurrentStatus: "",
      joinedDate: "",
    },
    {
      id: 11,
      images: [
        "https://callcenterstudio.com/wp-content/uploads/2023/09/Call-Center-Fraud.jpg",
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Second+Image",
        "https://via.placeholder.com/150/0000FF/808080?text=Third+Image",
      ],
      title: "Scammed with me",
      description:
        "IMF Code is required for this transaction to be completed successfully.",
      views: 20,
      dateOfPosted: "10",
      typeOfFraud: "Fraud Caller",
      detailedDescription: "acjdj,s dsjkc nsdjcnsdj sdj jndj ",
      reportedUser: "rashid",
      userCurrentStatus: "",
      joinedDate: "",
    },
    {
      id: 12,
      images: [
        "https://callcenterstudio.com/wp-content/uploads/2023/09/Call-Center-Fraud.jpg",
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Second+Image",
        "https://via.placeholder.com/150/0000FF/808080?text=Third+Image",
      ],
      title: "Scammed with me",
      description:
        "IMF Code is required for this transaction to be completed successfully.",
      views: 20,
      dateOfPosted: "10",
      typeOfFraud: "Fraud Caller",
      detailedDescription: "acjdj,s dsjkc nsdjcnsdj sdj jndj ",
      reportedUser: "jithin",
      userCurrentStatus: "",
      joinedDate: "",
    },
    {
      id: 13,
      images: [
        "https://callcenterstudio.com/wp-content/uploads/2023/09/Call-Center-Fraud.jpg",
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Second+Image",
        "https://via.placeholder.com/150/0000FF/808080?text=Third+Image",
      ],
      title: "Scammed with me",
      description:
        "IMF Code is required for this transaction to be completed successfully.",
      views: 20,
      dateOfPosted: "10",
      typeOfFraud: "E-Commerce-Fraud",
      detailedDescription: "acjdj,s dsjkc nsdjcnsdj sdj jndj ",
      reportedUser: "sidharth",
      userCurrentStatus: "",
      joinedDate: "",
    },
    {
      id: 14,
      images: [
        "https://callcenterstudio.com/wp-content/uploads/2023/09/Call-Center-Fraud.jpg",
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Second+Image",
        "https://via.placeholder.com/150/0000FF/808080?text=Third+Image",
      ],
      title: "Scammed with me",
      description:
        "IMF Code is required for this transaction to be completed successfully.",
      views: 20,
      dateOfPosted: "10",
      typeOfFraud: "E-Commerce-Fraud",
      detailedDescription: "acjdj,s dsjkc nsdjcnsdj sdj jndj ",
      reportedUser: "jithin",
      userCurrentStatus: "",
      joinedDate: "",
    },
  ];

  const lists = [
    {
      title: "E-Commerce-Fraud",
      link: "e-commerce-fraud",
      icon: <MdOutlineShoppingCart />,
    },
    {
      title: "F-Commerce-Fraud",
      link: "f-commerce-fraud",
      icon: <FaFacebook />,
    },
    {
      title: "Fraud Caller",
      link: "fraud-caller",
      icon: <FaPhoneAlt />,
    },
    {
      title: "Fake Government Website",
      link: "fake-govt-website",
      icon: <FaRegEye />,
    },
    {
      title: "Scammer",
      link: "scammer",
      icon: <GiRobber />,
    },
    {
      title: "Shop Fraud",
      link: "shop-fraud",
      icon: <IoMdHome />,
    },
    {
      title: "Other Issues",
      link: "other-issues",
      icon: <CgMoreO />,
    },
  ];

  const updatedLists = lists.map((listItem) => ({
    ...listItem,
    count: dicoverDataAll.filter((item) => item.typeOfFraud === listItem.title)
      .length,
  }));
  const [fraudLists, setFraudLists] = useState(updatedLists);
  const [discoverData, setDiscoverData] = useState(dicoverDataAll);

  return (
    <div>
      <discoverDataContext.Provider value={{ discoverData, setDiscoverData }}>
        <adsChangingContext.Provider value={{ adsChanging, setAdsChanging }}>
          <selectedTypeContext.Provider
            value={{ selectedType, setSelectedType }}
          >
            <compareDataContext.Provider
              value={{ compareData, setCompareData }}
            >
              <selectedFraudDetailContext.Provider
                value={{ selectedFraudDetail, setSelectedFraudDetail }}
              >
                <fraudListsContext.Provider
                  value={{ fraudLists, setFraudLists }}
                >
                  {children}
                </fraudListsContext.Provider>
              </selectedFraudDetailContext.Provider>
            </compareDataContext.Provider>
          </selectedTypeContext.Provider>
        </adsChangingContext.Provider>
      </discoverDataContext.Provider>
    </div>
  );
}
