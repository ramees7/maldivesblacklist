// import React, { useContext, useEffect, useState } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import {
//   adsChangingContext,
//   fraudListsContext,
//   selectedTypeContext,
// } from "../../Context/ContextShares";

// export default function FraudTypes({ offcanvas, data, allData }) {
//   const [selectedFraudType, setSelectedFraudType] = useState("Any");
//   const [displayedData, setDisplayedData] = useState(data);
//   const navigate = useNavigate();
//   const { fraudType } = useParams();
//   const { adsChanging, setAdsChanging } = useContext(adsChangingContext);
//   const { selectedType, setSelectedType } = useContext(selectedTypeContext);
//   const { fraudLists, setFraudLists } = useContext(fraudListsContext);
//   const location = useLocation();

//   // const fraudOptions = [
//   //   { label: "Any", count: allData.length, link: "all", disabled: false },
//   //   {
//   //     label: "F Commerce Fraud",
//   //     count: allData.filter((item) => item.typeOfFraud === "F Commerce Fraud")
//   //       .length,
//   //     link: "f-commerce-fraud",
//   //     disabled:
//   //       allData.filter((item) => item.typeOfFraud === "F Commerce Fraud")
//   //         .length === 0,
//   //   },
//   //   {
//   //     label: "Scammer",
//   //     count: allData.filter((item) => item.typeOfFraud === "Scammer").length,
//   //     link: "scammer",
//   //     disabled:
//   //       allData.filter((item) => item.typeOfFraud === "Scammer").length === 0,
//   //   },
//   //   {
//   //     label: "E Commerce Fraud",
//   //     count: allData.filter((item) => item.typeOfFraud === "E Commerce Fraud")
//   //       .length,
//   //     link: "e-commerce-fraud",
//   //     disabled:
//   //       allData.filter((item) => item.typeOfFraud === "E Commerce Fraud")
//   //         .length === 0,
//   //   },
//   //   {
//   //     label: "Fraud Caller",
//   //     count: allData.filter((item) => item.typeOfFraud === "Fraud Caller")
//   //       .length,
//   //     link: "fraud-caller",
//   //     disabled:
//   //       allData.filter((item) => item.typeOfFraud === "Fraud Caller").length ===
//   //       0,
//   //   },
//   //   {
//   //     label: "Other Issues",
//   //     count: allData.filter((item) => item.typeOfFraud === "Other Issues")
//   //       .length,
//   //     link: "other-issues",
//   //     disabled:
//   //       allData.filter((item) => item.typeOfFraud === "Other Issues").length ===
//   //       0,
//   //   },
//   //   {
//   //     label: "Shop Fraud",
//   //     count: allData.filter((item) => item.typeOfFraud === "Shop Fraud").length,
//   //     link: "shop-fraud",
//   //     disabled:
//   //       allData.filter((item) => item.typeOfFraud === "Shop Fraud").length ===
//   //       0,
//   //   },
//   //   {
//   //     label: "Fake Government Website",
//   //     count: allData.filter((item) => item.typeOfFraud === "Fake Government Website").length,
//   //     disabled:
//   //       allData.filter((item) => item.typeOfFraud === "Fake Government Website").length ===
//   //       0,
//   //     link: "fake-govt-website",
//   //   },
//   // ];
  

//   useEffect(() => {
//     const path = location.pathname.split("/")[2];
//     const foundOption = fraudLists.find((option) => option.link === path);

//     if (foundOption) {
//       setSelectedFraudType(foundOption.title);
//       if (foundOption.title === "Any") {
//         setDisplayedData(allData);
//         setAdsChanging(allData);
//       } else {
//         const filteredData = allData.filter(
//           (item) => item.typeOfFraud === foundOption.title
//         );
//         setDisplayedData(filteredData);
//         setAdsChanging(filteredData);
//       }
//     } else {
//       setSelectedFraudType("Any");
//       setDisplayedData(allData);
//       setAdsChanging(allData);
//     }
//   }, [location.pathname, allData]);

//   useEffect(() => {
//     setSelectedType(selectedFraudType);
//   }, [selectedFraudType]);

//   const handleSelection = (title, link) => {
//     setSelectedFraudType(title);
//     if (title === "Any") {
//       setDisplayedData(allData);
//       setAdsChanging(allData);
//     } else {
//       const filteredData = allData.filter((item) => item.typeOfFraud === title);
//       setDisplayedData(filteredData);
//       setAdsChanging(filteredData);
//     }

//     navigate(`/ads/${link}/`);
//   };

//   const visibleOptions = fraudLists.filter(
//     (option) =>
//       selectedFraudType === "Any" ||
//       option.title === "Any" ||
//       option.title === selectedFraudType
//   );

