import React from "react";
import ContactInput from "./ContactInput";
import images from "@/constant/images";

const ContactInfo = () => {
  return (
    <>
      <div className="md:p-[5rem] p-[1rem]">
        <div className=" bg-white w-[5rem] h-[2.5rem] flex items-center justify-center rounded-3xl">
          <button className=" text-black hover:cursor-pointer text-[1rem]">Contact</button>
        </div>
        <div className="">
          <h1 className=" text-[#111111] md:text-[50.27px] text-[30px] font-semibold ">
            We’d Love to Have you around
          </h1>
          <p className=" pt-[1rem] text-[#3D3D3D] text-[16.59px] font-normal">
            Contact us and suscribe to our news letter for inquiries, support,
            or feedback. We're here to assist you every step of the way.
          </p>
        </div>
        <div>
          <ContactInput
            placeholder="example.email@edgecapital.com"
            CTAButton="Subscribe"
            icon={images.landingPage.email}
          />
          <ContactInput
            placeholder="+00 0000 000 00"
            CTAButton="Call Us"
            icon={images.landingPage.email}
          />
          <ContactInput
            placeholder="Office"
            CTAButton="Get Direction"
            icon={images.landingPage.email}
          />
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
