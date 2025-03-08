
interface contactInputType {
 placeholder: string;
CTAButton: string;
icon: string;
}

const ContactInput = ({placeholder,CTAButton,icon}:contactInputType) => {
  return (
    <>
      <div className=" py-[.5rem]  relative lg:w-[50%]">
        <div className=" absolute lg:top-[2rem] md:top-[2.5rem] top-[1.7rem] left-[.8rem]">
            <img src={icon} alt="" />
        </div>
        <input
          type="text"
          placeholder={placeholder}
          className=" border-2 border-[#808080] lg:w-[40vw] md:w-[80vw] w-[90vw] lg:h-[10vh] rounded-xl bg-[#F0F0F0] text-[15.8px]
          font-medium text-[#111111] pl-[3rem] h-[8vh]"
        />
        <div className=" flex  items-center mt-[.5rem] md:absolute md:top-[.3rem] lg:left-[25.2rem] md:left-[28.2rem]">
          <button className=" bg-black text-white font-medium text-[16.88px] lg:w-[10vw] md:w-[25vw] w-[89vw] 
          lg:h-[8.5vh] md:h-[7vh] h-[8vh] rounded-xl hover:cursor-pointer">
            {CTAButton}
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactInput;
