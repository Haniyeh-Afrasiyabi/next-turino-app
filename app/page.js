import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "@/templates/HomePage";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>
        صفحه اصلی
        <HomePage />
      </h1>
    </div>
  );
}
