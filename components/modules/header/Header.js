"use client";

import { useContext, useState } from "react";
import LoginModal from "./login/authForm/CheckOTPForm";
import LoginCodeModal from "./login/authForm/SendOTPForm";
import HamburgerMenu from "../../icons/HamburgerMenu";
import Login from "./login/Login";
import DropDownProfile from "./login/open&removeProfile/DropDownProfile";
import { HamburgerMenuContext } from "@/core/context/HamburgerMenuContext";
import MenuWeb from "./menu/menuWeb/MenuWeb";
import HamburgerModal from "./menu/hamburgerModal/HamburgerModal";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { dispatch } = useContext(HamburgerMenuContext);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  return (
    <div className="flex justify-between items-center z-10 px-6 py-7 shadow-md lg:px-28 lg:py-4">
      <div
        className="cursor-pointer lg:hidden"
        onClick={() => dispatch({ type: "ShowHamburgerMenu" })}
      >
        <HamburgerMenu />
      </div>

      <div className=" hidden lg:block">
        <MenuWeb />
      </div>

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
