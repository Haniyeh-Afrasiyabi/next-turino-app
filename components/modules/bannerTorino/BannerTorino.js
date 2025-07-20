import Image from "next/image";
import styles from "./BannerTorino.module.css";

function BannerTorino() {
  return (
    <div className={styles.container}>
      <Image
        src="/images/BannerTorino/BannerTorino.webp"
        width={1440}
        height={350}
      />
    </div>
  );
}

export default BannerTorino;
