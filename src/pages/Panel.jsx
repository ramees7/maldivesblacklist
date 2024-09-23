import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Panel() {
  const location = useLocation();
  const navigate = useNavigate();
  const navigationData = [
    {
      title: "Ad New",
      link: "create",
    },
    {
      title: "Favorites",
      link: "favorites",
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
      navigate("/panel/create/");
    }
  }, [location.pathname, navigate]);

  return (
    <div className="xl:px-48 lg:px-20 md:px-12 px-10  bg-white pb-10">
      <div className="flex gap-x-8 py-10 bg-white text-lg">
        {navigationData.map((item) => (
          <Link
            to={`/panel/${item.link}/`}
            key={item.title}
            className={`text-gray-700 font-semibold hover:text-[#537cd9] ${
              location.pathname === `/panel/${item.link}/`
                ? "border-b-4 border-[#537cd9]"
                : ""
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="bg-[#f2f2f2]"></div>
    </div>
  );
}
