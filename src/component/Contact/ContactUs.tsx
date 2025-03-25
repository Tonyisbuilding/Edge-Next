import React, { useState, ChangeEvent } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import images from "@/constant/images";


// Define form data interface
interface FormDataType {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

// Define errors type based on FormDataType keys
type FormErrors = Partial<Record<keyof FormDataType, string>>;

const ContactInformation = () => {
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(
      (prev) =>
        ({
          ...prev,
          [name]: value,
        } as FormDataType)
    );

    // Clear error when user types
    if (errors[name as keyof FormDataType]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
      alert("Message sent successfully!");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="max-w-6xl mx-auto my-12 px-4 md:px-0 relative">
      <div className="flex flex-col md:flex-row rounded-[25px] overflow-hidden shadow-lg relative lg:top-[-5rem]">
        {/* Contact Information Panel */}
        <motion.div
          className="bg-gradient-to-br from-[#206D80] from-20%  to-[#219EB2] to-50% text-white p-8 md:w-1/2"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            className="text-2xl font-bold mb-4"
            variants={itemVariants}
          >
            Contact Information
          </motion.h2>

          <motion.p className="mb-8 text-teal-50" variants={itemVariants}>
            Looking to collaborate or have questions about our services? We'd
            love to connect and explore how Edge Capital can help you achieve
            your financial goals.
          </motion.p>

          <div className="space-y-6">
            <motion.div className="flex items-center" variants={itemVariants}>
              <div className="w-12 h-12 bg-[#4191A1] rounded-[8.76px] flex items-center justify-center mr-4">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <p className="text-sm text-teal-100">Call Us</p>
                <p className="font-bold">01 89 70 82 98</p>
              </div>
            </motion.div>

            <motion.div className="flex items-center" variants={itemVariants}>
              <div className="w-12 h-12 bg-[#4191A1] rounded-[8.76px] flex items-center justify-center mr-4">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <p className="text-sm text-teal-100">Email Us</p>
                <p className="font-bold">contact@yourcompany.com</p>
              </div>
            </motion.div>

            <motion.div className="flex items-center" variants={itemVariants}>
              <div className="w-12 h-12 bg-[#4191A1] rounded-[8.76px] flex items-center justify-center mr-4">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <p className="text-sm text-teal-100">Visit</p>
                <p className="font-bold">
                  123 Business Ave, Suits 100, Netherland
                </p>
              </div>
            </motion.div>

            <motion.div className="flex items-center" variants={itemVariants}>
              <div className="w-12 h-12 bg-[#4191A1] rounded-[8.76px] flex items-center justify-center mr-4">
                <FaClock className="text-xl" />
              </div>
              <div>
                <p className="text-sm text-teal-100">Working Hours</p>
                <p className="font-bold">Mon - Fri: 9AM - 6PM</p>
              </div>
            </motion.div>
          </div>

          <motion.div className="flex space-x-4 mt-12" variants={itemVariants}>
            <a
              href="#"
              className="w-10 h-10 bg-[#42ABBC] rounded-full flex items-center justify-center hover:bg-teal-400 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#42ABBC] rounded-full flex items-center justify-center hover:bg-teal-400 transition-colors"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#42ABBC] rounded-full flex items-center justify-center hover:bg-teal-400 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#42ABBC] rounded-full flex items-center justify-center hover:bg-teal-400 transition-colors"
            >
              <FaInstagram />
            </a>
          </motion.div>
        </motion.div>

        {/* Contact Form Panel */}
        <motion.div
          className="bg-white p-8 md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Send Us a Message
          </h2>
          <p className="mb-6 text-gray-600">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/2">
                <label htmlFor="firstName" className="block text-gray-700 mb-1">
                  First name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full p-3 border rounded-md ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                  aria-required="true"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className="md:w-1/2">
                <label htmlFor="lastName" className="block text-gray-700 mb-1">
                  Last name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full p-3 border rounded-md ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                  aria-required="true"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-1">
                Phone/Mobile
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your work email address"
                className={`w-full p-3 border rounded-md ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                aria-required="true"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#217083] text-white px-6 py-3 rounded-md hover:bg-[#216f83af] transition-colors flex items-center"
              >
                <div className="flex-shrink-0  flex items-center justify-center">
                  <img
                    src={images.form.send_mail}
                    alt="Research team analyzing market data"
                    className="w-full h-full object-cover"
                  />
                </div>{" "} &nbsp;
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInformation;
