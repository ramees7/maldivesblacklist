import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CiAt } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  // Formik hook for form handling
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      console.log("Remember Me:", rememberMe);
      navigate('/panel/view')
      // Handle login logic here
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="space-y-5">
        <div>
          <div className="border-2 flex p-3 rounded-md gap-x-2">
            <CiAt className="text-2xl text-black" />
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="focus:outline-none bg-[#f2f2f2] w-full placeholder-black"
              placeholder="Email Address"
              required
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <div className="border-2 flex p-3 rounded-md gap-x-2">
            <RiLockPasswordLine className="text-2xl text-black" />
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="focus:outline-none bg-[#f2f2f2] w-full placeholder-black"
              placeholder="Password"
              required
            />
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={handleCheckboxChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 placeholder-black"
            />
            <label
              htmlFor="rememberMe"
              className="text-gray-700 md:text-lg text-md"
            >
              Remember Me
            </label>
          </div>
          <div>
            <h2 className="md:text-lg text-md text-yellow-500">
              Forgot password?
            </h2>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-4 rounded-lg text-white text-xl text-center bg-[#537cd9]"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
