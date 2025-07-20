import TourCard from "../tourCard/TourCard";
import styles from "./TourList.module.css";

async function getTours() {
  const res = await fetch("http://localhost:6500/tour", {
    cache: "no-store", // برای دریافت اطلاعات همیشه به‌روز
  });

  if (!res.ok) {
    throw new Error("مشکل در دریافت تورها");
  }

  return res.json();
}

async function TourList() {
  const tours = await getTours();
  if (!tours.length) return <p>نتیجه ای یافت نشد</p>;

  return (
    <section className={styles.container}>
      <h2>همه تور ها</h2>
      <div className={styles.tourList}>
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
}

export default TourList;
