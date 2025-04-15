import { useState } from "react";
import "./component.css";
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from "react-toastify";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";


// Stuur ons je vraag
 const ContactForm = () => {
  const { language } = useChangeLanguageContext();
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
    number: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    const serviceId =  'service_ipftkif';
    const templateId = 'template_ax7014z';
    const publicKey = 'xUrVo0FDGQmrD88Dk';

    emailjs.init({
      publicKey: "YOUR_PUBLIC_KEY",
    });

    const templateParams = {
      name: formData.name,
      email: formData.email,
      to_name: 'Oluwapelumi',
      title: formData.subject,
      message: formData.message,
    }

    emailjs.send( serviceId, templateId, templateParams, publicKey)
    .then((response)=>{
      toast('Email sent successfully');
      console.log(response)
    })
    .catch((error)=>{
      console.log('Error sending sending mail', error)
    })
    setFormData({
      name: '',
      subject: '',
      email: '',
      message: '',
      number: ''
    })
  };

  return (
    <div className="flex items-center justify-center lg:min-h-screen bg-gray-100 p-4 relative 
     ">
      <ToastContainer />
      <div className="lg:w-full max-w-md bg-white rounded-[1rem] shadow-md p-8 border-black 
      border-2 2xl:max-w-[500px]">
        <h2 className="text-2xl font-bold text-left mb-6 text-black">
          { language === 'nl' ? 'Stuur ons je vraag' : 'Send us your query'}
        </h2>
        <form 
        onSubmit={(e)=>handleSubmit(e)}
         className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="name" className="text-[16.73px] font-normal montserrat text-black">
                { language === 'nl' ? 'Naam' : 'Name'}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e)=>handleChange(e)}
                placeholder={ language === 'nl' ? 'Vul je naam in' : 'Enter your name'}
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
            <label htmlFor="email" className="text-[16.73px] font-normal montserrat text-black">E-Mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e)=>handleChange(e)}
              placeholder={ language === 'nl' ? 'Vul je e-mailadres in' : 'Enter your email'}
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2
               focus:ring-blue-500 text-black bg-[#F0F0F0]"
              required
            />
          </div>
          <div>
            <label htmlFor="number" className="text-[16.73px] font-normal montserrat text-black">
              { language === 'nl' ? 'Mobiel' : 'Mobile Number'} 
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              value={formData.number}
              onChange={(e)=>handleChange(e)}
              placeholder={ language === 'nl' ? 'Vul je onderwerp in' : 'Enter your number'}
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2
               focus:ring-blue-500 text-black bg-[#F0F0F0]"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="text-[16.73px] font-normal montserrat text-black">
              { language === 'nl' ? 'Bericht' : 'Message'}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e)=>handleChange(e)}
              placeholder={ language === 'nl' ? 'Vul je bericht in' : 'Enter your message'}
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
              { language === 'nl' ? 'Verzend je bericht' : 'Send Your Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;