import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import AdminLogin from "./AdminLogin"; // ⬅️ Import the new login form

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false); // ⬅️ For dropdown

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setShowAdminLogin(false);
  };

  const toggleAdminLogin = () => {
    setShowAdminLogin(!showAdminLogin);
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
          <li>
            <span onClick={toggleAdminLogin} style={{ cursor: 'pointer', color: 'white' }}>

              Admin
            </span>
            {showAdminLogin && <AdminLogin />}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
