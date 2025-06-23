import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import servicesRoutes from "./routes/servicesRoutes";


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
import Bookappoinment from "./pages/BookAppoinment";
import AftercarePDFs from "./pages/AftercarePFDs";

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
        <Suspense fallback={<div className="loading">در حال بارگذاری...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* سایر مسیرها */}

            {servicesRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/gift-card" element={<GiftCard />} />
          <Route path="/online-payment" element={<OnlinePayment />} />
          <Route path="/after-care-pdfs" element={<AftercarePDFs />} />
          <Route path="/book-appoinment" element={<Bookappoinment />} />

          {/* Dynamic services routes */}
          {servicesRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
