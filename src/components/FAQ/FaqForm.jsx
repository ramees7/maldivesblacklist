// import React, { useState } from "react";
// import { CiAt, CiUser } from "react-icons/ci";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { FiSmartphone } from "react-icons/fi";
// import { Link } from "react-router-dom";

// export default function FaqForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [isAgreed, setIsAgreed] = useState(false); // State for checkbox

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isAgreed) {
//       alert("Please agree to the terms and policy before submitting.");
//       return;
//     }
//     // Handle form submission logic here
//     setFormData({ name: "", email: "", phone: "", message: "" });
//     setIsAgreed(false); // Reset checkbox
//   };

//   const handleToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <>
//       <div className="bg-white w-full mb-5 py-4 rounded-lg">
//         <h1 className="py-3 border-b-2 px-4">Useful Links</h1>
//         <Link to={"/contact"}>
//           <h1 className="mb-1 pt-3 px-4 hover:text-yellow-500">Contact Us</h1>
//         </Link>
//         <Link to={"/login"}>
//           <h1 className="py-1 px-4 hover:text-yellow-500">
//             Login and Register
//           </h1>
//         </Link>
//       </div>
//       <div className="w-full bg-white shadow-lg rounded-lg p-5">
//         <h2 className="text-2xl font-semibold mb-6 text-center">
//           Didn't find the answer? <br />
//           Ask us questions directly
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <div className="border-2 flex p-2 rounded-md gap-x-2">
//               <CiUser className="text-2xl text-black" />
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="focus:outline-none bg-[#fff] w-full"
//                 placeholder="Name"
//                 required
//               />
//             </div>
//           </div>
//           <div>
//             <div className="border-2 flex p-2 rounded-md gap-x-2">
//               <CiAt className="text-2xl text-black" />
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="focus:outline-none bg-[#fff] w-full"
//                 placeholder="Email"
//                 required
//               />
//             </div>
//           </div>
//           <div>
//             <div className="border-2 flex p-2 rounded-md gap-x-2">
//               <FiSmartphone className="text-2xl text-black" />
//               <input
//                 type="text"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="focus:outline-none bg-[#fff] w-full"
//                 placeholder="Phone"
//               />
//             </div>
//           </div>
//           <div>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="p-4 border w-full border-gray-300 rounded-md focus:outline-none"
//               rows="4"
//               placeholder="Write your message here"
//               required
//             ></textarea>
//           </div>

//           {/* Terms and Policy Checkbox */}
//           <div className="flex items-center justify-center space-x-2">
//             <input
//               type="checkbox"
//               id="terms"
//               checked={isAgreed}
//               onChange={() => setIsAgreed(!isAgreed)}
//               className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
//             />
//             <label htmlFor="terms" className="text-gray-600">
//               I accept the{" "}
//               <Link onClick={handleToTop} className="text-indigo-600 underline">
//                 privacy policy
//               </Link>
//             </label>
//           </div>

//           <div className="flex justify-center">
//             <div className="bg-[#537cd9] w-fit font-semibold text-lg text-white rounded">
//               <button
//                 type="submit"
//                 className="py-3 xl:px-6 lg:px-3 px-4 flex gap-x-4 items-center"
//                 disabled={!isAgreed} // Disable button until the checkbox is checked
//               >
//                 Send <FaArrowRightLong />
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }
































// // import React, { useState } from "react";
// // import { CiAt, CiUser } from "react-icons/ci";
// // import { FaArrowRightLong } from "react-icons/fa6";
// // import { FiSmartphone } from "react-icons/fi";
// // import { Link } from "react-router-dom";

