import React, { createContext, useState } from "react";

export const adsChangingContext = createContext();
export const discoverDataContext = createContext();
export const selectedTypeContext = createContext();

export default function ContextShares({ children }) {
  const [adsChanging, setAdsChanging] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const dicoverDataAll = [
    {
      id: 1,
      images: [
        "https://img.freepik.com/free-photo/fraud-word-magnifying-glass_23-2148783089.jpg",
        "https://miro.medium.com/v2/resize:fit:768/1*9LjCJPuRo52sPNxkvTX_WA.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFiQLSbtL-YNbxEzF5S62mphQ90kXpfZWfaA&s",
      ],
      title: "Makeovers by Anmon",
      description:
        "Makeovers by Anmon is SCAAAMM!! Dont take any services from them.",
      views: 1,
      dateOfPosted: "10",
      typeOfFraud: "Scammer",
      detailedDescription: "acjdj,s dsjkc nsdjcnsdj sdj jndj ",
      reportedUser: "name",
      userCurrentStatus: "",
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
      reportedUser: "name",
      userCurrentStatus: "",
      joinedDate: "",
    },
    {
      id: 3,
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
      reportedUser: "name",
      userCurrentStatus: "",
      joinedDate: "",
    },
    {
      id: 4,
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
      reportedUser: "name",
      userCurrentStatus: "",
      joinedDate: "",
    },
    {
      id: 5,
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
      reportedUser: "name",
      userCurrentStatus: "",
      joinedDate: "",
    },
    {
      id: 6,
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
      reportedUser: "name",
      userCurrentStatus: "",
      joinedDate: "",
    },
    {
      id: 7,
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
      reportedUser: "name",
      userCurrentStatus: "",
      joinedDate: "",
    },
    {
      id: 8,
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
      reportedUser: "name",
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
      reportedUser: "name",
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
      typeOfFraud: "Scammer",
      detailedDescription: "acjdj,s dsjkc nsdjcnsdj sdj jndj ",
      reportedUser: "name",
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
      typeOfFraud: "Scammer",
      detailedDescription: "acjdj,s dsjkc nsdjcnsdj sdj jndj ",
      reportedUser: "name",
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
      typeOfFraud: "Scammer",
      detailedDescription: "acjdj,s dsjkc nsdjcnsdj sdj jndj ",
      reportedUser: "name",
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
      typeOfFraud: "Scammer",
      detailedDescription: "acjdj,s dsjkc nsdjcnsdj sdj jndj ",
      reportedUser: "name",
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
      typeOfFraud: "Scammer",
      detailedDescription: "acjdj,s dsjkc nsdjcnsdj sdj jndj ",
      reportedUser: "name",
      userCurrentStatus: "",
      joinedDate: "",
    },
  ];

  const [discoverData, setDiscoverData] = useState(dicoverDataAll);

  return (
    <div>
      <discoverDataContext.Provider value={{ discoverData, setDiscoverData }}>
        <adsChangingContext.Provider value={{ adsChanging, setAdsChanging }}>
          <selectedTypeContext.Provider
            value={{ selectedType, setSelectedType }}
          >
            {children}
          </selectedTypeContext.Provider>
        </adsChangingContext.Provider>
      </discoverDataContext.Provider>
    </div>
  );
}
