import { whyEdgeCapitalData } from "@/constant/data";
import "./component.css";

const WhyEdgeCapital = () => {
  return (
    <>
      <div className=" bg-[#192227] py-[1rem] md:rounded-[2rem] rounded-[1rem]">
        <div className=" p-[1rem]">
          <h1 className=" text-[#FFFFFF] font-bold md:text-[48px] text-[25px] montserrat md:px-[1rem]">
            Why Edge Capital?
          </h1>
          <p className=" md:text-[17.45px] text-[12px] font-normal text-[#FFFFFF] my-1 
          lg:w-[50rem] montserrat md:px-[1rem] leading-6">
            Founded with the support of numerous investors through issued bonds,
            driving our commitment to excellence. Our success is directly tied
            to delivering strong performance for you. We believe that investing
            with us gives you a competitive edge. But what truly sets Edge
            Capital apart? Below are our core promises to you as an investor
          </p>
        </div>

        <div className=" grid  lg:grid-cols-3 md:grid-cols-2 md:p-5 ">
          {whyEdgeCapitalData.map((data) => {
            return (
              <div key={data.id} className=" bg-[#F9A600] md:m-5 m-[.5rem] rounded-2xl">
                <div
                  className=" bg-black w-[3.5rem] h-[3.5rem] m-5 rounded-full
                 flex items-center justify-center"
                >
                  <img
                    src={data.icon}
                    alt=""
                    className=" w-[2rem] flex justify-center "
                  />
                </div>
                <div className="p-3 my-[2rem]">
                  <h1 className=" text-[26.17px] font-bold text-black montserrat">
                    {data.title}
                  </h1>
                  <p className=" text-[17.45px] font-normal mt-3 text-black montserrat">
                    {data.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WhyEdgeCapital;
