import {
  RiBookOpenLine,
  RiBankLine,
  RiHeartPulseLine,
  RiShieldLine,
  RiTruckLine,
  RiSettings3Line,
  RiHome4Line,
  RiShoppingBag3Line,
} from "react-icons/ri";
import IndustryCardShell from "./IndustryCardShell";
import healthcareBg from "../../assets/images/Industries/HealthcareBG.png";
import fintechBg from "../../assets/images/Industries/FinTechBGpng.png";
import retailBg from "../../assets/images/Industries/E-CommerceBG.png";
import educationBg from "../../assets/images/Industries/EducationBG.png";
import logisticsBg from "../../assets/images/Industries/LogisticsBG.png";
import realEstateBg from "../../assets/images/Industries/RealEstateBG.png";
import manufacturingBg from "../../assets/images/Industries/ManufacturingBG.png";
import insuranceBg from "../../assets/images/Industries/InsuranceBG.png";

const industryCards = [
  { title: "Healthcare", toneClass: "toneHealthcare", Icon: RiHeartPulseLine, bgImage: healthcareBg },
  { title: "FinTech & Banking", toneClass: "toneFintech", Icon: RiBankLine, bgImage: fintechBg },
  { title: "E-Commerce & Retail", toneClass: "toneRetail", Icon: RiShoppingBag3Line, bgImage: retailBg },
  { title: "Education & EdTech", toneClass: "toneEducation", Icon: RiBookOpenLine, bgImage: educationBg },
  { title: "Logistics & Supply Chain", toneClass: "toneLogistics", Icon: RiTruckLine, bgImage: logisticsBg },
  { title: "Real Estate & PropTech", toneClass: "toneRealEstate", Icon: RiHome4Line, bgImage: realEstateBg },
  { title: "Manufacturing & Industry", toneClass: "toneManufacturing", Icon: RiSettings3Line, bgImage: manufacturingBg },
  { title: "Insurance & InsurTech", toneClass: "toneInsurance", Icon: RiShieldLine, bgImage: insuranceBg },
];

export default function IndustryCards() {
  return (
    <div className="industryShowcaseGrid">
      {industryCards.map((card) => (
        <IndustryCardShell
          key={card.title}
          title={card.title}
          toneClass={card.toneClass}
          Icon={card.Icon}
          bgImage={card.bgImage}
        />
      ))}
    </div>
  );
}