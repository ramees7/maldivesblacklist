import React, { useState, useRef, useEffect, useContext } from "react";
import { TbBulb } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegDotCircle } from "react-icons/fa";
import {
  discoverDataContext,
  fraudListsContext,
} from "../../Context/ContextShares";
import { Link, useNavigate } from "react-router-dom";

export default function HomeLanding() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("Fraud Types");
  const { fraudLists, setFraudLists } = useContext(fraudListsContext);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Filter options based on the search term
  const filteredOptions = fraudLists.filter((option) =>
    option.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setSearchTerm(""); // Reset search on option selection
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/ads/all?${searchTerm}/`)
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(https://chargebacks911.com/wp-content/uploads/2019/12/cb911-blog-3.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-25"></div>{" "}
        {/* Overlay */}
        <div className="relative z-10 text-center text-white ">
          <div className="md:text-6xl text-4xl font-extrabold mb-6">
            <h1>Join The Fight</h1>
            <h1>
              Against <span className="text-red-500">Fraud.</span>
            </h1>
          </div>

          {/* Form for capturing search term */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#f2f2f2] flex justify-between md:flex-nowrap flex-wrap md:h-[80px] h-fit md:gap-y-0 gap-y-3 text-black items-center p-3 gap-x-3 rounded-lg md:w-[700px] w-[80%] mx-auto"
          >
            <div className="flex items-center gap-x-4 border-2 md:h-full h-[60px] rounded-lg px-2 md:w-[45%] w-[100%] bg-[#fff]">
              <TbBulb className="text-3xl" />
              <input
                type="text"
                placeholder="I'm looking for..."
                className="focus:outline-none placeholder-black bg-[#fff]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Update search term as user types
              />
            </div>

            <div
              className="flex items-center gap-x-4 border-2 md:h-full h-[60px] rounded-lg px-2  md:w-[45%] w-[100%] bg-[#fff]"
              ref={dropdownRef}
            >
              <FaRegDotCircle className="text-3xl" />
              <div className="relative w-full">
                <div
                  className="block appearance-none w-full bg-[#fff] border-none text-start py-2 rounded-full focus:outline-none cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {selectedOption}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <MdKeyboardArrowDown />
                  </div>
                </div>
                {isOpen && (
                  <div className="absolute z-10 w-[250px] bg-[#fff] border border-gray-300 rounded-md mt-2 p-3">
                    <div id="hello">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 border-gray-200 bg-[#fff] border-2 rounded-lg focus:outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <ul className="overflow-y-auto">
                      {filteredOptions.map((option, index) => (
                        <Link
                          to={`/ads/${option.link}`}
                          className="flex justify-between items-center cursor-pointer my-2 hover:text-green-500"
                          key={index}
                        >
                          <li
                            className="px-4 py-2   text-start"
                            onClick={() => handleOptionClick(option.title)}
                          >
                            {option.title}
                          </li>
                          <h4 className="w-[25px] h-[25px] rounded-full bg-[#537cd9] font-semibold text-white">
                            {option.count}
                          </h4>
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="flex justify-center items-center text-2xl md:bg-[#537cd9] w-[100%] md:w-[10%] text-white md:p-3 rounded-lg"
            >
              <div className="w-[50%] bg-[#537cd9] md:bg-none flex justify-center gap-x-4 md:hidden py-2 items-center font-normal text-xl rounded-lg">
                <span>Search</span>
                <FaSearch />
              </div>
              <FaSearch className="md:block hidden" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
