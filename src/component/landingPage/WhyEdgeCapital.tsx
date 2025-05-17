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
            { language === 'nl' ? 'Onze onderneming is mede tot stand gekomen door investeringen van tientallen beleggers middels uitgegeven obligaties, hierdoor is onze motivatie ontzettend groot om van de onderneming een succes te maken, dit kunnen we alleen bereiken door voor u te presteren! Wij zijn mening dat beleggen via ons beleggen met een streepje voor is! Maar wat onderscheidt Edge Capital nu van andere beleggingsondernemingen? Hieronder onze beloftes aan u als belegger.'
             : 'Founded with the support of numerous investors through issued bonds, driving our commitment to excellence. Our success is directly tied to delivering strong performance for you. We believe that investing with us gives you a competitive edge. But what truly sets Edge Capital apart Below are our core promises to you as an investor'
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
