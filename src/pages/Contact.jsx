import React, { useEffect } from "react";
import ContactLanding from "../components/Contact/ContactLanding";
import ContactAbout from "../components/Contact/ContactAbout";
import ContactInfo from "../components/Contact/ContactInfo";
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "cdsvfdv",
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
    onSubmit: (values,e) => {
      console.log("Form data:", values);
      // Handle form submission logic
    },
  });

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
    <div>
      <ContactLanding />
      <div className="xl:px-48 lg:px-20 md:px-12 px-10 bg-[#f2f2f2] py-20">
        <ContactAbout formik={formik}/>
        <ContactInfo formik={formik} />
      </div>
    </div>
  );
}