// // export default function FaqForm() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     message: "",
// //   });
// //   const [isAgreed, setIsAgreed] = useState(false);

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (!isAgreed) {
// //       alert("Please agree to the terms and policy before submitting.");
// //       return;
// //     }
// //     setFormData({ name: "", email: "", phone: "", message: "" });
// //     setIsAgreed(false);
// //   };

// //   return (
// //     <>
// //       <div className="bg-white w-full mb-5 py-4 rounded-lg">
// //         <h1 className="py-3 border-b-2 px-4">Useful Links</h1>
// //         <Link to={"/contact"}>
// //           <h1 className="mb-1 pt-3 px-4 hover:text-yellow-500">Contact Us</h1>
// //         </Link>
// //         <Link to={"/login"}>
// //           <h1 className="py-1 px-4 hover:text-yellow-500">
// //             Login and Register
// //           </h1>
// //         </Link>
// //       </div>
// //       <div className="w-full bg-white shadow-lg rounded-lg p-5">
// //         <h2 className="text-2xl font-semibold mb-6 text-center">
// //           Didn't find the answer? <br />
// //           Ask us questions directly
// //         </h2>
// //         <form onSubmit={handleSubmit} className="space-y-5">
// //           <div className="border-2 flex p-2 rounded-md gap-x-2">
// //             <CiUser className="text-2xl text-black" />
// //             <input
// //               type="text"
// //               id="name"
// //               name="name"
// //               value={formData.name}
// //               onChange={handleChange}
// //               className="focus:outline-none bg-[#fff] w-full"
// //               placeholder="Name"
// //               required
// //             />
// //           </div>

// //           <div className="border-2 flex p-2 rounded-md gap-x-2">
// //             <CiAt className="text-2xl text-black" />
// //             <input
// //               type="email"
// //               id="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               className="focus:outline-none bg-[#fff] w-full"
// //               placeholder="Email"
// //               required
// //             />
// //           </div>

// //           <div className="border-2 flex p-2 rounded-md gap-x-2">
// //             <FiSmartphone className="text-2xl text-black" />
// //             <input
// //               type="text"
// //               id="phone"
// //               name="phone"
// //               value={formData.phone}
// //               onChange={handleChange}
// //               className="focus:outline-none bg-[#fff] w-full"
// //               placeholder="Phone"
// //             />
// //           </div>

// //           <textarea
// //             id="message"
// //             name="message"
// //             value={formData.message}
// //             onChange={handleChange}
// //             className="p-4 border w-full border-gray-300 rounded-md focus:outline-none"
// //             rows="4"
// //             placeholder="Write your message here"
// //             required
// //           ></textarea>

// //           <div className="flex items-center justify-center space-x-2">
// //             <input
// //               type="checkbox"
// //               id="terms"
// //               checked={isAgreed}
// //               onChange={() => setIsAgreed(!isAgreed)}
// //               className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
// //             />
// //             <label htmlFor="terms" className="text-gray-600">
// //               I accept the{" "}
// //               <Link to="/privacy-policy" className="text-indigo-600 underline">
// //                 privacy policy
// //               </Link>
// //             </label>
// //           </div>

// //           <div className="flex justify-center">
// //             <div className="bg-[#537cd9] w-fit font-semibold text-lg text-white rounded">
// //               <button
// //                 type="submit"
// //                 className="py-3 xl:px-6 lg:px-3 px-4 flex gap-x-4 items-center"
// //                 disabled={!isAgreed}
// //               >
// //                 Send <FaArrowRightLong />
// //               </button>
// //             </div>
// //           </div>
// //         </form>
// //       </div>
// //     </>
// //   );
// // }









import React, { useState, useEffect } from "react";
import { CiAt, CiUser } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiSmartphone } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function FaqForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isAgreed, setIsAgreed] = useState(false); // State for checkbox
  const [isFixed, setIsFixed] = useState(false); // State to track when to make form fixed
  const [formTop, setFormTop] = useState(0); // Track initial top offset of form

  useEffect(() => {
    const formElement = document.getElementById("faq-form");
    const rect = formElement.getBoundingClientRect();
    const offset = rect.top + window.scrollY;

    setFormTop(offset); // Set the form's initial position on page load

    const handleScroll = () => {
      if (window.scrollY > formTop) {
        setIsFixed(true); // Fix the form when the scroll position is past the form's top
      } else {
        setIsFixed(false); // Remove fixed position when scrolling back up
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [formTop]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAgreed) {
      alert("Please agree to the terms and policy before submitting.");
      return;
    }
    // Handle form submission logic here
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsAgreed(false); // Reset checkbox
  };

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="bg-white text-gray-700 w-full mb-5 py-4 rounded-lg lg:w-[350px]">
        <h1 className="py-3 border-b-2 px-4">Useful Links</h1>
        <Link to={"/contact/"}>
          <h1 className="mb-1 pt-3 px-4 hover:text-yellow-500">Contact Us</h1>
        </Link>
        <Link to={"/login/"}>
          <h1 className="py-1 px-4 hover:text-yellow-500">
            Login and Register
          </h1>
        </Link>
      </div>
      <div
        id="faq-form"
        className={`w-full bg-white shadow-lg rounded-lg p-5 lg:w-[350px] ${isFixed ? "lg:fixed  lg:top-0" : ""}`} // Fixed position when scrolled past, and fixed width
        style={{  transition: "all 0.3s ease" }} // Smooth transition for positioning
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Didn't find the answer? <br />
          Ask us questions directly
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5 ">
          <div>
            <div className="border-2 flex p-2 rounded-md gap-x-2">
              <CiUser className="text-2xl text-black" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="focus:outline-none bg-[#fff] w-full"
                placeholder="Name"
                required
              />
            </div>
          </div>
          <div>
            <div className="border-2 flex p-2 rounded-md gap-x-2">
              <CiAt className="text-2xl text-black" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="focus:outline-none bg-[#fff] w-full"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div>
            <div className="border-2 flex p-2 rounded-md gap-x-2">
              <FiSmartphone className="text-2xl text-black" />
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="focus:outline-none bg-[#fff] w-full"
                placeholder="Phone"
              />
            </div>
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="p-4 border w-full border-gray-300 rounded-md focus:outline-none"
              rows="4"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>

          {/* Terms and Policy Checkbox */}
          <div className="flex items-center justify-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              checked={isAgreed}
              onChange={() => setIsAgreed(!isAgreed)}
              className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="terms" className="text-gray-600">
              I accept the{" "}
              <Link onClick={handleToTop} className="text-indigo-600 underline">
                privacy policy
              </Link>
            </label>
          </div>

          <div className="flex justify-center">
            <div className="bg-[#537cd9] w-fit font-semibold text-lg text-white rounded">
              <button
                type="submit"
                className="py-3 xl:px-6 lg:px-3 px-4 flex gap-x-4 items-center"
                disabled={!isAgreed} // Disable button until the checkbox is checked
              >
                Send <FaArrowRightLong />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
