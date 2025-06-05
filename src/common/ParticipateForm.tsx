import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Flag,
  Globe,
  User,
  FileText,
  Calendar,
  DollarSign,
} from "lucide-react";
import axiosInstance from "@/Api/AxiosInstance";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// Define interfaces for our data structures
// interface Country {
//   code: string;
//   name: string;
// }

// interface PhonePrefix {
//   code: string;
//   country: string;
// }

interface FormData {
  name: string;
  street: string;
  zipcode: string;
  city: string;
  country: string;
  nationality: string;
  phone: string;
  mail: string;
  iban: string; // New field
  onBehalfOf: string; // New field
 tin: string; // New field
  idType: string; // New field
  idNumber: string; // New field
  dateOfBirth: string; // New field
  initialDeposit: string; // New field
  
}

// Type guard function to validate the form data
function isValidFormData(
  data: FormData,
  content: {
    form: {
      errors: {
        nameRequired: string;
        phoneRequired: string;
        emailRequired: string;
        emailInvalid: string;
        ibanRequired: string;
        dateOfBirthRequired: string;
        initialDepositRequired: string;
      };
    };
  }
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name.trim()) {
    errors.push(content.form.errors.nameRequired);
  }

  if (!data.phone.trim()) {
    errors.push(content.form.errors.phoneRequired);
  }

  if (!data.mail.trim()) {
    errors.push(content.form.errors.emailRequired);
  } else if (!isValidEmail(data.mail)) {
    errors.push(content.form.errors.emailInvalid);
  }

  if (!data.iban.trim()) {
    errors.push(content.form.errors.ibanRequired);
  }

  if (!data.dateOfBirth) {
    errors.push(content.form.errors.dateOfBirthRequired);
  }

  if (!data.initialDeposit || Number(data.initialDeposit) <= 0) {
    errors.push(content.form.errors.initialDepositRequired);
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

// Email validation function
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const ParticipantForm: React.FC = () => {
  const { language } = useChangeLanguageContext();
  // const [phonePrefix, setPhonePrefix] = useState<string>("+1");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    street: "",
    zipcode: "",
    city: "",
    country: "",
    nationality: "",
    phone: "",
    mail: "",
    iban: "",
    onBehalfOf: "",
    tin: "",
    idType: "",
    idNumber: "",
    dateOfBirth: "",
    initialDeposit: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>("");

  // Define translations for English and Dutch
  const translations = {
    en: {
      header: "Participant Form",
      description: "Please fill in your details to participate",
      form: {
        nameLabel: "Name",
        streetLabel: "Street Name and House Number",
        zipcodeLabel: "Zip Code",
        cityLabel: "City",
        countryLabel: "Country",
        nationalityLabel: "Nationality",
        phoneLabel: "Phone Number",
        emailLabel: "E-mail",
        ibanLabel: "IBAN", // New field
        onBehalfOfLabel: "On behalf of", // New field
        tinLabel: "Tax Identification Number (TIN)", // New field
        idTypeLabel: "Type of Identification Document", // New field
        idNumberLabel: "Document Number", // New field
        dateOfBirthLabel: "Date of Birth", // New field
        initialDepositLabel: "Initial Deposit", // New field
        namePlaceholder: "Name",
        streetPlaceholder: "Streetname and housenumber",
        zipcodePlaceholder: "Zipcode",
        cityPlaceholder: "City",
        countryPlaceholder: "Select Country",
        nationalityPlaceholder: "Select Nationality",
        phonePlaceholder: "Phone Number",
        emailPlaceholder: "Email",
        ibanPlaceholder: "Enter your IBAN", // New field
        onBehalfOfPlaceholder: "Enter name of person/organization", // New field
        tinPlaceholder: "Enter your TIN", // New field
        idTypePlaceholder: "Select Document Type", // New field
        idNumberPlaceholder: "Enter document number", // New field
        dateOfBirthPlaceholder: "Select date of birth", // New field
        initialDepositPlaceholder: "Enter amount", // New field
        countries: [
          { code: "US", name: "United States" },
          { code: "CA", name: "Canada" },
          { code: "UK", name: "United Kingdom" },
          { code: "AU", name: "Australia" },
          { code: "DE", name: "Germany" },
          { code: "FR", name: "France" },
          { code: "JP", name: "Japan" },
        ],
        phonePrefixes: [
          { code: "+1", country: "US/CA" },
          { code: "+44", country: "UK" },
          { code: "+61", country: "AU" },
          { code: "+49", country: "DE" },
          { code: "+33", country: "FR" },
          { code: "+81", country: "JP" },
        ],
        idTypes: [
          { value: "", label: "Select Document Type" },
          { value: "passport", label: "Passport" },
          { value: "id_card", label: "ID Card" },
          { value: "drivers_license", label: "Driver's License" },
        ],
        submitButton: "Participate",
        submittingText: "Submitting...",
        successMessage: "Form submitted successfully!",
        errors: {
          nameRequired: "Name is required",
          phoneRequired: "Phone number is required",
          emailRequired: "Email is required",
          emailInvalid: "Invalid email format",
          ibanRequired: "IBAN is required", // New field
          dateOfBirthRequired: "Date of birth is required", // New field
          initialDepositRequired: "Initial deposit must be greater than 0", // New field
          defaultError: "Failed to submit form. Please try again later.",
        },
      },
    },
    nl: {
      header: "Deelnemersformulier",
      description: "Vul uw gegevens in om deel te nemen",
      form: {
        nameLabel: "Naam",
        streetLabel: "Straatnaam en Huisnummer",
        zipcodeLabel: "Postcode",
        cityLabel: "Stad",
        countryLabel: "Land",
        nationalityLabel: "Nationaliteit",
        phoneLabel: "Telefoonnummer",
        emailLabel: "E-mail",
        ibanLabel: "IBAN", // New field
        onBehalfOfLabel: "Namens", // New field
        tinLabel: "Belastingidentificatienummer (BSN)", // New field
        idTypeLabel: "Type Identificatiedocument", // New field
        idNumberLabel: "Documentnummer", // New field
        dateOfBirthLabel: "Geboortedatum", // New field
        initialDepositLabel: "Initiële Storting", // New field
        namePlaceholder: "Naam",
        streetPlaceholder: "Straatnaam en huisnummer",
        zipcodePlaceholder: "Postcode",
        cityPlaceholder: "Stad",
        countryPlaceholder: "Selecteer Land",
        nationalityPlaceholder: "Selecteer Nationaliteit",
        phonePlaceholder: "Telefoonnummer",
        emailPlaceholder: "E-mail",
        ibanPlaceholder: "Voer uw IBAN in", // New field
        onBehalfOfPlaceholder: "Voer naam van persoon/organisatie in", // New field
        tinPlaceholder: "Voer uw BSN in", // New field
        idTypePlaceholder: "Selecteer Documenttype", // New field
        idNumberPlaceholder: "Voer documentnummer in", // New field
        dateOfBirthPlaceholder: "Selecteer geboortedatum", // New field
        initialDepositPlaceholder: "Voer bedrag in", // New field
        countries: [
          { code: "US", name: "Verenigde Staten" },
          { code: "CA", name: "Canada" },
          { code: "UK", name: "Verenigd Koninkrijk" },
          { code: "AU", name: "Australië" },
          { code: "DE", name: "Duitsland" },
          { code: "FR", name: "Frankrijk" },
          { code: "JP", name: "Japan" },
        ],
        phonePrefixes: [
          { code: "+1", country: "VS/CA" },
          { code: "+44", country: "VK" },
          { code: "+61", country: "AU" },
          { code: "+49", country: "DE" },
          { code: "+33", country: "FR" },
          { code: "+81", country: "JP" },
        ],
        idTypes: [
          { value: "", label: "Selecteer Documenttype" },
          { value: "passport", label: "Paspoort" },
          { value: "id_card", label: "ID-kaart" },
          { value: "drivers_license", label: "Rijbewijs" },
        ],
        submitButton: "Deelnemen",
        submittingText: "Bezig met verzenden...",
        successMessage: "Formulier succesvol verzonden!",
        errors: {
          nameRequired: "Naam is verplicht",
          phoneRequired: "Telefoonnummer is verplicht",
          emailRequired: "E-mail is verplicht",
          emailInvalid: "Ongeldig e-mailformaat",
          ibanRequired: "IBAN is verplicht", // New field
          dateOfBirthRequired: "Geboortedatum is verplicht", // New field
          initialDepositRequired: "Initiële storting moet groter zijn dan 0", // New field
          defaultError:
            "Kan het formulier niet verzenden. Probeer het later opnieuw.",
        },
      },
    },
  };

  // Select the appropriate content based on language, with fallback to English
  const content = translations[language] || translations.en;
  const countries = content.form.countries;
  // const phonePrefixes = content.form.phonePrefixes;
  const idTypes = content.form.idTypes;

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, backgroundColor: "#219EB2" },
    tap: { scale: 0.95 },
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // const handlePrefixChange = (e: ChangeEvent<HTMLSelectElement>): void => {
  //   setPhonePrefix(e.target.value);
  // };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");

    // Validate form data using type guard
    const validation = isValidFormData(formData, content);
    if (!validation.valid) {
      setFormError(validation.errors.join(". "));
      setIsSubmitting(false);
      return;
    }

    const payload = {
      ...formData,
      // phone: phonePrefix + formData.phone,
      phone: formData.phone,
    };

    console.log(payload, "payload");
    try {
      const response = await axiosInstance.post("/participate", payload);

      // alert(content.form.successMessage);
      toast.success(content.form.successMessage);
      console.log(response);
      // Reset form after successful submission
      setFormData({
        name: "",
        street: "",
        zipcode: "",
        city: "",
        country: "",
        nationality: "",
        phone: "",
        mail: "",
        iban: "",
        onBehalfOf: "",
        tin: "",
        idType: "",
        idNumber: "",
        dateOfBirth: "",
        initialDeposit: "",
      });
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : content.form.errors.defaultError
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
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-50
     to-indigo-50 pt-16 mt-[5rem]"
    >
      <ToastContainer />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={formVariants}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Header with decorative elements */}
        <div className="relative bg-gradient-to-br from-[#206D80] from-20% to-[#219EB2] to-50% text-white py-8 px-6">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#206D80] rounded-full -mr-16 -mt-16 opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#206D80] rounded-full -ml-10 -mb-10 opacity-20"></div>
          <motion.h1
            variants={itemVariants}
            className="text-3xl font-bold relative z-10"
          >
            {content.header}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-indigo-100 mt-2 relative z-10"
          >
            {content.description}
          </motion.p>
        </div>

        {/* Form content */}
        <div className="p-6 md:p-8">
          {formError && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg">
              {formError}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <motion.div variants={itemVariants} className="md:col-span-2">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  {content.form.nameLabel}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    id="name"
                    type="text"
                    placeholder={content.form.namePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10 w-full py-2 px-4 bg-gray-50 border border-gray-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#219EB2] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </motion.div>

              {/* Street Name and House Number */}
              <motion.div variants={itemVariants} className="md:col-span-2">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="street"
                >
                  {content.form.streetLabel}
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    id="street"
                    type="text"
                    placeholder={content.form.streetPlaceholder}
                    value={formData.street}
                    onChange={handleChange}
                    className="pl-10 w-full py-2 px-4 bg-gray-50 border border-gray-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:[#219EB2] focus:border-transparent transition-all"
                  />
                </div>
              </motion.div>

              {/* Zip Code */}
              <motion.div variants={itemVariants}>
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="zipcode"
                >
                  {content.form.zipcodeLabel}
                </label>
                <input
                  id="zipcode"
                  type="text"
                  placeholder={content.form.zipcodePlaceholder}
                  value={formData.zipcode}
                  onChange={handleChange}
                  className="w-full py-2 px-4 bg-gray-50 border border-gray-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#219EB2] focus:border-transparent transition-all"
                />
              </motion.div>

              {/* City */}
              <motion.div variants={itemVariants}>
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="city"
                >
                  {content.form.cityLabel}
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder={content.form.cityPlaceholder}
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full py-2 px-4 bg-gray-50 border border-gray-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#219EB2] focus:border-transparent transition-all"
                />
              </motion.div>

              {/* Country */}
              <motion.div variants={itemVariants}>
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="country"
                >
                  {content.form.countryLabel}
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    id="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="pl-10 w-full py-2 px-4 bg-gray-50 border border-gray-200 rounded-lg text-black appearance-none focus:outline-none focus:ring-2 focus:ring-[#219EB2] focus:border-transparent transition-all"
                  >
                    <option value="" disabled>
                      {content.form.countryPlaceholder}
                    </option>
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </motion.div>

              {/* Nationality */}
              <motion.div variants={itemVariants}>
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="nationality"
                >
                  {content.form.nationalityLabel}
                </label>
                <div className="relative">
                  <Flag className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    id="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className="pl-10 w-full py-2 px-4 bg-gray-50 border border-gray-200 rounded-lg text-black appearance-none focus:outline-none focus:ring-2 focus:ring-[#219EB2] focus:border-transparent transition-all"
                  >
                    <option value="" disabled>
                      {content.form.nationalityPlaceholder}
                    </option>
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </motion.div>

              {/* Date of Birth */}
              <motion.div variants={itemVariants} className="md:col-span-2">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="dateOfBirth"
                >
                  {content.form.dateOfBirthLabel}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="pl-10 w-full py-2 px-4 bg-gray-50 border border-gray-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#219EB2] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </motion.div>

              {/* IBAN */}
              <motion.div variants={itemVariants} className="md:col-span-2">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="iban"
                >
                  {content.form.ibanLabel}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    id="iban"
                    type="text"
                    placeholder={content.form.ibanPlaceholder}
                    value={formData.iban}
                    onChange={handleChange}
                    className="pl-10 w-full py-2 px-4 bg-gray-50 border border-gray-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#219EB2] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </motion.div>

              {/* On behalf of */}
              <motion.div variants={itemVariants} className="md:col-span-2">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="onBehalfOf"
                >
                  {content.form.onBehalfOfLabel}
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    id="onBehalfOf"
                    type="text"
                    placeholder={content.form.onBehalfOfPlaceholder}
                    value={formData.onBehalfOf}
                    onChange={handleChange}
                    className="pl-10 w-full py-2 px-4 bg-gray-50 border border-gray-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#219EB2] focus:border-transparent transition-all"
                  />
                </div>
              </motion.div>

              {/* Tax Identification Number (TIN) */}
              <motion.div variants={itemVariants} className="md:col-span-2">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="tin"
                >
                  {content.form.tinLabel}
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    id="tin"
                    type="text"
                    placeholder={content.form.tinPlaceholder}
                    value={formData.tin}
                    onChange={handleChange}
                    className="pl-10 w-full py-2 px-4 bg-gray-50 border border-gray-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#219EB2] focus:border-transparent transition-all"
                  />
                </div>
              </motion.div>

              {/* Type of Identification Document */}
              <motion.div variants={itemVariants}>
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="idType"
                >
                  {content.form.idTypeLabel}
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    id="idType"
                    value={formData.idType}
                    onChange={handleChange}
                    className="pl-10 w-full py-2 px-4 bg-gray-50 border border-gray-200 rounded-lg text-black appearance-none focus:outline-none focus:ring-2 focus:ring-[#219EB2] focus:border-transparent transition-all"
                  >
                    {idTypes.map((type) => (
                      <option
                        key={type.value}
                        value={type.value}
                        disabled={type.value === ""}
                      >
                        {type.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </motion.div>

              {/* Document Number */}
              <motion.div variants={itemVariants}>
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="idNumber"
                >
                  {content.form.idNumberLabel}
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    id="idNumber"
                    type="text"
                    placeholder={content.form.idNumberPlaceholder}
                    value={formData.idNumber}
                    onChange={handleChange}
                    className="pl-10 w-full py-2 px-4 bg-gray-50 border border-gray-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#219EB2] focus:border-transparent transition-all"
                  />
                </div>
              </motion.div>

              {/* Initial Deposit */}
              <motion.div variants={itemVariants} className="md:col-span-2">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="initialDeposit"
                >
                  {content.form.initialDepositLabel}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    id="initialDeposit"
                    type="number"
                    placeholder={content.form.initialDepositPlaceholder}
                    value={formData.initialDeposit}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    className="pl-10 w-full py-2 px-4 bg-gray-50 border border-gray-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#219EB2] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </motion.div>

              {/* Phone Number with country code */}
              <motion.div variants={itemVariants} className="md:col-span-2">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="phone"
                >
                  {content.form.phoneLabel}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <div className="relative flex-1">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      id="phone"
                      type="tel"
                      placeholder={content.form.phonePlaceholder}
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10 w-full py-2 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#219EB2] focus:border-transparent transition-all text-black"
                      required
                    />
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants} className="md:col-span-2">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="mail"
                >
                  {content.form.emailLabel}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    id="mail"
                    type="email"
                    placeholder={content.form.emailPlaceholder}
                    value={formData.mail}
                    onChange={handleChange}
                    className="pl-10 w-full py-2 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#219EB2] focus:border-transparent transition-all text-black"
                    required
                  />
                </div>
              </motion.div>
            </div>

            {/* Submit Button */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex justify-end"
            >
              <motion.button
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-to-br from-[#206D80] from-20% to-[#219EB2] to-50% text-white font-medium rounded-4xl shadow-lg transition-all flex items-center justify-center disabled:bg-[#219EB2] disabled:cursor-not-allowed"
              >
                <span>
                  {isSubmitting
                    ? content.form.submittingText
                    : content.form.submitButton}
                </span>
                {!isSubmitting && (
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="ml-2"
                  >
                    →
                  </motion.div>
                )}
              </motion.button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ParticipantForm;
