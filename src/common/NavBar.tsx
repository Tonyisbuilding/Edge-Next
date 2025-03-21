import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars, faXmark, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "./common.css";
import images from "@/constant/images";

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [activeDropdowns, setActiveDropdowns] = useState<any>({});
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };


  const toggleDropdown = (index:number, e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      setActiveDropdowns({
        ...activeDropdowns,
        [index]: !activeDropdowns[index]
      });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo-container">
          <img src={images.landingPage.ECLogo} alt="Edge Fund Logo" className="logo" />
        </Link>

        <ul className={`nav-links ${isNavActive ? 'active' : ''}`}>
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item">
            <a href="#" className={`dropdown-toggle ${activeDropdowns[1] ? 'active' : ''}`} onClick={(e) => toggleDropdown(1, e)}>
              About Us
              <FontAwesomeIcon icon={activeDropdowns[1] ? faChevronUp : faChevronDown} style={{ marginLeft: '5px', fontSize: '0.8em' }} />
            </a>
            <ul className={`dropdown-menu ${activeDropdowns[1] ? 'show' : ''}`}>
              <li><Link to="/about">About</Link></li> {/* Updated Link */}
              <li><Link to="/team">Team</Link></li>   {/* Updated Link */}
            </ul>
          </li>
          <li className="nav-item"><Link to="/edge-fund">Edge Fund</Link></li>
          <li className="nav-item">
            <a href="#" className={`dropdown-toggle ${activeDropdowns[2] ? 'active' : ''}`} onClick={(e) => toggleDropdown(2, e)}>
              Edge Impact
              <FontAwesomeIcon icon={activeDropdowns[2] ? faChevronUp : faChevronDown} style={{ marginLeft: '5px', fontSize: '0.8em' }} />
            </a>
            <ul className={`dropdown-menu ${activeDropdowns[2] ? 'show' : ''}`}>
              <li><Link to="/edge-cares">Edge Cares</Link></li>
              <li><Link to="/edge-foundation">Edge Foundation</Link></li>
              <li><Link to="/edge-horizon">Edge Horizon Foundation</Link></li>
            </ul>
          </li>
          <li className="nav-item"><Link to="/institutional">Institutional</Link></li>
          <li className="nav-item">
            <a href="#" className={`dropdown-toggle ${activeDropdowns[3] ? 'active' : ''}`} onClick={(e) => toggleDropdown(3, e)}>
              Company
              <FontAwesomeIcon icon={activeDropdowns[3] ? faChevronUp : faChevronDown} style={{ marginLeft: '5px', fontSize: '0.8em' }} />
            </a>
            <ul className={`dropdown-menu ${activeDropdowns[3] ? 'show' : ''}`}>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/media">Media</Link></li>
              <li><Link to="/documents">Documents</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </li>

          <div className="nav-actions-mobile">
            <div className="phone">
              <FontAwesomeIcon icon={faPhone} />
              <span>+31 6 13 484 484</span>
            </div>
            <button className="nav-cta">Contact Us</button>
          </div>
        </ul>

        <div className="nav-actions">
          <div className="phone">
            <FontAwesomeIcon icon={faPhone} />
            <span>+31 6 13 484 484</span>
          </div>
          <button className="nav-cta">Contact Us</button>
        </div>

        <div className="nav-toggle" onClick={toggleNav}>
          <FontAwesomeIcon icon={isNavActive ? faXmark : faBars} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
