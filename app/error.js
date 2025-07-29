"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("خطای غیرمنتظره:", error);
  }, [error]);

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h2 className="text-3xl text-red-600 font-bold mb-4">مشکلی پیش آمده 😞</h2>
      <p className="mb-6 text-gray-700">
        متأسفانه ارتباط با سرور برقرار نشد یا مشکلی هنگام بارگذاری داده‌ها رخ داده است.
      </p>
      <button
        onClick={() => reset()}
        className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition"
      >
        تلاش مجدد
      </button>
    </div>
  );
}
