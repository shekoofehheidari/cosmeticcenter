import React from "react";
import imgaftercare from "../assets/images/aftercare.jpg";

import pricelistpfd from "../assets/pdf/PRICE-LIST-FEB-202555.pdf";
import CareHairRemoval from "../assets/pdf/After-care-hair-removal.pdf";
import careMicroneedling from "../assets/pdf/After-care-Microneedling.pdf";
import careMicDermbrasion from "../assets/pdf/After-care-Microdermabrasion.pdf";
import carePMakeup from "../assets/pdf/after-care-After-Permanent-Makeup.pdf";
import CareBotoxfiller from "../assets/pdf/After-care-Botox-filler.pdf";
import CareEyelashLift from "../assets/pdf/After-Care-Eyelash-Lift.pdf";
import CareChemicPeels from "../assets/pdf/After-Care-Chemical-Peels.pdf";
import CareDermEclat from "../assets/pdf/What-is-Derm-Eclat-before-After-Care.pdf";
import DermeclatRej from "../assets/pdf/The-Derm-eclatTM-Skin-Rejuvenation-.pdf";

// List without price list
const aftercareItems = [
  { text: "✔ After Laser Hair Removal", file: CareHairRemoval },
  { text: "✔ After Microneedling", file: careMicroneedling },
  { text: "✔ After Microdermabrasion", file: careMicDermbrasion },
  { text: "✔ After Permanent Makeup", file: carePMakeup },
  { text: "✔ After Botox & Filler", file: CareBotoxfiller },
  { text: "✔ After Eyelash lift", file: CareEyelashLift },
  { text: "✔ After Chemical Peels", file: CareChemicPeels },
  { text: "✔ Derm-Eclat before & After Care", file: CareDermEclat },
  { text: "✔ The Derm-eclat TM Skin Rejuvenation", file: DermeclatRej },
];

const Aftercare = () => {
  const openPdf = (pdfPath) => {
    window.open(pdfPath, "_blank");
  };

  return (
    <div className="custom-container">
      <div className="custom-container px-4 py-8">
        <h1 className="custom-h1">After are </h1>
        {/* Image */}
        <div className="flex justify-center mb-6">
          <img
            src={imgaftercare}
            alt="After Care"
            className="centered-image w-3/6 h-auto max-w-md rounded-lg"
          />
        </div>

        {/* Price List */}
        <div className="text-center">
          <h3
            onClick={() => openPdf(pricelistpfd)}
            className="cursor-pointer text-blue-700 hover:underline text-lg"
          >
            Service Price List
          </h3>
        </div>

        {/* Separator */}
        <hr className="my-8 border-t-2 border-gray-300" />

        {/* Aftercare List */}
        <div className="aftercare-list space-y-3">
          {aftercareItems.map((item, index) => (
            <h3
              key={index}
              onClick={() => openPdf(item.file)}
              className="cursor-pointer text-lg hover:underline"
            >
              {item.text}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aftercare;
