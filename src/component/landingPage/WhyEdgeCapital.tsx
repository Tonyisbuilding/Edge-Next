import { whyEdgeCapitalData, whyEdgeCapitalDataDutch } from "@/constant/data";
import "./component.css";
import "./whyUs.css";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";


const WhyEdgeCapital = () => {
  const { language } = useChangeLanguageContext();

  const renderData = language === 'en' ? whyEdgeCapitalData : whyEdgeCapitalDataDutch;
  return (
    <>
      <div className=" bg-[#000C0C] py-[1.5rem] md:rounded-[1rem] rounded-[1rem] px-[1rem] relative">
        <div className=" p-[.1rem]">
          <h1 className=" text-[#FFFFFF] font-bold md:text-[48px] text-[25px] montserrat md:px-[.1rem]">
            {language === 'nl' ? 'Waarom EdgeNext?' : 'Why EdgeNext?'}
          </h1>
          <p
            className=" md:text-[17.45px] text-[12px] font-normal text-[#FFFFFF] my-1 
          lg:w-[50rem] montserrat md:px-[1rem] leading-6 py-[.5rem]"
          >
            { language === 'nl' ? 'Hieronder vindt u de belangrijkste redenen waarom EdgeNext de juiste partner is voor uw beleggingen. We beantwoorden veelgestelde vragen met duidelijke en transparante inzichten, zodat u precies weet waar u aan toe bent.'
             : 'Below are the key reasons why EdgeNext is the right partner for your investments. We answer frequently asked questions with clear and transparent insights, so you know exactly what to expect.'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[1.5rem]">

          {
          renderData.map((feature, index) => (
            <div className="card" key={index}>
              <div className="icon w-[4rem] h-[4rem]">
                <img src={feature.icon} alt={`${feature.title} icon`} className='' />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))
          }
        </div>
      </div>
    </>
  );
};

export default WhyEdgeCapital;
