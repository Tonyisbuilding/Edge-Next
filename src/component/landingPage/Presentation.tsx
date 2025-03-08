import images from "@/constant/images";

const Presentation = () => {
  const Questions = [
    {
      id: 1,
      Quest: "Live Q&A to address your key concerns.",
    },
    {
      id: 2,
      Quest: "Customized insights for your investment goals.",
    },
    {
      id: 1,
      Quest: "Customized insights for your investment goals.",
    },
  ];

  return (
    <>
      <div
        className=" bg-[#EEF4F5] lg:flex flex flex-col-reverse lg:flex-row  justify-center 
       items-center lg:p-[5rem] md:p-[3rem] p-[1rem] relative"
      >
        <div>
          <div>
            <img
              src={images.landingPage.dots_one}
              alt=""
              className="absolute right-0 top-0"
            />
          </div>
        </div>
        <div className="video-container lg:w-[50%] lg:mt-0 mt-[3rem]">
          <video
            // width="320"
            // height="240"
            className=" lg:w-[40vw] lg:h-[70vh] md:h-[50vh] h-[41.7vh]  rounded-3xl border-2 border-black"
            controls
            // Add these optimizations
            preload="metadata" // Reduces initial load
            poster={images.landingPage.presentationPreview} // Shows a preview before video loads
            aria-label="Presentation Video" // Accessibility
            crossOrigin="anonymous" // If video is from different domain
          >
            <source src={images.landingPage.presentationVid} type="video/mp4" />
            <source src="/path/to/fallback.webm" type="video/webm" />
            {/* Accessibility text track */}
            <track
              kind="captions"
              src="/path/to/captions.vtt"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className=" lg:w-[50%] ">
          <h2 className=" text-left  text-[#192227] text-[30px] montserrat font-bold lg:w-[30rem]">
            Secure Your Exclusive Presentation
          </h2>
          <p className=" font-normal text-[17.45px] text-[#1A1A1A] montserrat py-5 lg:w-[30rem]">
            Starting a new investment is a significant step! Before you make
            that decision, it’s important to get well-informed. Through an
            online presentation (duration: approximately 30 minutes), we provide
            you with a clear and comprehensive overview of our organization and
            products.
          </p>
          <div className=" py-5">
            {Questions.map((data) => {
              return (
                <div key={data.id} className=" flex gap-5 p-2">
                  <div>
                    <img src={images.landingPage.check_circle} alt="" />
                  </div>
                  <div>
                    <p className=" text-[16px] text-black font-normal">
                      {data.Quest}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" flex  items-center mt-[.5rem] ">
            <button className=" bg-black text-white py-2 px-5 rounded-3xl hover:cursor-pointer">
              Schedule a presentation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Presentation;
