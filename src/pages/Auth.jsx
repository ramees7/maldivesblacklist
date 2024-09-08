import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import authBg from "../assets/images/auth_banner.jpg";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import { auth, provider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";
import googleIcon from "../assets/images/Google_Icon.png";

export default function Auth() {
  const [activeTab, setActiveTab] = useState("login");

  // Use useLocation hook to get the current URL
  const location = useLocation();

  // Detect the URL path to switch between login and register
  useEffect(() => {
    if (location.pathname === "/register") {
      setActiveTab("register");
    } else {
      setActiveTab("login");
    }
  }, [location]);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const token = user.accessToken;
        console.log(token);
      })
      .catch((error) => {
        console.log("Error during sign-in: ", error.message);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${authBg})`,
        backgroundSize: "cover",
        height: "100%",
      }}
      className="relative flex justify-center py-28"
    >
      <div className="absolute inset-0 bg-black opacity-25"></div>{" "}
      <div className="flex flex-col items-center z-10 relative lg:w-[500px] sm:w-[400px] w-[380px]">
        {/* Tab controls */}
        <div className="flex justify-between w-full gap-x-4">
          <div
            className={`${
              activeTab === "login" ? "bg-[#f2f2f2]" : "bg-gray-300"
            } w-[50%] py-3 text-center rounded-t-md cursor-pointer`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </div>
          <div
            className={`${
              activeTab === "register" ? "bg-[#f2f2f2]" : "bg-gray-300"
            } w-[50%] py-3 text-center rounded-t-md cursor-pointer`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </div>
        </div>

        {/* Conditional rendering based on activeTab */}
        <div className="w-full bg-[#f2f2f2] p-10 rounded-b-md shadow-md">
          <div>
            <div className="px-5 py-3 mb-5 bg-white rounded">
              <button
                onClick={signInWithGoogle}
                className="btn flex gap-x-5 items-center"
              >
                <img src={googleIcon} alt="google icon" className="w-[30px]" />{" "}
                <span className="text-lg">Sign in with Google</span>
              </button>
            </div>
            <h4 className="text-center mb-5 text-lg">or</h4>
          </div>
          {activeTab === "login" && <Login />}
          {activeTab === "register" && <Register />}
        </div>
      </div>
    </div>
  );
}
