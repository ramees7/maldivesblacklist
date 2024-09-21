import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CiAt } from "react-icons/ci";
import { FaArrowRightLong, FaXmark } from "react-icons/fa6";
import { PiWarningDiamond } from "react-icons/pi";

const ReportAbuseModal = () => {
  const [showModal, setShowModal] = useState(false);

  // Formik configuration with Yup validation schema
  const formik = useFormik({
    initialValues: {
      email: "",
      description: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: (values) => {
      // Handle form submission
      console.log("Form data:", values);
      setShowModal(false); // Close modal on form submission
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
      <div
        className="flex items-center gap-x-3 text-red-600 justify-center text-xl cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <PiWarningDiamond />
        <span>Report abuse</span>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-2"
          id="modal-overlay"
          onClick={handleClickOutside}
        >
          <div className="bg-white rounded-lg shadow-lg py-8 px-12 w-full max-w-lg">
            <div className="flex text-black justify-between items-center pb-2 mb-4">
              <div className="flex justify-center w-full">
                <h2 className="text-xl font-semibold">Report Abuse</h2>
              </div>
              <button className="w-fit" onClick={closeModal}>
                <FaXmark />
              </button>
            </div>
            <form onSubmit={formik.handleSubmit}>
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

              {/* Reason Textarea */}
              <div className="mb-4">
                <textarea
                  id="description"
                  className="w-full h-32 px-3 py-2 border text-black border-gray-300 bg-[#f2f2f2] rounded-lg focus:outline-none"
                  placeholder="Describe the issue *"
                  {...formik.getFieldProps("description")}
                ></textarea>
                {formik.touched.description && formik.errors.description ? (
                  <p className="text-red-500">{formik.errors.description}</p>
                ) : null}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <div className="bg-[#537cd9] w-fit font-semibold text-lg text-white rounded">
                  <button
                    type="submit"
                    className="py-3 xl:px-6 lg:px-3 flex gap-x-4 items-center"
                  >
                    Send Message <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ReportAbuseModal;
