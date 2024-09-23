import React, { useContext, useEffect, useRef, useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { FaPlus, FaRegFile } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";
import { fraudListsContext } from "../Context/ContextShares";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Report() {
  const [description, setDescription] = useState("");
  const { fraudLists, setFraudLists } = useContext(fraudListsContext);
  const [selectedFiles, setSelectedFiles] = useState([]); // For multiple files
  const [imagePreviews, setImagePreviews] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("Fraud Types");
  const [imagePreview, setImagePreview] = useState(null);
  const dropdownRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false)

  const formik = useFormik({
    initialValues: {
      adName: "",
      orderedProducts: "",
      phoneNumber: "",
      fraudType: "",
      websiteLink: "",
      socialMediaLink: "",
      description: "",
      evidence: [],
    },
    validationSchema: Yup.object({
      adName: Yup.string().required("Ad Name is required"),
      orderedProducts: Yup.string().optional(),
      phoneNumber: Yup.string().matches(
        /^[0-9]{10}$/,
        "Phone number must be exactly 10 digits"
      ),
      description: Yup.string().required("Description is required"),
      websiteLink: Yup.string().url("Invalid URL").optional(),
      socialMediaLink: Yup.string().url("Invalid URL").optional(),
      fraudType: Yup.string().required("Fraud Type is required"),
      evidence: Yup.array().required("Evidence is required"),
    }),
    validateOnMount: true,
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });

  const filteredOptions = fraudLists.filter((option) =>
    option.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDescriptionChange = (value) => {
    formik.setFieldValue("description", value);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    formik.setFieldValue("fraudType", option);
    setIsOpen(false);
    setSearchTerm("");
  };

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

  // const handleFileChange = (e) => {
  //   const files = Array.from(e.target.files);

  //   // Restrict to a maximum of 10 files
  //   if (selectedFiles.length + files.length > 10) {
  //     alert("You can only upload up to 10 files.");
  //     return;
  //   }

  //   // Update Formik value
  //   formik.setFieldValue("evidence", [...selectedFiles, ...files]);
  //   setSelectedFiles((prevFiles) => [...prevFiles, ...files]);

  //   // Generate image previews
  //   const newImagePreviews = files.map((file) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     return new Promise((resolve) => {
  //       reader.onloadend = () => resolve(reader.result);
  //     });
  //   });

  //   // Add new previews to the existing previews
  //   Promise.all(newImagePreviews).then((previews) => {
  //     setImagePreviews((prevPreviews) => [...prevPreviews, ...previews]);
  //   });
  // };

  
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    addFiles(files);
  };

  const addFiles = (files) => {
    // Restrict to a maximum of 10 files
    if (selectedFiles.length + files.length > 10) {
      alert("You can only upload up to 10 files.");
      return;
    }

    formik.setFieldValue("evidence", [...selectedFiles, ...files]);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);

    // Generate image previews
    const newImagePreviews = files.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise((resolve) => {
        reader.onloadend = () => resolve(reader.result);
      });
    });

    Promise.all(newImagePreviews).then((previews) => {
      setImagePreviews((prevPreviews) => [...prevPreviews, ...previews]);
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    addFiles(files);
  };

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleToTop();
  }, []);
  return (
    <div className="xl:px-48 lg:px-20 md:px-12 px-10 bg-[#f2f2f2] py-20">
      <h1 className="text-4xl font-semibold mb-8 text-gray-700">
        Post Your Ad
      </h1>
      <div className="border-dotted border-2 border-gray-400 rounded-lg py-7 text-center mb-10">
        <h1 className="text-lg font-semibold">
          You can also{" "}
          <Link to={"/login/"} className="text-blue-600">
            Log In
          </Link>{" "}
          or{" "}
          <Link to={"/register/"} className="text-blue-600">
            Register
          </Link>{" "}
          first.
        </h1>
      </div>

      <div className="w-full mx-auto bg-white lg:p-16 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-gray-700 mb-8">
          General info
        </h1>
        <form
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          noValidate
          onSubmit={formik.handleSubmit}
        >
          {/* Ad Name */}
          <div className="md:col-span-3">
            <label className="block text-sm font-medium text-gray-700">
              Ad Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              // placeholder="Ad Name"
              name="adName"
              value={formik.values.adName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-3 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {formik.touched.adName && formik.errors.adName ? (
              <p className="text-red-500 text-sm">{formik.errors.adName}</p>
            ) : null}
          </div>

          <div className="" ref={dropdownRef}>
            <label className="block text-sm font-medium text-gray-700">
              Fraud Types <span className="text-red-500">*</span>
            </label>
            <div className="relative w-full">
              <div
                className="block appearance-none mt-3  w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                onClick={() => setIsOpen(!isOpen)}
              >
                {selectedOption}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <MdKeyboardArrowDown />
                </div>
              </div>
              {isOpen && (
                <div className="absolute z-10 w-[250px] bg-[#fff] border border-gray-300 rounded-md mt-2 p-3">
                  <div className="">
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
                      <div
                        className="flex items-center my-1 hover:text-green-500"
                        key={index}
                      >
                        <li
                          className="px-4 py-1 cursor-pointer font-semibold text-start"
                          onClick={() => handleOptionClick(option.title)}
                        >
                          {option.title}
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {formik.touched.fraudType && formik.errors.fraudType ? (
              <p className="text-red-500 text-sm">{formik.errors.fraudType}</p>
            ) : null}
          </div>

          {/* Ordered Products */}
          <div>
            <label className=" text-sm font-medium text-gray-700 flex items-center">
              Ordered Products
              <span className="ml-1 text-yellow-400 text-sm" title="Optional">
                <CiCircleInfo />
              </span>
            </label>
            <input
              type="text"
              name="orderedProducts"
              value={formik.values.orderedProducts}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // placeholder="Ordered Products"
              className="mt-3 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {formik.touched.orderedProducts && formik.errors.orderedProducts ? (
              <p className="text-red-500 text-sm">
                {formik.errors.orderedProducts}
              </p>
            ) : null}
          </div>

          {/* Phone Number */}
          <div>
            <label className=" text-sm font-medium text-gray-700 flex items-center">
              Phone Number
              <span className="ml-1 text-yellow-400 text-sm" title="Optional">
                <CiCircleInfo />
              </span>
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Fraud's Phone Number"
              className="mt-3 block w-full p-4 border placeholder-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <p className="text-red-500 text-sm">
                {formik.errors.phoneNumber}
              </p>
            ) : null}
          </div>

          {/* Website Link */}
          <div>
            <label className=" text-sm font-medium text-gray-700 flex items-center">
              Website Link
              <span className="ml-1 text-yellow-400 text-sm" title="Optional">
                <CiCircleInfo />
              </span>
            </label>
            <input
              type="url"
              // placeholder="Website Link"
              name="websiteLink"
              value={formik.values.websiteLink}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-3 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {formik.touched.websiteLink && formik.errors.websiteLink ? (
              <p className="text-red-500 text-sm">
                {formik.errors.websiteLink}
              </p>
            ) : null}
          </div>

          {/* Social Media Link */}
          <div>
            <label className=" text-sm font-medium text-gray-700 flex items-center">
              Social Media Link
              <span className="ml-1 text-yellow-400 text-sm" title="Optional">
                <CiCircleInfo />
              </span>
            </label>
            <input
              type="url"
              name="socialMediaLink"
              value={formik.values.socialMediaLink}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // placeholder="Social Media Link"
              className="mt-3 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {formik.touched.socialMediaLink && formik.errors.socialMediaLink ? (
              <p className="text-red-500 text-sm">
                {formik.errors.socialMediaLink}
              </p>
            ) : null}
          </div>
        </form>
        <div className="w-full mt-10 h-full">
          <h3 className="text-2xl font-semibold text-gray-700 mb-8">
            Description
          </h3>
          <ReactQuill
            value={formik.values.description}
            onChange={handleDescriptionChange}
            className="bg-white  h-[250px]"
            theme="snow"
          />
        </div>
        <div className="w-full mt-24">
          <h3 className="text-2xl font-semibold text-gray-700 mb-8 flex items-center">
            Insert Evidence <span className="text-red-400">*</span>
            <span
              className="ml-2 text-yellow-400 text-lg"
              title="Insert chat screenshots, receipts, invoices and any other evidences"
            >
              <CiCircleInfo />
            </span>
          </h3>
          <div className="max-w-5xl mx-auto  mt-6">
            {/* <div className="border-2 p-3 rounded-lg">
              <label
                htmlFor="file-upload"
                className={`border-2 border-dashed border-gray-300 rounded-lg h-full py-8 flex flex-col justify-center ${
                  imagePreview ? "items-start" : "items-center"
                }  justify-center cursor-pointer`}
              >
                <input
                  id="file-upload"
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  multiple
                />
                <div className="text-center">
                  {imagePreviews.length > 0 ? (
                    <div className="w-full overflow-x-auto">
                      <div className="grid  sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {imagePreviews.map((item, index) => (
                          <div key={index} className="flex-shrink-0">
                            <img
                              src={item}
                              alt="Preview"
                              className="h-[150px] w-[200px] "
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <>
                      <FaRegFile className="mx-auto text-4xl text-gray-600" />
                      <p className="mt-2 text-sm text-gray-600">
                        <span className="text-lg ">
                          <span className="text-blue-500">Choose images</span>{" "}
                          or drag it here
                        </span>
                      </p>
                    </>
                  )}
                </div>
              </label>
            </div> */}
             <div
            className={`border-2 p-3 rounded-lg ${
              isDragging ? "bg-gray-100 border-blue-500" : ""
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <label
              htmlFor="file-upload"
              className={`border-2 border-dashed border-gray-300 rounded-lg h-full py-10 flex flex-col justify-center ${
                imagePreviews.length ? "items-center" : "items-center"
              } cursor-pointer`}
            >
              <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                className="hidden"
                multiple
              />
              <div className="text-center">
                {imagePreviews.length > 0 ? (
                  <div className="w-full overflow-x-auto ">
                    <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {imagePreviews.map((item, index) => (
                        <div key={index} className="flex-shrink-0">
                          <img
                            src={item}
                            alt="Preview"
                            className="h-[150px] w-[200px]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <FaRegFile className="mx-auto text-4xl text-gray-600" />
                    <p className="mt-2 text-sm text-gray-600">
                      <span className="text-lg">
                        <span className="text-blue-500">Choose images</span> or
                        drag them here
                      </span>
                    </p>
                  </>
                )}
              </div>
            </label>
          </div>

            {/* Submit Button */}
            <div className="flex justify-end my-10">
              <div className=" bg-[#537cd9] font-semibold text-lg text-white rounded w-fit">
                <button className="py-3 px-6" type="submit">
                  Repost Fraud +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
