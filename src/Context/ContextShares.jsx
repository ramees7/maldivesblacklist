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
      title: "Makeovers by Anmon: Fraud Warning old",
      description: "Makeovers by Anmon is a scam! Avoid their services.",
      views: 10,
      dateOfPosted: "2001-09-19",
      typeOfFraud: "Scammer",
      detailedDescription: "Detailed report about the scam activity.",
      reportedUser: "ramees",
      userCurrentStatus: 10,
      joinedDate: "2001-09-18",
    },
    {
      id: 2,
      images: [
        "https://www.stampli.com/wp-content/uploads/2019/11/SPL_Accounts-Payable-Fraud_Hero-1024x537.png",
        "https://via.placeholder.com/150/FFFF00/000000?text=Second+Image",
        "https://via.placeholder.com/150/00FF00/000000?text=Third+Image",
      ],
      title: "Amazon Freelance Scam new",
      description: "Reported fraud for freelance work on Amazon.",
      views: 1,
      dateOfPosted: "2024-02-19",
      typeOfFraud: "Shop Fraud",
      detailedDescription: "Website took my money without any services.",
      reportedUser: "ramees",
      userCurrentStatus: "",
      joinedDate: "2024-02-19",
    },
    {
      id: 3,
      images: [
        "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg",
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Second+Image",
        "https://via.placeholder.com/150/0000FF/808080?text=Third+Image",
      ],
      title: "IMF Code Fraud Alert",
      description: "IMF code required for fake transactions.",
      views: 20,
      dateOfPosted: "2024-09-19",
      typeOfFraud: "Scammer",
      detailedDescription: "Scammers asking for IMF code for money transfers.",
      reportedUser: "jithin",
      userCurrentStatus: "",
      joinedDate: "2024-08-29",
    },
    {
      id: 4,
      images: [
        "https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg",
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Second+Image",
        "https://via.placeholder.com/150/0000FF/808080?text=Third+Image",
      ],
      title: "Fake Government Website Scam",
      description: "Fraud reported on a fake government website.",
      views: 20,
      dateOfPosted: "2023-06-19",
      typeOfFraud: "Fake Government Website",
      detailedDescription: "Fake government site to trick users for money.",
      reportedUser: "gopika",
      userCurrentStatus: "",
      joinedDate: "2023-06-29",
    },
    {
      id: 5,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8SdsR9K6qNNxkExuSRl5RWtaas2EIeFLl8A&s",
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Second+Image",
        "https://via.placeholder.com/150/0000FF/808080?text=Third+Image",
      ],
      title: "Fake Government Follower Scam",
      description: "Scammers posing as government followers.",
      views: 20,
      dateOfPosted: "2022-09-19",
      typeOfFraud: "Fake Government Website",
      detailedDescription: "Fraudulent activity mimicking government support.",
      reportedUser: "rashid",
      userCurrentStatus: "",
      joinedDate: "2023-09-29",
    },
    {
      id: 6,
      images: [
        "https://static.vecteezy.com/system/resources/thumbnails/023/033/609/small_2x/wonderful-mushroom-wallpaper-fantasy-wallpaper-4k-mushroom-light-fantasy-mushroom-jungle-generative-ai-photo.jpeg",
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Second+Image",
        "https://via.placeholder.com/150/0000FF/808080?text=Third+Image",
      ],
      title: "Scam Report: IMF Code Required",
      description: "Scammer requested IMF code for fake transaction.",
      views: 20,
      dateOfPosted: "2024-02-19",
      typeOfFraud: "Scammer",
      detailedDescription: "Transaction fraud involving fake IMF code.",
      reportedUser: "gopika",
      userCurrentStatus: "",
      joinedDate: "2024-08-29",
    },
    {
      id: 7,
      images: [
        "https://t4.ftcdn.net/jpg/05/50/33/47/360_F_550334715_0d2cdaljV4Xd3x7yVUhRxfmLLEUyMdXr.jpg",
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Second+Image",
        "https://via.placeholder.com/150/0000FF/808080?text=Third+Image",
      ],
      title: "IMF Code Fraud by Scammers",
      description: "IMF code requested for fraud.",
      views: 20,
      dateOfPosted: "2020-09-19",
      typeOfFraud: "Scammer",
      detailedDescription: "Fake transaction requiring IMF code.",
      reportedUser: "sidharth",
      userCurrentStatus: "",
      joinedDate: "2024-08-29",
    },
    {
      id: 8,
      images: [
        "https://img.freepik.com/free-photo/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai_188544-15662.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726531200&semt=ais_hybrid",
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Second+Image",
        "https://via.placeholder.com/150/0000FF/808080?text=Third+Image",
      ],
      title: "Scammed by IMF Code Fraud",
      description: "Fraudulent request for IMF code.",
      views: 20,
      dateOfPosted: "2024-04-19",
      typeOfFraud: "Scammer",
      detailedDescription: "IMF code fraud encountered.",
      reportedUser: "ramees",
      userCurrentStatus: "",
      joinedDate: "2024-08-29",
    },

    {
      id: 9,
      images: [
        "https://i.pinimg.com/736x/d9/e3/c4/d9e3c47736b67051378f4a242072c1c6.jpg",
        "https://via.placeholder.com/150/FFFF00/000000?text=Image+2",
        "https://via.placeholder.com/150/00FF00/000000?text=Image+3",
      ],
      title: "Untrustworthy Seller",
      description: "Beware of fraudulent sellers offering fake products.",
      views: 34,
      dateOfPosted: "2024-09-19",
      typeOfFraud: "Shop Fraud",
      detailedDescription:
        "The seller took my money and delivered fake products.",
      reportedUser: "jithin",
      userCurrentStatus: "",
      joinedDate: "2023-08-01",
    },
    {
      id: 10,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmtty4CClnSpo0hfGDIyOitnFTm169sUf4kQ&s",
        "https://via.placeholder.com/150/0000FF/FFFFFF?text=Image+2",
        "https://via.placeholder.com/150/FFFF00/FFFFFF?text=Image+3",
      ],
      title: "Fake Job Offer",
      description:
        "This company offers fake job interviews and scams applicants.",
      views: 120,
      dateOfPosted: "2024-09-19",
      typeOfFraud: "Scammer",
      detailedDescription:
        "I paid a fee for a fake job interview and got no response.",
      reportedUser: "jithin",
      userCurrentStatus: "",
      joinedDate: "2023-07-25",
    },
    {
      id: 11,
      images: [
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/18acd369-ea44-471b-aeeb-9e6e8e3ed9d5/dfn7itv-c1956eb8-07b5-4877-bbda-87707790ed81.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE4YWNkMzY5LWVhNDQtNDcxYi1hZWViLTllNmU4ZTNlZDlkNVwvZGZuN2l0di1jMTk1NmViOC0wN2I1LTQ4NzctYmJkYS04NzcwNzc5MGVkODEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ZhuzitUz9DPtFYLbcUAVndnZ21ZIyDoqRh-gD5OOEeM",
        "https://via.placeholder.com/150/FF0000/000000?text=Image+2",
        "https://via.placeholder.com/150/00FFFF/FFFFFF?text=Image+3",
      ],
      title: "Fraudulent Charity",
      description: "This fake charity took donations and disappeared.",
      views: 58,
      dateOfPosted: "2024-09-19",
      typeOfFraud: "Fake Charity",
      detailedDescription:
        "They pretended to collect money for disaster relief.",
      reportedUser: "rashid",
      userCurrentStatus: "",
      joinedDate: "2023-09-10",
    },
    {
      id: 12,
      images: [
        "https://t3.ftcdn.net/jpg/06/59/38/36/360_F_659383627_UtpH18oGF0QlsEkhg0Sn5zVJIVlaoBsg.jpg",
        "https://via.placeholder.com/150/FF00FF/000000?text=Image+2",
        "https://via.placeholder.com/150/FFFF00/FFFFFF?text=Image+3",
      ],
      title: "Credit Card Scam",
      description:
        "Beware of this scam asking for credit card details over email.",
      views: 150,
      dateOfPosted: "2024-09-19",
      typeOfFraud: "Phishing",
      detailedDescription:
        "They pretend to be from the bank and ask for card details.",
      reportedUser: "ramees",
      userCurrentStatus: "",
      joinedDate: "2023-06-05",
    },
    {
      id: 13,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDRyWbfimbirneLIDb48CQku8aPpIoa_phQ&s",
        "https://via.placeholder.com/150/FF0000/000000?text=Image+2",
        "https://via.placeholder.com/150/00FFFF/FFFFFF?text=Image+3",
      ],
      title: "E-Commerce Fraud",
      description:
        "Ordered an item but never received it, and the seller vanished.",
      views: 43,
      dateOfPosted: "2024-09-19",
      typeOfFraud: "E-Commerce-Fraud",
      detailedDescription: "The seller stopped responding after payment.",
      reportedUser: "ramees",
      userCurrentStatus: "",
      joinedDate: "2023-04-19",
    },
    {
      id: 14,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKAbR1ftXAMzmyvO4JaJQ8R_tsQugvWKaqmQ&s",
        "https://via.placeholder.com/150/FFFF00/000000?text=Image+2",
        "https://via.placeholder.com/150/FF00FF/FFFFFF?text=Image+3",
      ],
      title: "Investment Scam",
      description: "Lost money to a fraudulent investment scheme.",
      views: 210,
      dateOfPosted: "2024-09-19",
      typeOfFraud: "Investment Fraud",
      detailedDescription:
        "Promised high returns but disappeared after taking the money.",
      reportedUser: "ramees",
      userCurrentStatus: "",
      joinedDate: "2023-05-15",
    },
    {
      id: 15,
      images: [
        "https://wallpapers.com/images/hd/retro-colorful-nightscape-city-buildings-4k-obfdnkrnmb0v5keb.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJ0kE3DEZgYbIiCPI0OOj4eUZJeOCA073Yw&s",
        "https://via.placeholder.com/150/FFFF00/FFFFFF?text=Image+3",
      ],
      title: "Fake Lottery Winner",
      description:
        "Received an email claiming I won a lottery, but it was a scam.",
      views: 97,
      dateOfPosted: "2024-09-19",
      typeOfFraud: "Scammer",
      detailedDescription:
        "They asked for personal details and bank info to claim the prize.",
      reportedUser: "ramees",
      userCurrentStatus: "",
      joinedDate: "2023-07-01",
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
