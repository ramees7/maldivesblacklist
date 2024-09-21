import React from "react";
import { CiAt, CiFacebook, CiUser } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiSmartphone } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ContactAbout() {
  // Formik configuration
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
        .required("Phone number required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      console.log("Form data:", values);
      // Handle form submission logic
    },
  });

  return (
    <div>
      <div className="grid grid-cols-12 h-[400px]">
        <div className="col-span-12 lg:col-span-5">
          <div className="flex lg:justify-normal justify-center">
            <h2 className="text-center py-1 bg-[#537cd9] w-fit text-white px-4 text-md rounded-lg mb-3">
              Let's work together
            </h2>
          </div>
          <h1 className="text-4xl font-semibold mb-5 lg:text-start text-center">
            Let's Fight Against Fraud
          </h1>
          <div className="flex justify-center lg:justify-normal">
            <h6 className="mt-4 text-gray-500 mb-5 lg:text-start text-center lg:w-full md:w-[50%]">
              We do not provide any direct legal services. For partnerships and
              corporate matters, please write to us. Our team will reach out to
              you.
            </h6>
          </div>
          <div className="flex justify-center lg:justify-normal w-full">
            <CiFacebook className="text-5xl" />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6"></div>
      </div>

      <div className="w-full bg-white shadow-lg rounded-lg p-10 block lg:hidden">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Send a message
        </h2>
        <form className="space-y-2" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col">
            <label className="text-gray-700 mb-1" htmlFor="name">
              Name *
            </label>
            <div className="border-2 flex p-2 rounded-md gap-x-2">
              <CiUser className="text-2xl text-black" />
              <input
                type="text"
                id="name"
                className="focus:outline-none bg-[#fff]"
                placeholder="Name"
                {...formik.getFieldProps("name")}
              />
            </div>
            {formik.touched.name && formik.errors.name ? (
              <p className="text-red-500">{formik.errors.name}</p>
            ) : null}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
            <div className="flex flex-col">
              <label className="text-gray-700 mb-1" htmlFor="email">
                Email *
              </label>
              <div className="border-2 flex p-2 rounded-md gap-x-2">
                <CiAt className="text-2xl text-black" />
                <input
                  type="email"
                  id="email"
                  className="focus:outline-none bg-[#fff]"
                  placeholder="Email"
                  {...formik.getFieldProps("email")}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500">{formik.errors.email}</p>
              ) : null}
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 mb-1" htmlFor="phone">
                Phone
              </label>
              <div className="border-2 flex p-2 rounded-md gap-x-2">
                <FiSmartphone className="text-2xl text-black" />
                <input
                  type="text"
                  placeholder="Phone"
                  className="focus:outline-none bg-[#fff]"
                  {...formik.getFieldProps("phone")}
                />
              </div>
              {formik.touched.phone && formik.errors.phone ? (
                <p className="text-red-500">{formik.errors.phone}</p>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 mb-1" htmlFor="message">
              Message *
            </label>
            <textarea
              id="message"
              className="p-4 border border-gray-300 rounded-md focus:outline-none"
              rows="4"
              placeholder="Write your message here"
              {...formik.getFieldProps("message")}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <p className="text-red-500">{formik.errors.message}</p>
            ) : null}
          </div>

          <div className="flex justify-center mt-3">
            <div className="bg-[#537cd9] w-fit font-semibold text-lg text-white rounded block lg:hidden">
              <button
                type="submit"
                className="py-3 xl:px-6 lg:px-3 px-4 flex gap-x-4 items-center"
              >
                Send Message <FaArrowRightLong />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
