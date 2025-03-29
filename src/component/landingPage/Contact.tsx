import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <>
      <div className=" bg-[#EEF4F5] lg:flex md:pt-0 pt-[3rem]">
        <div className=" lg:w-[50%] relative">
          <ContactInfo />
        </div>
        <div className="lg:w-[50%] relative">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
