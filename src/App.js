import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import servicesRoutes from "./routes/servicesRoutes";

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
import BookAppointment from "./pages/BookAppoinment";
import AftercarePDFs from "./pages/AftercarePFDs";

// 404 page
import NotFound from "./pages/NotFound";
import CustomerReviews from "./components/CustomerReviews/CustomerReviews";

// Home Page Component
const Home = () => (
  <>
    <Banner />
    <Welcome />
    <Services />
    <Googlereview />
    <Promotion />
    <AfterCare />
    <CustomerReviews />
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
          <Route path="/book-appointment" element={<BookAppointment />} />

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
