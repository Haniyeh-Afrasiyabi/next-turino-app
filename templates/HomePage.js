import TourList from "@/components/modules/tour/tourList/TourList";
import styles from "./HomePage.module.css";
import BannerTorino from "@/components/modules/bannerTorino/BannerTorino";

function HomePage() {
  return (
    <>
      <BannerTorino />
      <div className={styles.container}>
        <TourList />
      </div>
    </>
  );
}

export default HomePage;