//   return (
//     <div
//       className={`px-4 py-7 ${
//         offcanvas ? "" : "bg-white rounded-lg shadow-md"
//       }`}
//     >
//       <h2 className="text-lg font-bold mb-5 text-gray-700">Fraud Types</h2>
//       <div className="space-y-2">
//         {visibleOptions.map((option, index) => (
//           <div key={index} className="flex items-center space-x-2 ">
//             <input
//               type="radio"
//               id={option.title}
//               name="fraudType"
//               value={option.title}
//               checked={selectedFraudType === option.title}
//               onChange={() => handleSelection(option.title, option.link)}
//               disabled={option.disabled}
//               className={`h-4 w-4  ${
//                 option.disabled
//                   ? "text-gray-300"
//                   : "text-blue-600 cursor-pointer"
//               }`}
//             />
//             <label
//               htmlFor={option.title}
//               className={`ml-2 text-gray-700  ${
//                 option.disabled ? "text-gray-300 " : "cursor-pointer"
//               }`}
//             >
//               {option.title} ({option.count})
//             </label>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }










import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  adsChangingContext,
  fraudListsContext,
  selectedTypeContext,
} from "../../Context/ContextShares";

export default function FraudTypes({ offcanvas, data, allData }) {
  const [selectedFraudType, setSelectedFraudType] = useState("Any");
  const [displayedData, setDisplayedData] = useState(data);
  const navigate = useNavigate();
  const { fraudType } = useParams();
  const { adsChanging, setAdsChanging } = useContext(adsChangingContext);
  const { selectedType, setSelectedType } = useContext(selectedTypeContext);
  const { fraudLists, setFraudLists } = useContext(fraudListsContext);
  const location = useLocation();

  // Function to add the "Any" option to the fraudLists array
  const addAnyOption = (fraudLists) => [
    {
      title: "Any",
      count: allData.length, // Count for all fraud types combined
      link: "all", // Link for the "Any" option
      disabled: allData.length === 0, // Disable if there's no data
    },
    ...fraudLists,
  ];

  // UseEffect to update the selected fraud type based on the URL
  useEffect(() => {
    const path = location.pathname.split("/")[2];
    const updatedFraudLists = addAnyOption(fraudLists); // Add "Any" option
    const foundOption = updatedFraudLists.find((option) => option.link === path);

    if (foundOption) {
      setSelectedFraudType(foundOption.title);
      if (foundOption.title === "Any") {
        setDisplayedData(allData);
        setAdsChanging(allData);
      } else {
        const filteredData = allData.filter(
          (item) => item.typeOfFraud === foundOption.title
        );
        setDisplayedData(filteredData);
        setAdsChanging(filteredData);
      }
    } else {
      setSelectedFraudType("Any");
      setDisplayedData(allData);
      setAdsChanging(allData);
    }
  }, [location.pathname, allData]);

  // Update selectedType when fraud type changes
  useEffect(() => {
    setSelectedType(selectedFraudType);
  }, [selectedFraudType]);

  // Handle user selecting a fraud type
  const handleSelection = (title, link) => {
    setSelectedFraudType(title);
    if (title === "Any") {
      setDisplayedData(allData);
      setAdsChanging(allData);
    } else {
      const filteredData = allData.filter((item) => item.typeOfFraud === title);
      setDisplayedData(filteredData);
      setAdsChanging(filteredData);
    }

    navigate(`/ads/${link}/`);
  };

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleToTop();
  }, [location]);


  // Update visible options for radio buttons
  const updatedFraudLists = addAnyOption(fraudLists); // Add "Any" option here
  const visibleOptions = updatedFraudLists.filter(
    (option) =>
      selectedFraudType === "Any" ||
      option.title === "Any" ||
      option.title === selectedFraudType
  );

  return (
    <div
      className={`px-4 py-7 ${
        offcanvas ? "" : "bg-white rounded-lg shadow-md"
      }`}
    >
      <h2 className="text-lg font-bold mb-5 text-gray-700">Fraud Types</h2>
      <div className="space-y-2">
        {visibleOptions.map((option, index) => (
          <div key={index} className="flex items-center space-x-2 ">
            <input
              type="radio"
              id={option.title}
              name="fraudType"
              value={option.title}
              checked={selectedFraudType === option.title}
              onChange={() => handleSelection(option.title, option.link)}
              disabled={option.disabled}
              className={`h-4 w-4  ${
                option.disabled
                  ? "text-gray-300"
                  : "text-blue-600 cursor-pointer"
              }`}
            />
            <label
              htmlFor={option.title}
              className={`ml-2 text-gray-700  ${
                option.disabled ? "text-gray-300 " : "cursor-pointer"
              }`}
            >
              {option.title} ({option.count})
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
