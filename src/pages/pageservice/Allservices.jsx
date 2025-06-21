import React from "react";
import { useNavigate } from "react-router-dom";
import "./AllServices.css";

// Import images 
import facial1 from "../../assets/images/serviceimage/facial1.jpg";
import hairremoval4 from "../../assets/images/serviceimage/hairremoval4.jpg";
import botox4 from "../../assets/images/serviceimage/botox4.jpg";
import guasha1 from "../../assets/images/serviceimage/guasha1.jpg";
import Lymphatic1 from "../../assets/images/serviceimage/Lymphatic1.jpg";
import buccL1 from "../../assets/images/serviceimage/buccL1.jpg";
import aromatheraphy1 from "../../assets/images/serviceimage/aromatheraphy1.jpg";
import skintag1 from "../../assets/images/serviceimage/skintag1.jpg";
import cosmeticacupuncture1 from "../../assets/images/serviceimage/cosmeticacupuncture1.png";
import acpuncture1 from "../../assets/images/serviceimage/acpuncture1.jpg";
import cupping1 from "../../assets/images/serviceimage/cupping1.jpg";
import dermaplaning1 from "../../assets/images/serviceimage/dermaplaning1.jpg";
import oxygeneo1 from "../../assets/images/serviceimage/oxygeneo1.jpg";
import oxypods1 from "../../assets/images/serviceimage/oxypods1.jpg";
import microdermabrasion1 from "../../assets/images/serviceimage/microdermabrasion1.jpg";
import microneedling1 from "../../assets/images/serviceimage/microneedling1.jpg";
import calciumpeel1 from "../../assets/images/serviceimage/calciumpeel1.jpg";
import dermemelan from "../../assets/images/serviceimage/dermemelan.jpg";
import fruitpeel1 from "../../assets/images/serviceimage/fruitpeel1.jpg";
import chemicalpeels1 from "../../assets/images/serviceimage/chemicalpeels1.jpg";
import tripollar1 from "../../assets/images/serviceimage/tripollar1.jpg";
import dermalfiller1 from "../../assets/images/serviceimage/dermalfiller1.jpg";
import prp1 from "../../assets/images/serviceimage/prp1.jpg";
import mesoteraphy1 from "../../assets/images/serviceimage/mesoteraphy1.jpg";
import eyelashlift1 from "../../assets/images/serviceimage/eyelashlift1.jpg";

const allservices = [
  { id: 1, title: "Laser Hair Removal", image: hairremoval4, path: "/services/laser-hair-removal" },
  { id: 2, title: "Botox", image: botox4, path: "/services/botox" },
  { id: 3, title: "Facial Service", image: facial1, path: "/services/facial-service" },
  { id: 4, title: "Gua Sha Massage", image: guasha1, path: "/services/gua-sha-massage" },
  { id: 5, title: "Lymphatic Drainage Massage", image: Lymphatic1, path: "/services/lymphatic-drainage-massage" },
  { id: 6, title: "Buccal Massage", image: buccL1, path: "/services/buccal-massage" },
  { id: 7, title: "Aromatherapy Massage", image: aromatheraphy1, path: "/services/aromatherapy-massage" },
  { id: 8, title: "Skin tag removal", image: skintag1, path: "/services/skin-tag-removal" },
  { id: 9, title: "Cosmetic Acupuncture", image: cosmeticacupuncture1, path: "/services/cosmetic-acupuncture" },
  { id: 10, title: "Acupuncture", image: acpuncture1, path: "/services/acupuncture" },
  { id: 11, title: "Cupping", image: cupping1, path: "/services/cupping" },
  { id: 12, title: "Dermaplaning", image: dermaplaning1, path: "/services/dermaplaning" },
  { id: 13, title: "OxyPods", image: oxypods1, path: "/services/OxyPods" },
  { id: 14, title: "OxyGeneo", image: oxygeneo1, path: "/services/oxygeno" },
  { id: 15, title: "Microdermabrasion", image: microdermabrasion1, path: "/services/microdermabrasion" },
  { id: 16, title: "MicroNeedling", image: microneedling1, path: "/services/microneedling" },
  { id: 17, title: "Calcium Peels", image: calciumpeel1, path: "/services/calciumpeels" },
  { id: 18, title: "Dermamelan", image: dermemelan, path: "/services/dermamelan" },
  { id: 19, title: "Fruit acid peeling", image: fruitpeel1, path: "/services/fruitpeeling" },
  { id: 20, title: "Chemical Peels", image: chemicalpeels1, path: "/services/chemicalpeels" },
  { id: 21, title: "TriPollar(RF)", image: tripollar1, path: "/services/TriPollar" },
  { id: 22, title: "Dermal Filler", image: dermalfiller1, path: "/services/DermalFiller" },
  { id: 23, title: "PRP", image: prp1, path: "/services/Prp" },
  { id: 24, title: "Meso Therapy", image: mesoteraphy1, path: "/services/MesoTherapy" },
  { id: 25, title: "Eyelash Lift", image: eyelashlift1, path: "/services/EyelashLift" },
];

const AllServices = () => {
  const navigate = useNavigate();

  return (
    <div className="custom-container">
      <h1 className="custom-h1">Non-Surgical Cosmetic Procedures</h1>
      <p className="custom-p">
        Non-Surgical Cosmetic Procedures There’s no denying that plastic
        surgery procedures are a big step in changing or enhancing your
        appearance. You may want to change your look, but not undergo surgery,
        and that’s perfectly understandable. Surgery isn’t for everyone. In
        addition, non-surgical cosmetic procedures are appealing because they
        require little to no downtime, present very low risk of complications,
        and can often be more affordable than surgery while still offering the
        kind of results you’re seeking. Whether you want to minimize the signs
        of aging with high-quality dermal fillers, give up shaving your legs
        with laser hair removal, you have several non-surgical cosmetic
        procedures available to you, and we offer many of them right here at
        <span className="font-bold"> Maria Cosmetic Center (MCC). If, after reading about our non-surgical
        cosmetic procedures, you still have questions, feel free to schedule a
        consultation with us, and we’ll be happy to help. Beautiful skin
        starts here.</span>
      </p>
      <br />
      <div className="services-grid">
        {allservices.map(({ id, title, image, path }) => (
          <div
            key={id}
            className="service-card"
            onClick={() => navigate(path)}
            role="button"
            tabIndex={0}
            onKeyPress={() => navigate(path)}
          >
            <img src={image} alt={title} className="service-card img" />
            <div>
              <h3>{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
