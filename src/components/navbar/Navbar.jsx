import React, { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/mcclogo.png";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const location = useLocation();

  const servicesRef = useRef(null);
  const closeTimerRef = useRef(null);

  const menuItems = [
    { name: "Online Payment", path: "/online-payment" },
    { name: "Gift Card", path: "/gift-card" },
    { name: "Book Now", path: "/book-appointment" },
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
    {
      name: "Aromatherapy Massage",
      path: "/services/aromatherapy-massage",
    },
    {
      name: "Cosmetic Acupuncture",
      path: "/services/cosmetic-acupuncture",
    },
    { name: "Acupuncture", path: "/services/acupuncture" },
    { name: "Cupping", path: "/services/cupping" },
    { name: "Dermaplaning", path: "/services/dermaplaning" },
    { name: "OxyGeno", path: "/services/oxygeno" },
    { name: "Microdermabrasion", path: "/services/microdermabrasion" },
    { name: "Micro Needling", path: "/services/microneedling" },
    { name: "Calcium Peels", path: "/services/calciumpeels" },
    { name: "Dermamelan", path: "/services/dermamelan" },
    { name: "Fruit Peeling", path: "/services/fruitpeeling" },
    { name: "Chemical Peels", path: "/services/chemicalpeels" },
    { name: "TriPollar", path: "/services/tripollar" },
    /* { name: "Dermal Filler", path: "/services/dermalfiller" },
    { name: "PRP", path: "/services/prp" },
    { name: "Meso Therapy", path: "/services/mesotherapy" },
    { name: "Eyelash Lift", path: "/services/eyelashlift" }, */
    { name: "OxyPods", path: "/services/oxypods" },
  ];

  const getActiveClass = (path) => {
    const [base, hash] = path.split("#");

    const pathMatches = location.pathname === base;
    const hashMatches = hash ? location.hash === `#${hash}` : true;

    return pathMatches && hashMatches ? "active-link" : "";
  };

  const servicesIsActive = location.pathname.startsWith("/services");

  const openDesktopServices = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }

    setDropdownOpen(true);
  };

  const closeDesktopServices = () => {
    closeTimerRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 120);
  };

  const closeAllMenus = () => {
    setDropdownOpen(false);
    setMobileServicesOpen(false);
    setIsOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsOpen((prev) => {
      if (prev) {
        setMobileServicesOpen(false);
      }

      return !prev;
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    closeAllMenus();
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }

    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="logo" onClick={closeAllMenus}>
            <img src={logo} alt="Maria Cosmetic Center" />
          </Link>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <Link to="/" className={`menu-item ${getActiveClass("/")}`}>
              Home
            </Link>

            {/* Services */}
            <div
              ref={servicesRef}
              className="services-wrapper"
              onMouseEnter={openDesktopServices}
              onMouseLeave={closeDesktopServices}
            >
              <button
                type="button"
                className={`dropdown-button ${
                  servicesIsActive ? "active-link" : ""
                }`}
                onClick={() => setDropdownOpen((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                <span>Services</span>

                <ChevronDown
                  size={17}
                  strokeWidth={1.8}
                  className={`services-chevron ${dropdownOpen ? "rotate" : ""}`}
                />
              </button>

              {/* Desktop Services Dropdown */}
              <div
                className={`desktop-services-panel ${
                  dropdownOpen ? "show" : ""
                }`}
                onMouseEnter={openDesktopServices}
                onMouseLeave={closeDesktopServices}
              >
                <div className="desktop-services-inner">
                  {services.map(({ name, path }) => (
                    <Link
                      key={path}
                      to={path}
                      className={`desktop-service-item ${getActiveClass(path)}`}
                      onClick={closeAllMenus}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {menuItems.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                className={`menu-item ${getActiveClass(path)}`}
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={toggleMobileMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Desktop Background Overlay */}
      <div
        className={`desktop-dropdown-overlay ${dropdownOpen ? "show" : ""}`}
        onMouseEnter={() => setDropdownOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
        <div className="mobile-menu-inner">
          <Link
            to="/"
            className={`mobile-item ${getActiveClass("/")}`}
            onClick={closeAllMenus}
          >
            Home
          </Link>

          {/* Mobile Services */}
          <div className="mobile-services">
            <button
              type="button"
              className={`mobile-services-button ${
                servicesIsActive ? "active-link" : ""
              }`}
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              aria-expanded={mobileServicesOpen}
            >
              <span>Services</span>

              {mobileServicesOpen ? (
                <ChevronUp size={21} strokeWidth={1.7} />
              ) : (
                <ChevronDown size={21} strokeWidth={1.7} />
              )}
            </button>

            <div
              className={`mobile-services-submenu ${
                mobileServicesOpen ? "show" : ""
              }`}
            >
              <div className="mobile-services-content">
                {services.map(({ name, path }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`mobile-service-item ${getActiveClass(path)}`}
                    onClick={closeAllMenus}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {menuItems.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              className={`mobile-item ${getActiveClass(path)}`}
              onClick={closeAllMenus}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
