"use client";

import { useForm } from "react-hook-form";
import { useState, useMemo } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Location from "@/components/icons/Location";
import Destination from "@/components/icons/Destination";
import CalenderIcon from "@/components/icons/CalenderIcon";

export default function SearchForm({ tours, onFilter }) {
  const { register, handleSubmit } = useForm();
  const [selectedDate, setSelectedDate] = useState(null);

  const origins = useMemo(
    () => [...new Set(tours.map((t) => t.origin.name))],
    [tours]
  );
  const destinations = useMemo(
    () => [...new Set(tours.map((t) => t.destination.name))],
    [tours]
  );

  const onSubmit = (data) => {
    let filtered = [...tours];

    if (data.origin) {
      filtered = filtered.filter((tour) => tour.origin.name === data.origin);
    }

    if (data.destination) {
      filtered = filtered.filter(
        (tour) => tour.destination.name === data.destination
      );
    }

    if (selectedDate) {
      const inputDate = selectedDate.toDate(); // تبدیل به میلادی

      filtered = filtered.filter((tour) => {
        const tourDate = new Date(tour.startDate);
        return (
          tourDate.getFullYear() === inputDate.getFullYear() &&
          tourDate.getMonth() === inputDate.getMonth() &&
          tourDate.getDate() === inputDate.getDate()
        );
      });
    }

    onFilter(filtered);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col  md:flex-row gap-4 mt-4 items-center md:gap-0 md:border md:py-3 md:rounded-xl md:border-gray2 md:pr-4 md:pl-3 md:w-3/4 md:mx-auto md:mt-9   "
    >
      <div className="flex gap-[0.5rem] w-full  ">
        <div className="flex items-center gap-1 border border-gray2 text-gray3 cursor-pointer text-center p-2 rounded-xl w-6/12 md:border-0 md:text-right ">
          <Location />
          <select {...register("origin")} className="w-full   ">
            <option value="">مبدا</option>
            {origins.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-1 border border-gray2 text-gray3 cursor-pointer text-center p-2 rounded-xl w-6/12 md:rounded-none md:border-0 md:border-r-2 md:text-right">
          <Destination />
          <select {...register("destination")} className="w-full ">
            <option value="">مقصد</option>
            {destinations.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className=" flex items-center gap-1 border border-gray2  text-gray3 pr-2  rounded-xl text-center w-full md:w-2/4 md:rounded-none md:border-0 md:border-r-2 md:text-right ">
        <CalenderIcon />
        <DatePicker
          calendar={persian}
          locale={persian_fa}
          value={selectedDate}
          onChange={setSelectedDate}
          inputClass=" text-gray3 p-2 border-none rounded-xl text-center w-full md:rounded-none md:border-0 md:border-r-2 md:text-right "
          placeholder="تاریخ"
          format="YYYY/MM/DD"
          calendarPosition="bottom-right"
          containerClassName="w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-primary text-white font-normal px-4 py-2  rounded-xl w-full md:w-1/4 "
      >
        جستجو
      </button>
    </form>
  );
}
