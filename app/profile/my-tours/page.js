"use client";
import withAuth from "@/components/modules/hoc/withAuth";
import { useEffect, useState } from "react";
import { userTours } from "@/core/services/config";

const formatToPersianDate = (isoDateStr) => {
  const date = new Date(isoDateStr);
  const formatter = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const parts = formatter.formatToParts(date);
  const weekday = parts.find((p) => p.type === "weekday")?.value;
  const day = parts.find((p) => p.type === "day")?.value;
  const month = parts.find((p) => p.type === "month")?.value;
  const year = parts.find((p) => p.type === "year")?.value;

  return `${weekday}، ${day} ${month} ${year}`;
};

function UserTours() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchUserTours = async () => {
      try {
        const data = await userTours();
        setTours(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserTours();
  }, []);

  if (tours.length === 0) {
    return (
      <p className="text-center text-lg font-medium p-5 text-gray-600">
        توری خریداری نشده است.
      </p>
    );
  }

  return (
    <div>
      <div className="lg:border lg:border-gray9 lg:p-2 lg:rounded-xl">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="flex flex-col border border-gray9 rounded-lg  gap-4 mb-5"
          >
            <div className="flex flex-col gap-4 p-3">
              <div className="flex flex-col xl:flex-row-reverse justify-between  ">
                <div className="self-end bg-green2 rounded-3xl p-2">
                  <p className="text-primary font-normal text-[0.5rem]">
                    به اتمام رسیده
                  </p>
                </div>
                <div className="flex justify-between w-4/5 xl:w-1/2 ">
                  <p className="font-normal text-base">{tour?.title}</p>
                  <p className="font-normal text-base">
                    سفر با {tour?.fleetVehicle}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-7 justify-between xl:flex-row  lg:justify-start">
                <div className="flex justify-between gap-2 items-center">
                  <p className="text-sm font-medium">
                    {tour.origin.name} به {tour.destination.name}
                  </p>
                  <span className="font-normal text-gray3 text-base">
                    . {formatToPersianDate(tour.startDate)}
                  </span>
                </div>
                <div className="flex justify-between gap-2 items-center ">
                  <p className="text-sm font-medium">تاریخ برگشت</p>
                  <span className="font-normal text-gray3 text-base">
                    . {formatToPersianDate(tour.endDate)}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-between border-t-2 border-gray9 p-3 xl:justify-start lg:gap-4 ">
              <div className="flex gap-4 items-center">
                <p className="font-normal text-sm text-gray3">شماره تور</p>
                <span className="text-base">۱۰۲۰۹۵۴۰۴</span>
              </div>

              <div className="w-[0.1rem] h-10 border border-gray9 "></div>

              <div className="flex gap-4 items-center">
                <p className="font-normal text-sm text-gray3">
                  مبلغ پرداخت شده
                </p>
                <p className="flex items-center gap-1 font-normal   ">
                  <span className="text-base ">
                    {Number(tour.price).toLocaleString("fa-IR")}
                  </span>
                  <span className="text-base text-gray8 ">تومان</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default withAuth(UserTours);
