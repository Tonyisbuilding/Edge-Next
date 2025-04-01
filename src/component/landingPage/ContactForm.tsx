import { useState } from "react";
import "./component.css";


 const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: ''
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
  };

  return (
    <div className="flex items-center justify-center lg:min-h-screen bg-gray-100 p-4 relative
     ">
      <div className="lg:w-full max-w-md bg-white rounded-[1rem] shadow-md p-8 border-black border-2">
        <h2 className="text-2xl font-bold text-left mb-6 text-black">Send us your query</h2>
        <form 
        onSubmit={(e)=>handleSubmit(e)}
         className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="name" className="text-[16.73px] font-normal montserrat text-black">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e)=>handleChange(e)}
                placeholder="Enter your name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none 
                focus:ring-2 focus:ring-blue-500 text-black"
                required
              />
            </div>
            <div>
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
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="text-[16.73px] font-normal montserrat text-black">E-Mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e)=>handleChange(e)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2
               focus:ring-blue-500 text-black"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="text-[16.73px] font-normal montserrat text-black">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e)=>handleChange(e)}
              placeholder="Enter your message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2
               focus:ring-blue-500 text-black"
              required
            ></textarea>
          </div>
          
          <div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Your Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;