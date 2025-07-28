"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { personalSchema } from "@/core/schema/profile/personalSchema";
import { editProfile } from "@/core/services/config";
import { userProfile } from "@/core/services/config";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";

function Personal() {
  const [profile, setProfile] = useState([]);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await userProfile();
        setProfile(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserProfile();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalSchema),
  });

  const onSubmit = async (data) => {
    const payload = {
      fullName: data.fullName,
      nationalCode: data.nationalCode,
      gender: data.gender,
      birthDate: new Date(data.birthDate),
    };
    console.log(payload);

    try {
      const result = await editProfile(payload);
      setEdit(false);
      const dataEdit = await userProfile();
      setProfile(dataEdit);
      console.log(result);
    } catch (error) {
      console.log("خطای کامل:", error.response);
    }
  };

  return (
    <div>
      <div>
        {!edit && (
          <div className="flex flex-col border border-gray9 rounded-xl p-5 gap-7">
            <div className="flex justify-between">
              <p className="font-normal text-lg">اطلاعات شخصی</p>
              <button
                className="font-normal text-base text-complementry"
                onClick={() => setEdit(true)}
              >
                ویرایش اطلاعات
              </button>
            </div>

            <div className="flex flex-col gap-7 md:grid grid-cols-2  md:justify-between md:items-center">
              <div className="flex justify-between items-center  md:gap-8 md:justify-start ">
                <p className="text-gray3">نام و نام خانوادگی</p>
                <div className="text-center">
                  {!profile.fullName ? (
                    <span>__</span>
                  ) : (
                    <span>{profile.fullName}</span>
                  )}
                </div>
              </div>
              <div className="flex justify-between items-center  md:gap-8 md:justify-start">
                <p className="text-gray3">کدملی</p>
                <div className="text-center">
                  {!profile.nationalCode ? (
                    <span>__</span>
                  ) : (
                    <span>{profile.nationalCode}</span>
                  )}
                </div>
              </div>
              <div className="flex justify-between items-center  md:gap-8 md:justify-start">
                <p className="text-gray3">جنسیت</p>
                <div className="text-center">
                  {!profile.gender ? (
                    <span>__</span>
                  ) : (
                    <span>{profile.gender}</span>
                  )}
                </div>
              </div>
              <div className="flex justify-between items-center  md:gap-8 md:justify-start">
                <p className="text-gray3">تاریخ تولد</p>
                <div className="text-center">
                  {!profile.birthDate ? (
                    <span>__</span>
                  ) : (
                    <span>
                      {new DateObject({
                        date: profile.birthDate,
                        calendar: persian,
                        locale: persian_fa,
                      }).format("YYYY/MM/DD")}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {edit && (
          <div className=" border border-gray9 rounded-xl  ">
            <form
              className="flex flex-col gap-7 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <p className="font-normal text-lg px-5 pt-5">اطلاعات شخصی</p>
              </div>

              <div className="w-full flex flex-col  gap-4  md:flex-row md:flex-wrap  md:items-center px-5">
                <input
                  placeholder="نام و نام خانوادگی"
                  className="border border-gray3 rounded-lg py-4 px-2 focus:outline-none md:w-[16rem]"
                  {...register("fullName")}
                />
                {errors.fullName && (
                  <p className="text-red-500">{errors.fullName.message}</p>
                )}

                <input
                  {...register("nationalCode")}
                  placeholder="کد ملی"
                  className="border border-gray3 rounded-lg py-4 px-2 focus:outline-none md:w-[16rem]"
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
                      inputClass="border border-gray3 rounded-lg py-4 px-2 focus:outline-none w-full md:w-[16rem]"
                    />
                  )}
                />
                {errors.birthDate && (
                  <p className="text-red-500">{errors.birthDate.message}</p>
                )}

                <select
                  {...register("gender")}
                  className="border border-gray3 rounded-lg py-4 px-2 focus:outline-none cursor-pointer text-gray3  md:w-[16rem]"
                >
                  <option value=""> جنسیت</option>
                  <option value="male">مرد</option>
                  <option value="female">زن</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500">{errors.gender.message}</p>
                )}
              </div>
              <div className="flex gap-2 md:justify-end md:border-t-2 pb-5 px-5 md:py-2 border-gray9">
                <button
                  type="submit"
                  className="bg-primary text-white rounded-md py-2 px-8 max-h-10 w-[50%]  md:w-[10rem]"
                >
                  تایید
                </button>
                <button
                  onClick={() => setEdit(false)}
                  className="border-2 border-primary text-primary rounded-md py-2 px-8 max-h-10 w-[50%]  md:w-[10rem] "
                >
                  انصراف
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Personal;
