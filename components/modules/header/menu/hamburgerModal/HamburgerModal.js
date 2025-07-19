import Link from "next/link";
import { HamburgerMenuContext } from "@/core/context/HamburgerMenuContext";
import { useContext } from "react";
import styles from "./HamburgerModal.module.css";
import Home from "@/components/icons/Home";
import Airplane from "@/components/icons/Airplane";
import Volume from "@/components/icons/Volume";
import Call from "@/components/icons/Call";

function HamburgerModal() {
  const { state, dispatch } = useContext(HamburgerMenuContext);

  if (!state.hamburgerModal?.show) return null;

  return (
    <div
      className={styles.overlay}
      onClick={() => {
        dispatch({ type: "CloseHamburgerMenu" });
      }}
    >
      <div className={styles.modal}>
        <ul className={styles.menu}>
          <li>
            <Home />
            <Link href="/">صفحه اصلی </Link>
          </li>
          <li>
            <Airplane />
            <Link href="/"> خدمات گردشگری </Link>
          </li>
          <li>
            <Volume />
            <Link href="/">درباره ما </Link>
          </li>
          <li>
            <Call />
            <Link href="/">تماس با ما </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerModal;
