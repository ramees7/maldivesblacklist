import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaArrowRightLong, FaXmark } from "react-icons/fa6";
import { IoIosChatboxes } from "react-icons/io";
import { Link } from "react-router-dom";

export default function ChatModal() {
  const [showModal, setShowModal] = useState(false);

  // Formik configuration with Yup validation
  const formik = useFormik({
    initialValues: {
      message: "",
    },
    validationSchema: Yup.object({
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      console.log("Form data:", values);
      setShowModal(false); 
      formik.resetForm()
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
        <IoIosChatboxes /> Chat
      </button>
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-2"
          id="modal-overlay"
          onClick={handleClickOutside}
        >
          <div className="bg-white rounded-lg shadow-lg py-8 px-12 w-full max-w-lg">
            <div className="flex justify-between items-center text-black pb-2 mb-4">
              <div className="flex justify-center w-full">
                <h2 className="text-xl font-semibold">Send a message</h2>
              </div>
              <button className=" w-fit" onClick={closeModal}>
                <FaXmark />
              </button>
            </div>

            <form onSubmit={formik.handleSubmit}>
              {/* Textarea for Message */}
              <div className="mb-4">
                <textarea
                  className="w-full px-3 py-2 border text-black bg-[#f2f2f2] border-gray-300 rounded-lg focus:outline-none"
                  rows={8}
                  placeholder="Describe the issue *"
                  {...formik.getFieldProps("message")}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <p className="text-red-500">{formik.errors.message}</p>
                ) : null}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <div className=" bg-[#537cd9] w-fit font-semibold text-lg text-white rounded">
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
