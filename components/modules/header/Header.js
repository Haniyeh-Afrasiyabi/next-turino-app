"use client";
import Image from "next/image";
import { useState } from "react";
import LoginModal from "./login/authForm/CheckOTPForm";
import LoginCodeModal from "./login/authForm/SendOTPForm";
import HamburgerMenu from "../../icons/HamburgerMenu";
import styles from "./Header.module.css";
import Login from "./login/Login";
import DropDownProfile from "./login/open&removeProfile/DropDownProfile";
import Link from "next/link";
// import Torino from "@/components/icons/Torino";


function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  return (
    <div className={styles.container}>
      <div className={styles.headerRight}>
        <Image src="/images/TorinoLogo/Torino.webp" width={146} height={44} alt="Torino Logo"/>
        <ul className={styles.menu}>
          <li><Link href="/">صفحه اصلی </Link></li>
          <li>خدمات گردشگری</li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
        </ul>
      </div>

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
