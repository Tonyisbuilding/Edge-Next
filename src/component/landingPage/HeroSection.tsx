import images from "@/constant/images";
import "./component.css";

const HeroSection = () => {
  return (
    <>
      <section className=" bg-[#EEF4F5] lg:flex px-[25px] gap-[3rem] ">
        <div className=" flex items-center gap-[40px]">
          <div>
            <h1 className=" md:text-[55.19px] text-[43px] font-black text-black inter
             lg:w-[25rem] leading-[1.1] mb-[20px] pt-[5rem] lg:pt-[50px]">
              Investing <br /> with an Edge
            </h1>
            <p className=" text-[14px] md:text-[18px] text-[#5555] font-semibold inter py-[5px] leading-[1.5] inter">
              Using dynamic, data-driven strategies for superior returns with <br className=" hidden lg:block"/>
              controlled risk.
            </p>
            <div className="py-[.5rem] md:py-[1rem] flex items-center gap-2">
              <div className=" flex items-center">
                <img src={images.landingPage.strategy} alt="" className=" h-[4vh] w-[15vw] md:w-[5vw] lg:w-[2vw]" />
              </div>

              <p className="text-[14px] md:text-[16px] text-[#1A1A1A] font-semibold inter">
                Advanced Strategies — <span className="inter font-normal ">Arbitrage and delta-neutral for high returns.</span> 
                {" "}
              </p>
            </div>
            <div className="py-[.5rem] md:py-[1rem] flex items-center gap-2">
              <div className=" flex items-center">
                <img
                  src={images.landingPage.bolt}
                  alt=""
                  className=" h-[4vh] w-[10vw] md:w-[5vw] lg:w-[2vw]"
                />
              </div>
              <p className=" text-[14px] md:text-[16px] text-[#1A1A1A] font-semibold inter">
                Fact-Based Expertise — <span className="inter font-normal ">Rely on certainties, not
                predictions.</span> 
              </p>
            </div>
            <div className="py-[.5rem] md:py-[1rem] flex gap-2">
              <div className=" flex items-center">
                <img
                  src={images.landingPage.bolt}
                  alt=""
                  className=" h-[4vh] w-[10vw] md:w-[5vw] lg:w-[2vw]"
                />
              </div>
              <p className=" text-[14px] md:text-[16px]  text-[#1A1A1A] font-semibold inter">
                Managed Risk —<span className="inter font-normal "> Controlled risk for large-scale
                investments.</span> 
              </p>
            </div>
            <div className=" md:flex md:gap-[2rem] gap-2 py-[1rem] mb-10">
              <div className=" flex justify-center items-center mt-[1rem]">
                <button className=" bg-[#007272] text-white py-2 md:px-10 w-[100%] rounded-3xl hover:cursor-pointer">
                Get in touch!
                </button>
              </div>
              <div className=" flex justify-center items-center mt-[1rem]">
                <button className=" bg-white text-[#007272] py-2 md:px-5 w-[100%] rounded-3xl 
                hover:cursor-pointer border border-[#007272]">
                Request Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:block hidden w-[50%] flex-1  h-full overflow-hidden">
          <img src={images.landingPage.heroSection} alt="" className=" w-[85%]" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;



