"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getTourById } from "@/core/services/config";
import { addToBasket } from "@/core/services/config";
import { LoginContext } from "@/core/context/LoginContext";
import { toast } from "react-toastify";
import Image from "next/image";
import TourLeader from "@/components/icons/TourLeader";
import Map from "@/components/icons/Map";
import MedalStar from "@/components/icons/MedalStar";
import Capacity from "@/components/icons/Capacity";
import Security from "@/components/icons/Security";
import Bus from "@/components/icons/Bus";
import Routing from "@/components/icons/Routing";
import CalendarBlack from "@/components/icons/CalendarBlack";

export default function TourDetailDesktop() {
  const [tour, setTour] = useState(null);
  const router = useRouter();
  const params = useParams();
  const { dispatch } = useContext(LoginContext);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const data = await getTourById(params.tourId);
        setTour(data);
      } catch (err) {
        console.error("خطا در دریافت تور", err);
      }
    };

    if (params.tourId) fetchTour();
  }, [params.tourId]);

  const handleReserve = async () => {
    try {
      await addToBasket(params.tourId);
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
    <div className="w-full bg-white1 md:pt-7 md:pb-10  ">
      <div className="flex flex-col  px-4 py-6 bg-white md:w-[85%] mx-auto md:border md:border-gray9 md:rounded-xl">
        <div className="flex  gap-2">
          <div>
            <Image
              src={tour.image}
              alt={tour.title}
              className="w-full m-auto  h-60 object-fill rounded-xl  md:w-[20.625rem] "
              width={400}
              height={400}
            />
          </div>

          <div className="flex flex-col w-[70%]">
            <div className="flex flex-col items-start pr-4  ">
              <div className="flex  md:flex-col gap-4">
                <h3 className="text-3xl font-bold ">{tour.title}</h3>
                <p className="font-normal text-xl text-black1">۵ روز و ۴ شب</p>
              </div>

              <div>
                <ul className="flex justify-between w-full md:gap-7 lg:gap-8 text-gray7 font-normal  mt-7">
                  <li className="flex items-center text-sm gap-2 lg:text-xl">
                    <TourLeader />
                    تورلیدر از مبدا
                  </li>
                  <li className="flex items-center text-sm gap-2 lg:text-xl">
                    <Map />
                    برنامه سفر
                  </li>
                  <li className="flex items-center text-sm gap-2 lg:text-xl">
                    <MedalStar />
                    تضمین کیفیت
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between mt-8 ">
              <p className="flex items-center gap-1 font-normal   ">
                <span className="text-3xl text-complementry">
                  {Number(tour.price).toLocaleString("fa-IR")}
                </span>
                <span className="text-base text-gray8 ">تومان</span>
              </p>
              <button
                onClick={handleReserve}
                className="bg-green-600 h-[3rem] self-end text-white px-4 py-2 mt-2 rounded-lg  w-44 text-xl font-normal"
              >
                رزرو و خرید
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 px-3">
          <div className="flex flex-col items-center gap-2">
            <p className="flex items-center gap-2 text-gray8 font-normal text-base">
              <Routing />
              مبدا
            </p>
            <p className="font-normal text-base">{tour.origin.name}</p>
          </div>

          <div className="w-[0.1rem] h-14 border border-gray9 "></div>

          <div className="flex flex-col items-center gap-2">
            <p className="flex items-center gap-2 text-gray8 font-normal text-base">
              <CalendarBlack />
              تاریخ رفت
            </p>
            <p className="font-normal text-base">
              {new Date(tour.startDate).toLocaleDateString()}
            </p>
          </div>

          <div className="w-[0.1rem] h-14 border border-gray9 "></div>

          <div className="flex flex-col items-center gap-2">
            <p className="flex items-center gap-2 text-gray8 font-normal text-base">
              <CalendarBlack />
              تاریخ برگشت
            </p>
            <p className="font-normal text-base">
              {new Date(tour.endDate).toLocaleDateString()}
            </p>
          </div>

          <div className="w-[0.1rem] h-14 border border-gray9 "></div>

          <div className="flex flex-col items-center gap-2">
            <p className="flex items-center gap-2 text-gray8 font-normal text-base">
              <Bus />
              حمل و نقل
            </p>
            <p className="font-normal text-base">{tour.fleetVehicle}</p>
          </div>

          <div className="w-[0.1rem] h-14 border border-gray9 "></div>

          <div className="flex flex-col items-center gap-2">
            <p className="flex items-center gap-2 text-gray8 font-normal text-base">
              <Capacity />
              ظرفیت
            </p>
            <p className="flex items-center gap-2 font-normal text-base">
              حداکثر {tour.availableSeats} نفر
            </p>
          </div>

          <div className="w-[0.1rem] h-14 border border-gray9 "></div>

          <div className="flex flex-col items-center gap-2">
            <p className="flex items-center gap-2 text-gray8 font-normal text-base">
              <Security />
              بیمه
            </p>
            <p className="font-normal text-base">بیمه ۵۰ هزار دیناری</p>
          </div>
        </div>
      </div>
    </div>
  );
}
