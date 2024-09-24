import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Report from "./Report";
import './Panel.css'
import MyAds from "../components/Panel/MyAds";
import Favourites from "../components/Panel/Favourites";
import Messages from "../components/Panel/Messages";
import Settings from "../components/Panel/Settings";
import MyOrders from "../components/Panel/MyOrders";

export default function Panel() {
  const location = useLocation();
  const navigate = useNavigate();
  const navigationData = [
    {
      title: "Ad New",
      link: "create",
    },
    {
      title: "My Ads",
      link: "list",
    },
    {
      title: "Favourites",
      link: "favourites",
    },
    {
      title: "Messages",
      link: "messages",
    },
    {
      title: "My Orders",
      link: "myorders",
    },
    {
      title: "Settings",
      link: "settings",
    },
  ];

  useEffect(() => {
    const isValidPath = navigationData.some(
      (item) => `/panel/${item.link}/` === location.pathname
    );

    if (!isValidPath) {
      navigate("/panel/list/");
    }
  }, [location.pathname, navigate]);

  return (
    <div className="">
      <div className="flex gap-x-8 py-10 text-lg xl:px-48 lg:px-20 md:px-12 px-10  bg-white overflow-y-scroll">
        {navigationData.map((item) => (
          <Link
            to={`/panel/${item.link}/`}
            key={item.title}
            className={`text-gray-700 font-semibold hover:text-[#537cd9] flex: 1 whitespace-nowrap ${
              location.pathname === `/panel/${item.link}/`
                ? "border-b-4 border-[#537cd9]"
                : ""
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="bg-[#f2f2f2] xl:px-48 lg:px-20 md:px-12 px-10">
        {location.pathname === "/panel/create/" && <Report isLogged={true} />}
        {location.pathname === "/panel/list/" && <MyAds/>}
        {location.pathname === "/panel/favourites/" && <Favourites/>}
        {location.pathname === "/panel/messages/" && <Messages/>}
        {location.pathname === "/panel/myorders/" && <MyOrders/>}
        {location.pathname === "/panel/settings/" && <Settings/>}
      </div>
    </div>
  );
}
