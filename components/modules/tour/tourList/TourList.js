"use client";

import TourCard from "../tourCard/TourCard";
import styles from "./TourList.module.css";

export default function TourList({ tours }) {
  return (
    <section className={styles.container}>
      <div className={styles.tourList}>
        {tours.length ? (
          tours.map((tour) => <TourCard key={tour.id} tour={tour} />)
        ) : (
          <p>هیچ توری پیدا نشد</p>
        )}
      </div>
    </section>
  );
}
