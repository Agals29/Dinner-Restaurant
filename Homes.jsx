import React, { useState } from "react";
import img from "./img/images/logo.png";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [blogDropdown, setBlogDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownClick = () => setDropdown(!dropdown);
  const handleBlogDropdownClick = () => setBlogDropdown(!blogDropdown);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="container-fluid">
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>
            <a href="/home">
              <img src={img} alt="restaurant" />
            </a>
          </h1>
        </div>
        <button
          className="navbar-toggler"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <ul className={`nav-links ${isMobileMenuOpen ? "show" : ""}`}>
          <li>
            <a href="/home">HOME</a>
          </li>
          <li>
            <a href="/menu">MENU</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li className="dropdown" onClick={handleDropdownClick}>
            <span>
              PAGES <span className="dropdown-arrow">▼</span>
            </span>
            {dropdown && (
              <ul className="dropdown-menu">
                <li>
                  <a href="/reservation">RESERVATION</a>
                </li>
                <li>
                  <a href="/stuff">STUFF</a>
                </li>
                <li>
                  <a href="/gallery">GALLERY</a>
                </li>
              </ul>
            )}
          </li>
          <li className="dropdown" onClick={handleBlogDropdownClick}>
            <span>
              BLOG <span className="dropdown-arrow">▼</span>
            </span>
            {blogDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/blog-single">Blog single</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
