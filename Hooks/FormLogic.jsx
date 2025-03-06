"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const useFormLogic = (
  serviceId,
  templateId,
  publicKey,
  successCallback,
  errorCallback,
) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill in all fields.");
      return;
    }

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        console.log("Email Sent Successfully:", response);
        successCallback();
      })
      .catch((error) => {
        console.error("Email Sending Failed:", error);
        errorCallback();
      });
  };

  return { formData, handleChange, handleSubmit };
};

export default useFormLogic;
