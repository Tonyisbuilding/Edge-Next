import { whyEdgeCapitalData, whyEdgeCapitalDataDutch } from "@/constant/data";
import "./component.css";
import "./whyUs.css";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";


const WhyEdgeCapital = () => {
  const { language } = useChangeLanguageContext();

  const renderData = language === 'en' ? whyEdgeCapitalData : whyEdgeCapitalDataDutch;
  return (
    <>
      <div className=" bg-[#192227] py-[1.5rem] md:rounded-[1rem] rounded-[1rem] px-[1rem] relative">
        <div className=" p-[.1rem]">
          <h1 className=" text-[#FFFFFF] font-bold md:text-[48px] text-[25px] montserrat md:px-[.1rem]">
            {language === 'nl' ? 'Waarom Edge Capital?' : 'Why Edge Capital?'}
          </h1>
          <p
            className=" md:text-[17.45px] text-[12px] font-normal text-[#FFFFFF] my-1 
          lg:w-[50rem] montserrat md:px-[1rem] leading-6 py-[.5rem]"
          >
            { language === 'nl' ? 'Opgericht met de steun van talrijke investeerders via uitgegeven obligaties, wat onze toewijding aan uitmuntendheid aandrijft.Ons succes is direct verbonden aan het leveren van sterke prestaties voor u.Wij geloven dat beleggen met ons u een concurrentievoordeel oplevert.Maar wat onderscheidt Edge Capital nu echt? Hieronder vindt u onze kernbeloftes aan u als investeerder.'
             : 'Founded with the support of numerous investors through issued bonds, driving our commitment to excellence. Our success is directly tied to delivering strong performance for you. We believe that investing with us gives you a competitive edge. But what truly sets Edge Capital apart Below are our core promises to you as an investor'
            }
          </p>
        </div>

        <div className="cards-grid mt-[1.5rem]">
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
