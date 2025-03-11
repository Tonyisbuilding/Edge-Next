import images from "@/constant/images";
import "./component.css";

const HeroSection = () => {
  return (
    <>
      <section className=" bg-[#EEF4F5] lg:flex px-[1rem] gap-[3rem] pt-[1rem]">
        <div className=" flex items-center">
          <div>
            <h1 className=" md:text-[55.19px] text-[43px] font-black text-black montserrat
             lg:w-[25rem] lg:mt-[10rem] pt-[5rem]">
              Investing <br /> with an Edge
            </h1>
            <p className=" text-[14px] md:text-[18px] text-black font-semibold py-[1rem]">
              Using dynamic, data-driven strategies for superior returns with
              controlled risk.
            </p>
            <div className="py-[.5rem] md:py-[1rem] flex items-center gap-2">
              <div className=" flex items-center">
                <img src={images.landingPage.strategy} alt="" className=" h-[4vh] w-[15vw] md:w-[5vw] lg:w-[2vw]" />
              </div>

              <p className="text-[14px] md:text-[16px] text-black font-semibold">
                <b>Advanced Strategies — </b> Arbitrage and delta-neutral for
                high returns.{" "}
              </p>
            </div>
            <div className="py-[.5rem] flex items-center gap-2">
              <div className=" flex items-center">
                <img
                  src={images.landingPage.bolt}
                  alt=""
                  className=" h-[4vh] w-[10vw] md:w-[5vw] lg:w-[2vw]"
                />
              </div>
              <p className=" text-[14px] md:text-[16px] text-black font-semibold">
                <b>Fact-Based Expertise — </b> Rely on certainties, not
                predictions.
              </p>
            </div>
            <div className="py-[.5rem] flex gap-2">
              <div className=" flex items-center">
                <img
                  src={images.landingPage.bolt}
                  alt=""
                  className=" h-[4vh] w-[10vw] md:w-[5vw] lg:w-[2vw]"
                />
              </div>
              <p className=" text-[14px] md:text-[16px]  text-black font-semibold">
                <b>Managed Risk —</b> Controlled risk for large-scale
                investments.
              </p>
            </div>
            <div className=" md:flex md:gap-[2rem] gap-2 py-[2rem]">
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
        <div className=" lg:block hidden">
          <img src={images.landingPage.heroSection} alt="" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
