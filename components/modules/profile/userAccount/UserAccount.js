"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userAccountSchema } from "@/core/schema/profile/userAccountSchema";
import { editProfile } from "@/core/services/config";
import { userProfile } from "@/core/services/config";
import { useEffect, useState } from "react";

function UserAccount() {
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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userAccountSchema),
  });

  const onSubmit = async (data) => {
    const payload = {
      email: data.email,
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
            <div>
              <p className="font-normal text-lg">اطلاعات حساب کاربری</p>
            </div>

            <div className="flex flex-col gap-7 md:flex-row md:justify-between md:items-center">
              <div className="flex items-center justify-between  gap-4">
                <p className="text-gray3">شماره موبایل</p>
                <span>{profile.mobile}</span>
              </div>

              <div className="flex justify-between gap-8  ">
                <div className="flex justify-between items-center  gap-4">
                  <p className="text-gray3">ایمیل</p>
                  <div className="text-center">
                    {!profile.email ? (
                      <span>__</span>
                    ) : (
                      <span>{profile.email}</span>
                    )}
                  </div>
                </div>

                <button
                  className="font-normal text-base text-complementry"
                  onClick={() => setEdit(true)}
                >
                  افزودن
                </button>
              </div>
            </div>
          </div>
        )}
        {edit && (
          <div className="border border-gray9 rounded-xl p-5 ">
            <form
              className="flex flex-col gap-7 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <p className="font-normal text-lg">اطلاعات حساب کاربری</p>
              </div>

              <div className="flex flex-col gap-4  md:gap-1 md:flex-row md:justify-between md:items-center">
                <div className="flex items-center justify-between  gap-3">
                  <p>شماره موبایل</p>
                  <span>{profile.mobile}</span>
                </div>

                <div className="flex justify-between gap-1   ">
                  <div className="flex flex-col justify-between items-center  gap-1  w-[60%] md:w-[15rem]">
                    <input
                      className="border border-gray3 p-2 rounded-md focus:outline-none focus:ring-0 w-full"
                      placeholder="آدرس ایمیل"
                      {...register("email")}
                    />

                    <p>
                      {errors.email && (
                        <span className="text-red-500">
                          {errors.email?.message}
                        </span>
                      )}
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="bg-primary text-white rounded-md py-2 px-8 max-h-10 w-[40%] md:w-[6rem]"
                  >
                    تایید
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserAccount;
