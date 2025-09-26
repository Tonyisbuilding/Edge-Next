import NavBar from "@/common/NavBar";
import React from "react";
import Footer from "@/common/Footer";
import Contact from "@/component/landingPage/Contact";
import ParticipantForm from "@/common/ParticipateForm";



function ParticipateForm() {
  return (
    <>
      <div
        style={{
          maxWidth: "1550px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <ParticipantForm />
        <NavBar />
        <Contact />
      <Footer />
      </div>
      {/* <EdgeCapitalFooter /> */}
    </>
  )
}

export default ParticipateForm;