// import TourCard from "../tourCard/TourCard";
// import styles from "./TourList.module.css";

// async function getTours() {
//   const res = await fetch("http://localhost:6500/tour", {
//     cache: "no-store", // برای دریافت اطلاعات همیشه به‌روز
//   });

//   if (!res.ok) {
//     throw new Error("مشکل در دریافت تورها");
//   }

//   return res.json();
// }

// async function TourList() {
//   const tours = await getTours();
//   if (!tours.length) return <p>نتیجه ای یافت نشد</p>;

//   return (
//     <section className={styles.container}>
//       <h2>همه تور ها</h2>
//       <div className={styles.tourList}>
//         {tours.map((tour) => (
//           <TourCard key={tour.id} tour={tour} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default TourList;

"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TourCard from "../tourCard/TourCard";
import styles from "./TourList.module.css";

async function getTours() {
  const res = await fetch("http://localhost:6500/tour", { cache: "no-store" });
  if (!res.ok) throw new Error("مشکل در دریافت تورها");
  return res.json();
}

export default function TourList() {
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const { register, handleSubmit, watch, reset } = useForm();

  useEffect(() => {
    getTours().then((data) => {
      setTours(data);
      setFilteredTours(data);
    });
  }, []);

  const origins = [...new Set(tours.map((tour) => tour.origin.name))];
  const destinations = [...new Set(tours.map((tour) => tour.destination.name))];

  const onSubmit = (data) => {
    const filtered = tours.filter((tour) => {
      const isOriginMatch = data.origin
        ? tour.origin.name === data.origin
        : true;
      const isDestinationMatch = data.destination
        ? tour.destination.name === data.destination
        : true;
      const isDateMatch = selectedDate
        ? new Date(tour.startDate).toDateString() ===
          selectedDate.toDateString()
        : true;
      return isOriginMatch && isDestinationMatch && isDateMatch;
    });

    setFilteredTours(filtered);
  };

  return (
    <section className={styles.container}>
      <div className={styles.searchContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.searchForm}>
          <div className={styles.originDestination}>
            <select {...register("origin")}>
              <option value="">انتخاب مبدا</option>
              {origins.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <select {...register("destination")}>
              <option value="">انتخاب مقصد</option>
              {destinations.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <DatePicker
            className={styles.DatePicker}
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="تاریخ حرکت"
            dateFormat="yyyy-MM-dd"
          />

          <button type="submit">جستجو</button>
        </form>
      </div>

      <div className={styles.tourList}>
        {filteredTours.length ? (
          filteredTours.map((tour) => <TourCard key={tour.id} tour={tour} />)
        ) : (
          <p>هیچ توری پیدا نشد</p>
        )}
      </div>
    </section>
  );
}
