import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../images/logo.png";
import styles from "../styles/Navbar1.module.css";
import { GrBlog } from "react-icons/gr";
import { RiCustomerService2Line } from "react-icons/ri";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { RiContactsBook3Line } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getCurrentPage = () => {
    const path = window.location.hash;
    return path === "" ? "#home" : path;
  };

  useEffect(() => {
    setActivePage(getCurrentPage());
    window.addEventListener("hashchange", () => {
      setActivePage(getCurrentPage());
    });
    return () => {
      window.removeEventListener("hashchange", () => {
        setActivePage(getCurrentPage());
      });
    };
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" className={styles.logoImg} />
        <div className={styles.logo_content}>
          <h4>Family Dental Care</h4>
          <p>Dentistry and Orthodontics</p>
        </div>
      </div>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        <GiHamburgerMenu className={styles.menuToggleIcon} />
      </div>
      <div className={`${styles.menuList} ${menuOpen ? styles.open : ""}`}>
        <a
          href="#about"
          className={`${styles.menuItem} ${
            activePage === "#about" ? styles.active : ""
          }`}
        >
          {menuOpen ? (
            <HiOutlineInformationCircle className={styles.icon} />
          ) : (
            ""
          )}
          About Us
        </a>
   
        <a
          href="#service"
          className={`${styles.menuItem} ${
            activePage === "#service" ? styles.active : ""
          }`}
        >
          {menuOpen ? <RiCustomerService2Line className={styles.icon} /> : ""}
          Service
        </a>

        <a
          href="#blog"
          className={`${styles.menuItem} ${
            activePage === "#blog" ? styles.active : ""
          }`}
        >
          {menuOpen ? <GrBlog className={styles.icon} /> : ""}Blog
        </a>

        <a
          href="#contact"
          className={`${styles.menuItem} ${
            activePage === "#contact" ? styles.active : ""
          }`}
        >
          {menuOpen ? <RiContactsBook3Line className={styles.icon} /> : ""}contact
        </a>
        <a
          href="#makeappointment"
          className={`${styles.menuItem} ${styles.contactItem}  ${
            activePage === "#makeappointment" ? styles.active : ""
          }`}
        >
        Make an appointment
        </a>
      </div>
    </div>
  );
};

export default Navbar;

