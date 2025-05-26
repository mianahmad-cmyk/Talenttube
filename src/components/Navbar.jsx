import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <nav className={styles.navContainer}>
        <h1 className={styles.logo}>TalentTube</h1>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
          <li><a href="#hero" onClick={closeMenu}>Home</a></li>
          <li><a href="#featured" onClick={closeMenu}>Featured</a></li>
          <li><a href="#why" onClick={closeMenu}>Why Us</a></li>
          <li><a href="#subscribe" onClick={closeMenu}>Subscribe</a></li>
          <li><a href="/admin" onClick={closeMenu}>Admin</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
