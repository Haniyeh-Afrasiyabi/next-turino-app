import Link from "next/link";
import Image from "next/image";
import styles from "./MenuWeb.module.css"

function MenuWeb() {
  return (
    <div className={styles.headerRight}>
      <Link href="/">
        <Image
          src="/images/TorinoLogo/Torino.webp"
          width={146}
          height={44}
          alt="Torino Logo"
        />
      </Link>

      <ul className={styles.menu}>
        <li>
          <Link href="/">صفحه اصلی </Link>
        </li>
        <li>خدمات گردشگری</li>
        <li>درباره ما</li>
        <li>تماس با ما</li>
      </ul>
    </div>
  );
}

export default MenuWeb;
