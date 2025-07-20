import TourList from "@/components/modules/tour/tourList/TourList";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <TourList />
    </div>
  );
}

export default HomePage;
