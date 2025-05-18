import { useState } from "react";
import "./component.css";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";
import axiosInstance from "@/Api/AxiosInstance";
import axios from "axios";

// Stuur ons je vraag
const ContactForm = () => {
  const { language } = useChangeLanguageContext();
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    message: "",
    number: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<null | boolean>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitSuccess(null);
    setErrorMessage("");

    try {
      const response = await axiosInstance.post("/query", formData);

      if (!response) {
        const errorData: { message?: string } = await response;
        throw new Error(
          errorData.message || "Er is een onverwachte fout opgetreden."
        );
      }

      setSubmitSuccess(true);
      toast.success("Form submitted successfully!");
      setFormData({
        name: "",
        mail: "",
        message: "",
        number: "",
      });
    } catch (error: unknown) {
      console.log(error);
      setSubmitSuccess(false);
      if (error instanceof Error) {
        setErrorMessage(
          error.message || "Er is een onverwachte fout opgetreden."
        );
      } else {
        setErrorMessage("Er is een onverwachte fout opgetreden.");
      }
      //
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Er is een onverwachte fout opgetreden."
      );

      if (
        error &&
        typeof error === "object" &&
        "response" in error &&
        error.response &&
        typeof error.response === "object" &&
        "data" in error.response
      ) {
        if (axios.isAxiosError(error) && error.response?.data?.error) {
          toast.error(error.response.data.error);
        }
      }
    } finally {
      setIsSubmitting(false);
    }
    console.log(submitSuccess)
    console.log(errorMessage)
  };

  return (
    <div
      className="flex items-center justify-center lg:min-h-screen bg-gray-100 p-4 relative 
     "
    >
      <ToastContainer />
      <div
        className="lg:w-full max-w-md bg-white rounded-[1rem] shadow-md p-8 border-black 
      border-2 2xl:max-w-[500px]"
      >
        <h2 className="text-2xl font-bold text-left mb-6 text-black">
          {language === "nl" ? "Vraag informatie aan" : "Request information"}
        </h2>
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label
                htmlFor="name"
                className="text-[16.73px] font-normal montserrat text-black"
              >
                {language === "nl" ? "Naam" : "Name"}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => handleChange(e)}
                placeholder={
                  language === "nl" ? "Vul u naam in" : "Enter your name"
                }
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none 
                focus:ring-2 focus:ring-blue-500 text-black bg-[#F0F0F0]"
                required
              />
            </div>
            {/* <div>
              <label htmlFor="subject" className="text-[16.73px] font-normal montserrat text-black">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={(e)=>handleChange(e)}
                placeholder="Enter your subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2
                 focus:ring-blue-500 text-black"
                required
              />
            </div> */}
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-[16.73px] font-normal montserrat text-black"
            >
              E-Mail
            </label>
            <input
              type="email"
              id="mail"
              name="mail"
              value={formData.mail}
              onChange={(e) => handleChange(e)}
              placeholder={
                language === "nl" ? "Vul uw e-mailadres in" : "Enter your email"
              }
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2
               focus:ring-blue-500 text-black bg-[#F0F0F0]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="number"
              className="text-[16.73px] font-normal montserrat text-black"
            >
              {language === "nl" ? "Mobiel" : "Mobile Number"}
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              value={formData.number}
              onChange={(e) => handleChange(e)}
              placeholder={
                language === "nl"
                  ? "Vul uw mobiele nummer in"
                  : "Enter your number"
              }
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2
               focus:ring-blue-500 text-black bg-[#F0F0F0]"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-[16.73px] font-normal montserrat text-black"
            >
              {language === "nl" ? "Bericht" : "Message"}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => handleChange(e)}
              placeholder={
                language === "nl"
                  ? "Laat uw bericht achter"
                  : "Enter your message"
              }
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2
               focus:ring-blue-500 text-black bg-[#F0F0F0]"
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-[#192227] text-white py-2 rounded-md hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {/* {language === "nl" ? "Verzend uw bericht" : "Send Your Message"} */}
              {isSubmitting ? (
                <>
                  {language === "nl"
                    ? "Bezig met verzenden..."
                    : "Submitting..."}
                </>
              ) : (
                <>
                  {/* <Send size={18} className="mr-2" /> */}
                  {language === "nl"
                    ? "Verzend uw bericht"
                    : "Send Your Message"}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
