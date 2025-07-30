"use client";

import Link from "next/link";
import { useContext } from "react";
import { HamburgerMenuContext } from "@/core/context/HamburgerMenuContext";
import Home from "@/components/icons/Home";
import Airplane from "@/components/icons/Airplane";
import Volume from "@/components/icons/Volume";
import Call from "@/components/icons/Call";

function HamburgerModal() {
  const { state, dispatch } = useContext(HamburgerMenuContext);

  const isOpen = state.hamburgerModal?.show;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-start items-center z-[1000] transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      }`}
      onClick={() => dispatch({ type: "CloseHamburgerMenu" })}
    >
      <div
        className={`flex flex-col h-full bg-white p-8 rounded-r-lg text-center justify-between
          transition-[width] duration-300 ease-in-out overflow-hidden
          ${isOpen ? "w-1/2" : "w-0"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <ul
          className={`flex flex-col items-start gap-8 ${isOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        >
          <li className="flex gap-2 list-none cursor-pointer font-normal text-base">
            <Home />
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li className="flex gap-2 list-none cursor-pointer font-normal text-base">
            <Airplane />
            <Link href="/">خدمات گردشگری</Link>
          </li>
          <li className="flex gap-2 list-none cursor-pointer font-normal text-base">
            <Volume />
            <Link href="/">درباره ما</Link>
          </li>
          <li className="flex gap-2 list-none cursor-pointer font-normal text-base">
            <Call />
            <Link href="/">تماس با ما</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerModal;
