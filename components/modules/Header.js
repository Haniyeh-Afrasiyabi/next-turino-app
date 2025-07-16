"use client";



import LoginModal from "./LoginModal";
import LoginCodeModal from "./LoginCodeModal";
import HamburgerMenu from "../icons/HamburgerMenu";
import styles from "./Header.module.css";
import Login from "./Login";

function Header() {

  return (
    <div className={styles.container}>
      <div className={styles.HamburgerMenu}>
        <HamburgerMenu />
      </div>

      <Login />

      <LoginModal />
      <LoginCodeModal />
    </div>
  );
}

export default Header;
