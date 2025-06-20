import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/mcclogo.png";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Online Payment", path: "/online-payment" },
    { name: "Online Shop", path: "/#shop" },
    { name: "Gift Card", path: "/gift-card" },
    { name: "Book An Appointment", path: "/book-appoinment" },
    { name: "MCC Policy", path: "/policy" },
    { name: "Contact Us", path: "/contact" },
  ];

  const services = [
    { name: "All Services", path: "/services/all-services" },
    { name: "Laser Hair Removal", path: "/services/laser-hair-removal" },
    { name: "Botox", path: "/services/botox" },
    { name: "Facial Service", path: "/services/facial-service" },
    { name: "Skin Tag Removal", path: "/services/skin-tag-removal" },
    { name: "Gua Sha Massage", path: "/services/gua-sha-massage" },
    {
      name: "Lymphatic Drainage Massage",
      path: "/services/lymphatic-drainage-massage",
    },
    { name: "Buccal Massage", path: "/services/buccal-massage" },
    { name: "Aromatherapy Massage", path: "/services/aromatherapy-massage" },
    { name: "Cosmetic Acupuncture", path: "/services/cosmetic-acupuncture" },
    { name: "Acupuncture", path: "/services/acupuncture" },
    { name: "Cupping", path: "/services/cupping" },
    { name: "Dermaplaning", path: "/services/dermaplaning" },
    { name: "OxyGeno", path: "/services/oxygeno" },
    { name: "Microdermabrasion", path: "/services/Microdermabrasion" },
    { name: "Micro Needling", path: "/services/MicroNeedling" },
    { name: "Calcium Peels", path: "/services/CalciumPeels" },
    { name: "Dermamelan", path: "/services/Dermamelan" },
    { name: "Fruit Peeling", path: "/services/Fruitpeeling" },
    { name: "Chemical Peels", path: "/services/ChemicalPeels" },
    { name: "TriPollar", path: "/services/TriPollar" },
    { name: "Dermal Filler", path: "/services/DermalFiller" },
    { name: "PRP", path: "/services/Prp" },
    { name: "Meso Therapy", path: "/services/MesoTherapy" },
    { name: "Eyelash Lift", path: "/services/EyelashLift" },

    { name: "OxyPods", path: "/services/OxyPods" },
  ];

  const getActiveClass = (path) => {
    const [base, hash] = path.split("#");
    const currentPath = location.pathname;
    const currentHash = location.hash;
    const matchPath = currentPath === base;
    const matchHash = hash ? currentHash === `#${hash}` : true;
    return matchPath && matchHash ? "active-link" : "";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="MCC Logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <div className="dropdown" ref={dropdownRef}>
            <button className="dropdown-button" onClick={toggleDropdown}>
              Our Services
            </button>

            <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
              {services.map(({ name, path }) => (
                <Link
                  key={name}
                  to={path}
                  onClick={() => setDropdownOpen(false)}
                  className={`dropdown-item ${getActiveClass(path)}`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {menuItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`menu-item ${getActiveClass(path)}`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Cart Icon */}
        <FaShoppingCart className="cart-icon" />

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-section">Our Services</div>
          {services.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setIsOpen(false)}
              className={`mobile-item ${getActiveClass(path)}`}
            >
              {name}
            </Link>
          ))}

          {menuItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setIsOpen(false)}
              className={`mobile-item ${getActiveClass(path)}`}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
