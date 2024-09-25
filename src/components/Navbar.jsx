import React, { useState, useEffect, useRef, useContext } from "react";
import { LuUser } from "react-icons/lu";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { loggedNavigationListContext } from "../Context/ContextShares";
import { IoIosAddCircleOutline, IoIosLogOut } from "react-icons/io";

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const sidebarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { loggedNavigationList, setLoggedNavigationList } = useContext(
    loggedNavigationListContext
  );

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  const navLinks = [
    {
      title: "Home",
      link: "",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "FAQ",
      link: "/faq",
    },
  ];

  return (
    <div className="relative">
      {" "}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      )}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 w-72 px-2 bg-white h-screen shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        <div className="flex justify-around py-5 ">
          <div className="py-3 px-4 bg-[#537cd9] font-semibold text-lg text-white rounded">
            <Link to={`${!isLogged ? "/panel/create/" : "/report/"}`}>
              <button className="py-2 px-4">Repost Fraud +</button>
            </Link>
          </div>
          <button className=" text-3xl" onClick={toggleSidebar}>
            <HiOutlineXMark />
          </button>
        </div>
        <div className="bg-white ">
          <ul className="flex flex-col justify-center items-start p-4 font-bold text-lg space-y-4 ">
            {navLinks?.map((item) => (
              <Link to={`${item.link}/`} key={item.link}>
                <li>{item.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      {/* Navbar */}
      <div className="grid grid-cols-12 xl:gap-x-10 lg:gap-x-5 px-4 py-3 bg-white">
        {/* Left side: Logo and Menu Links */}
        <div className="lg:col-span-6 col-span-3 flex justify-between items-center">
          {/* Logo */}
          <div className="lg:block hidden mr-4">
            <Link to={"/"}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAKAoF1k1skFGMQtlbpX1COWUuggl8SYVQw&s"
                alt="logo"
                width={70}
              />
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              className="p-2 border-2 border-black rounded-full flex items-center"
              onClick={toggleSidebar}
            >
              {/* Hamburger menu icon */}
              <AiOutlineMenu className="w-6 h-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:w-[70%]">
            <ul className="flex justify-around font-bold text-lg w-full">
              {navLinks?.map((item) => (
                <Link to={`${item.link}/`} key={item.title}>
                  <li>{item.title}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:hidden flex col-span-6 justify-center">
          <Link to={"/"}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAKAoF1k1skFGMQtlbpX1COWUuggl8SYVQw&s"
              alt="logo"
              width={70}
            />
          </Link>
        </div>
        {/* Right side: Login, Register, and Repost Button */}
        <div className="lg:col-span-6 col-span-3 flex justify-end items-center">
          {!isLogged ? (
            <div
              className="relative"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              {/* Profile image and name */}
              <div className="lg:flex lg:w-[50%] xl:w-[60%] flex justify-center px-5">
                <div className="flex items-center gap-x-4 cursor-pointer">
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img
                      src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                      alt="profile"
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-125"
                    />
                  </div>
                  <h1 className="font-bold text-lg md:block hidden truncate">
                    Muhammed R...
                  </h1>
                </div>
              </div>

              {/* Dropdown menu */}
              {isOpen && (
                <div className="absolute top-full  w-[250px]  right-0 py-5 bg-white rounded-lg shadow-lg  z-10">
                  {loggedNavigationList?.map((item) => (
                    <Link
                      to={`/panel/${item.link}/`}
                      key={item.title}
                      className="flex items-center justify-between py-3 px-5 text-lg hover:bg-slate-100"
                    >
                      <div className="flex items-center gap-x-5 font-bold text-lg">
                        <span className="font-bold text-2xl">{item.icon}</span>
                        <h1>{item.title}</h1>
                      </div>
                      <h4 className="w-[25px] h-[25px] rounded-full bg-yellow-500  font-semibold text-black flex justify-center items-center">
                        2
                      </h4>
                    </Link>
                  ))}
                  <div className="flex items-center justify-start py-3 px-5 font-bold gap-x-5 hover:bg-slate-100 text-lg">
                    <span className="font-bold text-2xl">
                      <IoIosLogOut />
                    </span>
                    <h1>Logout</h1>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden lg:flex lg:w-[50%] xl:w-[60%] justify-around text-lg font-bold">
              <Link to={"/login/"}>
                <div className="p-2 border-2 border-black rounded-full flex items-center">
                  <LuUser />
                </div>
              </Link>
              <div className="flex items-center border-r-2 xl:pe-8 lg:pe-3">
                <Link to={"/login/"}>
                  <h1>Login</h1>
                </Link>
              </div>
              <div className="flex items-center xl:pe-8">
                <Link to={"/register/"}>
                  <h1>Register</h1>
                </Link>
              </div>
            </div>
          )}

          <div className=" bg-[#537cd9] font-semibold text-lg text-white rounded hidden lg:block">
            <Link to={`${!isLogged ? "/panel/create/" : "/report/"}`}>
              <button className="py-3 xl:px-5 lg:px-3">Repost Fraud +</button>
            </Link>
          </div>
          <div className={`block lg:hidden ${!isLogged ? "hidden" : "block"}`}>
            <Link to={"/login/"}>
              <div className="p-2 border-2 border-black rounded-full flex items-center text-2xl font-bold">
                <LuUser />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
