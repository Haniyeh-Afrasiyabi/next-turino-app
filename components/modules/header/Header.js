"use client";

import { useContext, useState } from "react";
import LoginModal from "./login/authForm/CheckOTPForm";
import LoginCodeModal from "./login/authForm/SendOTPForm";
import HamburgerMenu from "../../icons/HamburgerMenu";
import styles from "./Header.module.css";
import Login from "./login/Login";
import DropDownProfile from "./login/open&removeProfile/DropDownProfile";

import { HamburgerMenuContext } from "@/core/context/HamburgerMenuContext";
import MenuWeb from "./menu/menuWeb/MenuWeb";
import HamburgerModal from "./menu/hamburgerModal/HamburgerModal";
// import Torino from "@/components/icons/Torino";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { dispatch } = useContext(HamburgerMenuContext);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  return (
    <div className={styles.container}>
      <div
        className={styles.HamburgerMenu}
        onClick={() => dispatch({ type: "ShowHamburgerMenu" })}
      >
        <HamburgerMenu />
      </div>

      <MenuWeb />

      <Login openDropDownHandler={toggleDropdown} />
      <DropDownProfile
        isOpen={isDropdownOpen}
        onClose={() => setIsDropdownOpen(false)}
      />

      <HamburgerModal />
      <LoginModal />
      <LoginCodeModal />
    </div>
  );
}

export default Header;
