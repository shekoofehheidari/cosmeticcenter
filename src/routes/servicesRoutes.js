import React from "react";

// Services pages

const AllServices = React.lazy(() =>
  import("../pages/pageservice/Allservices")
);
const LaserHairRemoval = React.lazy(() =>
  import("../pages/pageservice/HairRemoval")
);
const BotoxService = React.lazy(() => import("../pages/pageservice/Botox"));
const FacialService = React.lazy(() => import("../pages/pageservice/Facial"));
const SkinTagRemoval = React.lazy(() =>
  import("../pages/pageservice/SkinTagRemoval")
);
const GuaShaMassage = React.lazy(() =>
  import("../pages/pageservice/GuaShaMassage")
);
const LymphaticDrainage = React.lazy(() =>
  import("../pages/pageservice/LymphaticDrainage")
);
const BuccalMassage = React.lazy(() =>
  import("../pages/pageservice/BuccalMassage")
);
const AromatherapyMassage = React.lazy(() =>
  import("../pages/pageservice/AromatherapyMassage")
);
const CosmeticAcupuncture = React.lazy(() =>
  import("../pages/pageservice/CosmeticAcupuncture")
);
const Acupuncture = React.lazy(() =>
  import("../pages/pageservice/Acupuncture")
);
const Cupping = React.lazy(() => import("../pages/pageservice/Cupping"));
const Dermaplaning = React.lazy(() =>
  import("../pages/pageservice/Dermaplaning")
);
const OxyGeneo = React.lazy(() => import("../pages/pageservice/OxyGeneo"));
const Microdermabrasion = React.lazy(() =>
  import("../pages/pageservice/Microdermabrasion")
);
const MicroNeedling = React.lazy(() =>
  import("../pages/pageservice/MicroNeedling")
);
const CalciumPeels = React.lazy(() =>
  import("../pages/pageservice/CalciumPeels")
);
const Dermamelan = React.lazy(() => import("../pages/pageservice/Dermamelan"));
const Fruitpeeling = React.lazy(() =>
  import("../pages/pageservice/Fruitpeeling")
);
const ChemicalPeels = React.lazy(() =>
  import("../pages/pageservice/ChemicalPeels")
);
const TriPollar = React.lazy(() => import("../pages/pageservice/TriPollar"));
const DermalFiller = React.lazy(() =>
  import("../pages/pageservice/DermalFiller")
);
const PRP = React.lazy(() => import("../pages/pageservice/Prp"));
const MesoTherapy = React.lazy(() =>
  import("../pages/pageservice/MesoTherapy")
);
const EyelashLift = React.lazy(() =>
  import("../pages/pageservice/EyelashLift")
);
const OxyPods = React.lazy(() => import("../pages/pageservice/OxyPods"));

const servicesRoutes = [
  { path: "/services/all-services", element: <AllServices /> },
  { path: "/services/laser-hair-removal", element: <LaserHairRemoval /> },
  { path: "/services/botox", element: <BotoxService /> },
  { path: "/services/facial-service", element: <FacialService /> },
  { path: "/services/skin-tag-removal", element: <SkinTagRemoval /> },
  { path: "/services/gua-sha-massage", element: <GuaShaMassage /> },
  {
    path: "/services/lymphatic-drainage-massage",
    element: <LymphaticDrainage />,
  },
  { path: "/services/buccal-massage", element: <BuccalMassage /> },
  { path: "/services/aromatherapy-massage", element: <AromatherapyMassage /> },
  { path: "/services/cosmetic-acupuncture", element: <CosmeticAcupuncture /> },
  { path: "/services/acupuncture", element: <Acupuncture /> },
  { path: "/services/cupping", element: <Cupping /> },
  { path: "/services/dermaplaning", element: <Dermaplaning /> },
  { path: "/services/oxygeno", element: <OxyGeneo /> },
  { path: "/services/microdermabrasion", element: <Microdermabrasion /> },
  { path: "/services/microneedling", element: <MicroNeedling /> },
  { path: "/services/calciumpeels", element: <CalciumPeels /> },
  { path: "/services/dermamelan", element: <Dermamelan /> },
  { path: "/services/fruitpeeling", element: <Fruitpeeling /> },
  { path: "/services/chemicalpeels", element: <ChemicalPeels /> },
  { path: "/services/TriPollar", element: <TriPollar /> },
  { path: "/services/DermalFiller", element: <DermalFiller /> },
  { path: "/services/Prp", element: <PRP /> },
  { path: "/services/MesoTherapy", element: <MesoTherapy /> },
  { path: "/services/EyelashLift", element: <EyelashLift /> },
  { path: "/services/OxyPods", element: <OxyPods /> },
];

export default servicesRoutes;
