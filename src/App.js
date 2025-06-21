import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Layout components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Home page sections
import Banner from "./components/banner/Banner";
import Welcome from "./components/welcome/Welcome";
import Googlereview from "./components/googlereview/Googlereview";
import AfterCare from "./components/aftercare/Aftercare";
import Promotion from "./components/promotion/Promotion";
import Services from "./components/services/Services";

// Static pages
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import GiftCard from "./pages/GiftCard";
import OnlinePayment from "./pages/OnlinePayment";
import Bookappoinment from "./pages/BookAppoinment"
import AftercarePDFs from "./pages/AftercarePFDs";

// Services pages
import AllServices from "./pages/pageservice/Allservices";
import LaserHairRemoval from "./pages/pageservice/HairRemoval";
import BotoxService from "./pages/pageservice/Botox";
import FacialService from "./pages/pageservice/Facial";
import SkinTagRemoval from "./pages/pageservice/SkinTagRemoval";
import GuaShaMassage from "./pages/pageservice/GuaShaMassage";
import LymphaticDrainage from "./pages/pageservice/LymphaticDrainage";
import BuccalMassage from "./pages/pageservice/BuccalMassage";
import AromatherapyMassage from "./pages/pageservice/AromatherapyMassage";
import CosmeticAcupuncture from "./pages/pageservice/CosmeticAcupuncture";
import Acupuncture from "./pages/pageservice/Acupuncture";
import Cupping from "./pages/pageservice/Cupping";
import Dermaplaning from "./pages/pageservice/Dermaplaning";
import OxyGeneo from "./pages/pageservice/OxyGeneo";
import Microdermabrasion from "./pages/pageservice/Microdermabrasion";
import MicroNeedling from "./pages/pageservice/MicroNeedling";
import CalciumPeels from "./pages/pageservice/CalciumPeels";
import Dermamelan from "./pages/pageservice/Dermamelan";
import Fruitpeeling from "./pages/pageservice/Fruitpeeling";
import ChemicalPeels from "./pages/pageservice/ChemicalPeels";
import TriPollar from "./pages/pageservice/TriPollar";
import DermalFiller from "./pages/pageservice/DermalFiller";
import PRP from "./pages/pageservice/Prp";
import MesoTherapy from "./pages/pageservice/MesoTherapy";
import EyelashLift from "./pages/pageservice/EyelashLift";
import OxyPods from "./pages/pageservice/OxyPods";

// 404 page
import NotFound from "./pages/NotFound";

// Home Page Component
const Home = () => (
  <>
    <Banner />
    <Welcome />
    <Services />
    <Googlereview />
    <Promotion />
    <AfterCare />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/gift-card" element={<GiftCard />} />
          <Route path="/online-payment" element={<OnlinePayment />} />
          <Route path="/after-care-pdfs" element={<AftercarePDFs />} />
          <Route path="/book-appoinment" element={<Bookappoinment />} />

          {/* Services */}
          <Route path="/services/all-services" element={<AllServices />} />
          <Route
            path="/services/laser-hair-removal"
            element={<LaserHairRemoval />}
          />
          <Route path="/services/botox" element={<BotoxService />} />
          <Route path="/services/facial-service" element={<FacialService />} />
          <Route
            path="/services/skin-tag-removal"
            element={<SkinTagRemoval />}
          />
          <Route path="/services/gua-sha-massage" element={<GuaShaMassage />} />
          <Route
            path="/services/lymphatic-drainage-massage"
            element={<LymphaticDrainage />}
          />
          <Route path="/services/buccal-massage" element={<BuccalMassage />} />
          <Route
            path="/services/aromatherapy-massage"
            element={<AromatherapyMassage />}
          />
          <Route
            path="/services/cosmetic-acupuncture"
            element={<CosmeticAcupuncture />}
          />
          <Route path="/services/acupuncture" element={<Acupuncture />} />
          <Route path="/services/cupping" element={<Cupping />} />
          <Route path="/services/dermaplaning" element={<Dermaplaning />} />
          <Route path="/services/oxygeno" element={<OxyGeneo />} />
          <Route
            path="/services/microdermabrasion"
            element={<Microdermabrasion />}
          />
          <Route path="/services/microneedling" element={<MicroNeedling />} />
          <Route path="/services/calciumpeels" element={<CalciumPeels />} />
          <Route path="/services/dermamelan" element={<Dermamelan />} />
          <Route path="/services/fruitpeeling" element={<Fruitpeeling />} />
          <Route path="/services/chemicalpeels" element={<ChemicalPeels />} />
          <Route path="/services/TriPollar" element={<TriPollar />} />
          <Route path="/services/DermalFiller" element={<DermalFiller />} />
          <Route path="/services/Prp" element={<PRP />} />
          <Route path="/services/MesoTherapy" element={<MesoTherapy />} />
          <Route path="/services/EyelashLift" element={<EyelashLift />} />
          <Route path="/services/OxyPods" element={<OxyPods />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
