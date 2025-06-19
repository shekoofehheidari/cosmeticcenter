import React from "react";
import srvhairremoval from "../../assets/images/serviceimage/srvhairremoval.jpg";
import srvmneedling from "../../assets/images/serviceimage/srvmicroneedling.jpg";
import srvacupuncture from "../../assets/images/serviceimage/srvacupuncture.jpg";
import srvcupping from "../../assets/images/serviceimage/srvcupping.jpg";
import srvoxygeno from "../../assets/images/serviceimage/srvoxygeneo .jpg";
import srvtagremoval from "../../assets/images/serviceimage/srvtagremoval.jpg";
import { CircleButton } from "../buttons/CircleButton";

const mccservices = [
  {
    id: 1,
    img: srvhairremoval,
    srvname: "Laser Hair Removal",
    description:
      "Effective for all skin types and genders—get smooth, hair-free skin that lasts.",
  },
  {
    id: 2,
    img: srvmneedling,
    srvname: "Microneedling",
    description:
      "Boosts collagen, reduces scars, and smooths fine lines—great for skin renewal.",
  },
  {
    id: 3,
    img: srvacupuncture,
    srvname: "Acupuncture",
    description:
      "Balances your body, eases pain, and supports wellness naturally.",
  },
  {
    id: 4,
    img: srvcupping,
    srvname: "Cupping",
    description:
      "Boosts circulation, relieves pain, and reduces tension—natural healing therapy.",
  },
  {
    id: 5,
    img: srvoxygeno,
    srvname: "Oxygeneo",
    description:
      "3-in-1 super facial—exfoliates, oxygenates, and deeply nourishes for glowing skin.",
  },
  {
    id: 6,
    img: srvtagremoval,
    srvname: "Skin Tag Removal",
    description:
      "Quick, safe, and non-invasive removal for clear, smooth skin.",
  },
];

const Services = () => {
  return (
    <div className=" bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mccservices.map((service) => (
            <div
              key={service.id}
              className="flex items-center bg-white border rounded-lg overflow-hidden shadow transition duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="w-1/3 h-full">
                <img
                  src={service.img}
                  alt={service.srvname}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-2/3 p-4 relative text-left">
                <h3 className="text-lg font-semibold mb-2">
                  {service.srvname}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
                <div className="absolute top-4 right-4">
                  <CircleButton />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
