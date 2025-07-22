"use client";
import { useState } from "react";
import { toast } from "sonner";
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.phone ||
      !formData.message
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    // Show loading toast
    const loadingToast = toast.loading("Sending message...");

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        formData,
        publicKey,
      );

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      successCallback();
    } catch (error) {
      console.error("Email Sending Failed:", error);

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      errorCallback();
    } finally {
      setIsSubmitting(false);
    }
  };

  return { formData, handleChange, handleSubmit, isSubmitting };
};

export default useFormLogic;
