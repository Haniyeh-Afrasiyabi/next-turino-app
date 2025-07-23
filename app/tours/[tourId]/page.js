"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import api from "@/core/config/api";
import { LoginContext } from "@/core/context/LoginContext";
import { toast } from "react-toastify";


export default function TourDetailPage() {
  const [tour, setTour] = useState(null);
  const router = useRouter();
  const params = useParams();
  const { dispatch } = useContext(LoginContext);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const res = await fetch(`http://localhost:6500/tour/${params.tourId}`);
        const data = await res.json();

        setTour(data);
      } catch (err) {
        console.error("خطا در دریافت تور", err);
      }
    };

    if (params.tourId) fetchTour();
  }, [params.tourId]);

  const handleReserve = async () => {
    try {
      await api.put(`/basket/${params.tourId}`);

      router.push(`/booking/${params.tourId}`);
      toast.success(`تور ${tour.origin.name} به سبد خرید شما اضافه شد.`);
    } catch (error) {
      if (error?.message === "Access token required") {
        dispatch({ type: "ShowLoginModal" });
        toast.error("ابتدا وارد حساب کاربری شوید");
      } else {
        toast.error("خطا در رزرو تور");
        console.log(error.message);
      }
    }
  };

  if (!tour) return <p>در حال بارگذاری...</p>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">{tour.title}</h1>
      <img
        src={tour.image}
        alt={tour.title}
        className="w-full h-60 object-cover rounded"
      />

      <div className="mt-4 space-y-2">
        <p>از: {tour.origin.name}</p>
        <p>به: {tour.destination.name}</p>
        <p>شروع: {new Date(tour.startDate).toLocaleDateString()}</p>
        <p>پایان: {new Date(tour.endDate).toLocaleDateString()}</p>
        <p>قیمت: {Number(tour.price).toLocaleString()} تومان</p>
        <p>ظرفیت باقی‌مانده: {tour.availableSeats}</p>

        <ul className="mt-2 list-disc list-inside">
          {tour.options.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <button
          onClick={handleReserve}
          className="bg-green-600 text-white px-4 py-1 mt-2 rounded"
        >
          رزرو
        </button>
      </div>
    </main>
  );
}
