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
import Spinner from "@/components/partials/loading/Spinner";

export default function TourDetailMobile() {
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

  //loading
  if (!tour) return <Spinner />;

  return (
    <div className="w-full bg-white1 md:pt-7 md:pb-10  ">
      <div className="flex flex-col  px-6 pt-6 pb-14 bg-white md:w-[85%] mx-auto md:border md:border-gray9 md:rounded-xl">
        <Image
          src={tour.image}
          alt={tour.title}
          className="w-full m-auto  h-60 object-fill rounded-xl  sm:w-[20.625rem]"
          width={400}
          height={400}
        />

        <div className="flex justify-between mt-6 md:flex-col">
          <h3 className="text-2xl font-bold ">{tour.title}</h3>
          <p className="font-normal text-base text-gray5">۵ روز و ۴ شب</p>
        </div>

        <ul className="flex justify-between text-gray7 font-normal text-sm mt-6">
          <li className="flex items-center gap-2">
            <TourLeader />
            تورلیدر از مبدا
          </li>
          <li className="flex items-center gap-2">
            <Map />
            برنامه سفر
          </li>
          <li className="flex items-center gap-2">
            <MedalStar />
            تضمین کیفیت
          </li>
        </ul>

        <div className="flex justify-between items-center mt-8">
          <div className="flex flex-col items-center gap-2 ">
            <p className="flex items-center gap-2 text-gray8 font-normal text-base">
              <Bus />
              حمل و نقل
            </p>
            <p className="font-normal text-base">{tour.fleetVehicle}</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="flex items-center gap-2 text-gray8 font-normal text-base">
              <Capacity />
              ظرفیت
            </p>
            <p className="flex items-center gap-2 font-normal text-base">
              حداکثر {tour.availableSeats} نفر
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="flex items-center gap-2 text-gray8 font-normal text-base">
              <Security />
              بیمه
            </p>
            <p className="font-normal text-base">بیمه ۵۰ هزار دیناری</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 ">
          <button
            onClick={handleReserve}
            className="bg-green-600 text-white px-4 py-2 mt-2 rounded-lg  w-40 text-xl font-normal"
          >
            رزرو و خرید
          </button>
          <p className="flex items-center gap-1 font-normal   ">
            <span className="text-2xl text-complementry">
              {Number(tour.price).toLocaleString("fa-IR")}
            </span>
            <span className="text-base ">تومان</span>
          </p>
        </div>
      </div>
    </div>
  );
}
