"use client";
import { useState } from "react";
import LoginModal from "./login/authForm/CheckOTPForm";
import LoginCodeModal from "./login/authForm/SendOTPForm";
import HamburgerMenu from "../../icons/HamburgerMenu";
import styles from "./Header.module.css";
import Login from "./login/Login";
import DropDownProfile from "./login/open&removeProfile/DropDownProfile";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  return (
    <div className={styles.container}>
      <div className={styles.HamburgerMenu}>
        <HamburgerMenu />
      </div>

      <Login openDropDownHandler={toggleDropdown} />
      <DropDownProfile
        isOpen={isDropdownOpen}
        onClose={() => setIsDropdownOpen(false)}
      />

      <LoginModal />
      <LoginCodeModal />
    </div>
  );
}

export default Header;
