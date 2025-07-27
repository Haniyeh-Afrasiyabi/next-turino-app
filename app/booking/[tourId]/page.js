"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderSchema } from "@/core/schema/order";
import { submitOrder } from "@/core/services/config";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import User from "@/components/icons/User";
import { Controller } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { getTourById } from "@/core/services/config";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function BookingPage() {
  const params = useParams();
  const [tour, setTour] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const data = await getTourById(params.tourId);
        setTour(data);
        console.log(data);
      } catch (err) {
        console.error("خطا در دریافت تور", err);
      }
    };

    if (params.tourId) fetchTour();
  }, [params.tourId]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(orderSchema),
    defaultValues: {
      birthDate: null,
    },
  });

  const onSubmit = async (formData) => {
    try {
      const payload = {
        fullName: formData.fullName,
        nationalCode: formData.nationalCode,
        gender: formData.gender,
        birthDate: new Date(formData.birthDate).toISOString(),
      };

      const ja = await submitOrder(payload);
      toast.success("سفارش با موفقیت ثبت شد");
      router.push("/profile/my-tours");
      console.log(ja);
    } catch (error) {
      console.log(error?.message);
      toast.error("خطا در ثبت سفارش");
    }
  };

  return (
    <div className="w-full lg:bg-white1 md:pt-7 md:pb-10  ">
      <div className="lg:bg-white1">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="  flex flex-col gap-8 mx-6 mt-4 mb-8  lg:flex-row lg:w-[85%] lg:mx-auto lg:justify-between lg:gap-4"
        >
          <div className="flex flex-col gap-3 border border-gray9 rounded-lg py-4 px-5  bg-white">
            <h2 className="flex items-center gap-2 text-2xl font-normal">
              <User />
              مشخصات مسافر
            </h2>

            <div className="flex flex-col gap-5 lg:flex-row lg:flex-wrap">
              <input
                {...register("fullName")}
                placeholder="نام و نام خانوادگی"
                className="border border-gray3 rounded-lg py-4 px-2 focus:outline-none lg:w-[16rem]"
              />
              {errors.fullName && (
                <p className="text-red-500">{errors.fullName.message}</p>
              )}

              <input
                {...register("nationalCode")}
                placeholder="کد ملی"
                className="border border-gray3 rounded-lg py-4 px-2 focus:outline-none lg:w-[16rem]"
              />
              {errors.nationalCode && (
                <p className="text-red-500">{errors.nationalCode.message}</p>
              )}

              {/* ✅ تقویم شمسی */}
              <Controller
                control={control}
                name="birthDate"
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    value={field.value}
                    onChange={(date) => field.onChange(date?.toDate())}
                    calendar={persian}
                    locale={persian_fa}
                    placeholder="تاریخ تولد"
                    inputClass="border border-gray3 rounded-lg py-4 px-2 focus:outline-none w-full lg:w-[16rem]"
                  />
                )}
              />
              {errors.birthDate && (
                <p className="text-red-500">{errors.birthDate.message}</p>
              )}

              <select
                {...register("gender")}
                className="border border-gray3 rounded-lg py-4 px-2 focus:outline-none cursor-pointer text-gray3 lg:w-[16rem]"
              >
                <option value=""> جنسیت</option>
                <option value="male">مرد</option>
                <option value="female">زن</option>
              </select>
              {errors.gender && (
                <p className="text-red-500">{errors.gender.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2 border border-gray9 rounded-lg p-4 lg:w-[25%]  lg:min-w-64 bg-white  ">
            <div className="flex justify-between gap-4">
              <h3 className="text-2xl font-semibold ">{tour?.title}</h3>
              {/* {tour && <h3 className="text-3xl font-bold ">{tour.title}</h3>} */}
              <p className="font-normal text-base text-gray3">۵ روز و ۴ شب</p>
            </div>

            <div className="border-t border-dashed border-gray3 my-4"></div>

            <div className="flex justify-center  items-center gap-6 font-normal text-base lg:text-sm mx-auto     ">
              <p>قیمت نهایی</p>
              <div>
                <span className=" text-3xl  lg:text-2xl text-complementry">
                  {Number(tour?.price).toLocaleString("fa-IR")}
                </span>
                <span className="text-base text-gray8 ">تومان</span>
              </div>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-lg w-full font-normal text-2xl mt-2"
            >
              ثبت و خرید نهایی
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
