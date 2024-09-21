// import React, { useState } from "react";
// import { CiAt, CiUser } from "react-icons/ci";
// import { FaArrowRightLong, FaXmark } from "react-icons/fa6";
// import { FiSmartphone } from "react-icons/fi";
// import { MdEmail } from "react-icons/md";
// import { PiWarningDiamond } from "react-icons/pi";
// import { Link } from "react-router-dom";

// export default function EmailModal() {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       <button
//         className="py-3 w-[42%] bg-[#537cd9] rounded-md flex items-center gap-x-2 justify-center"
//         onClick={() => setShowModal(true)}
//       >
//         <MdEmail /> E-mail
//       </button>

//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg shadow-lg py-8 px-12 w-full max-w-lg text-black">
//             <div className="flex text-black justify-between items-center pb-2 mb-4">
//               <div className="flex justify-center w-full">
//                 <h2 className="text-xl font-semibold">Report Abuse</h2>
//               </div>
//               <button className=" w-fit" onClick={() => setShowModal(false)}>
//                 <FaXmark />
//               </button>
//             </div>
//             <form>
//               <div className="border-2 flex p-3 rounded-md gap-x-2 mb-6 bg-[#f2f2f2]">
//                 <CiUser className="text-2xl text-black" />
//                 <input
//                   type="name"
//                   id="name"
//                   className="focus:outline-none w-full bg-[#f2f2f2]"
//                   placeholder="Name *"
//                 />
//               </div>
//               <div className="border-2 flex p-3 rounded-md gap-x-2 mb-6 bg-[#f2f2f2]">
//                 <CiAt className="text-2xl text-black" />
//                 <input
//                   type="email"
//                   id="email"
//                   className="focus:outline-none w-full bg-[#f2f2f2]"
//                   placeholder="Email *"
//                 />
//               </div>

//               <div className="border-2 flex p-3 rounded-md gap-x-2 mb-6 bg-[#f2f2f2]">
//                 <FiSmartphone className="text-2xl text-black " />
//                 <input
//                   type="text"
//                   placeholder="Phone *"
//                   className="focus:outline-none w-full bg-[#f2f2f2]"
//                 />
//               </div>

//               {/* Reason Textarea */}
//               <div className="mb-4">
//                 <textarea
//                   className="w-full px-3 py-2 border bg-[#f2f2f2] border-gray-300 rounded-lg focus:outline-none"
//                   placeholder="Message *"
//                   rows={6}
//                 ></textarea>
//               </div>

//               <div className="flex justify-between items-center">
//                 <div>
//                   <input type="radio" /> i accept the privacy and policy
//                 </div>
//                 <div className=" bg-[#537cd9] w-fit font-semibold text-lg text-white rounded hidden lg:block">
//                   <Link to={""}>
//                     <button className="py-3 xl:px-6 lg:px-3 flex gap-x-4 items-center">
//                       Send <FaArrowRightLong />
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CiAt, CiUser } from "react-icons/ci";
import { FaArrowRightLong, FaXmark } from "react-icons/fa6";
import { FiSmartphone } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function EmailModal() {
  const [showModal, setShowModal] = useState(false);

  // Formik configuration with Yup validation schema
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      privacyPolicy: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required *"),
      email: Yup.string()
        .email("Invalid email address *")
        .required("Email is required *"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
        .required("Phone number is required *"),
      message: Yup.string().required("Message is required *"),
      privacyPolicy: Yup.bool().oneOf(
        [true],
        "You must accept the privacy policy *"
      ),
    }),
    onSubmit: (values) => {
      // Handle form submission
      console.log("Form data:", values);
      setShowModal(false);
      formik.resetForm();
    },
  });

  const handleClickOutside = (e) => {
    // Close the modal if clicking outside the modal content
    if (e.target.id === "modal-overlay") {
      setShowModal(false);
      e.preventDefault();
      formik.resetForm();
    }
  };

  const closeModal = () => {
    setShowModal(false);
    formik.resetForm(); // Reset form when modal is closed
  };
  return (
    <>
      <button
        className="py-3 w-[42%] bg-[#537cd9] rounded-md flex items-center gap-x-2 justify-center"
        onClick={() => setShowModal(true)}
      >
        <MdEmail /> E-mail
      </button>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-2"
          id="modal-overlay"
          onClick={handleClickOutside}
        >
          <div className="bg-white rounded-lg shadow-lg py-8 px-12 w-full max-w-lg text-black">
            <div className="flex text-black justify-between items-center pb-2 mb-4">
              <div className="flex justify-center w-full">
                <h2 className="text-xl font-semibold">Report Abuse</h2>
              </div>
              <button className="w-fit" onClick={closeModal}>
                <FaXmark />
              </button>
            </div>
            <form onSubmit={formik.handleSubmit}>
              {/* Name Input */}
              <div className="mb-6">
                <div className="border-2 flex p-3 rounded-md gap-x-2  bg-[#f2f2f2]">
                  <CiUser className="text-2xl text-black" />
                  <input
                    type="text"
                    id="name"
                    className="focus:outline-none w-full bg-[#f2f2f2]"
                    placeholder="Name *"
                    {...formik.getFieldProps("name")}
                  />
                </div>
                {formik.touched.name && formik.errors.name ? (
                  <p className="text-red-500">{formik.errors.name}</p>
                ) : null}
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <div className="border-2 flex p-3 rounded-md gap-x-2 bg-[#f2f2f2]">
                  <CiAt className="text-2xl text-black" />
                  <input
                    type="email"
                    id="email"
                    className="focus:outline-none w-full bg-[#f2f2f2]"
                    placeholder="Email *"
                    {...formik.getFieldProps("email")}
                  />
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red-500">{formik.errors.email}</p>
                ) : null}
              </div>

              {/* Phone Input */}
              <div className="mb-6">
                <div className="border-2 flex p-3 rounded-md gap-x-2  bg-[#f2f2f2]">
                  <FiSmartphone className="text-2xl text-black" />
                  <input
                    type="text"
                    id="phone"
                    className="focus:outline-none w-full bg-[#f2f2f2]"
                    placeholder="Phone *"
                    {...formik.getFieldProps("phone")}
                  />
                </div>
                {formik.touched.phone && formik.errors.phone ? (
                  <p className="text-red-500">{formik.errors.phone}</p>
                ) : null}
              </div>

              {/* Message Textarea */}
              <div className="mb-4">
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border bg-[#f2f2f2] border-gray-300 rounded-lg focus:outline-none"
                  placeholder="Message *"
                  rows={6}
                  {...formik.getFieldProps("message")}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <p className="text-red-500">{formik.errors.message}</p>
                ) : null}
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center ">
                    <input
                      type="checkbox"
                      id="privacyPolicy"
                      className="w-5 h-5 border-gray-300 rounded focus:ring-0"
                      {...formik.getFieldProps("privacyPolicy")}
                    />
                    <label htmlFor="privacyPolicy" className="ml-2">
                      I accept the privacy and policy
                    </label>
                  </div>
                  {formik.touched.privacyPolicy &&
                  formik.errors.privacyPolicy ? (
                    <p className="text-red-500 text-sm">
                      {formik.errors.privacyPolicy}
                    </p>
                  ) : null}
                </div>
                <div className="bg-[#537cd9] w-fit font-semibold text-lg text-white rounded hidden lg:block">
                  <button
                    type="submit"
                    className="py-3 xl:px-6 lg:px-3 flex gap-x-4 items-center"
                  >
                    Send <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
