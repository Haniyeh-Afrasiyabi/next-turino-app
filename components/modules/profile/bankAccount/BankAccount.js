"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bankAccountSchema } from "@/core/schema/profile/bankAccountSchema";
import { editProfile } from "@/core/services/config";
import { userProfile } from "@/core/services/config";
import { useEffect, useState } from "react";

function BankAccount() {
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
    resolver: yupResolver(bankAccountSchema),
  });

  const onSubmit = async (data) => {
    const payload = {
      payment: {
        debitCard_code: data.debitCard_code,
        shaba_code: data.shaba_code,
        accountIdentifier: data.accountIdentifier,
      },
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
              <p className="font-normal text-lg">اطلاعات حساب بانکی</p>
              <button
                className="font-normal text-base text-complementry"
                onClick={() => setEdit(true)}
              >
                ویرایش اطلاعات
              </button>
            </div>

            <div className="flex flex-col gap-7 md:grid grid-cols-2  md:justify-between md:items-center">
              <div className="flex justify-between items-center  md:gap-8 md:justify-start ">
                <p className="text-gray3">شماره کارت</p>
                <div className="text-center">
                  {!profile.payment?.debitCard_code ? (
                    <span>__</span>
                  ) : (
                    <span>{profile.payment?.debitCard_code}</span>
                  )}
                </div>
              </div>
              <div className="flex justify-between items-center  md:gap-8 md:justify-start">
                <p className="text-gray3">شماره شبا</p>
                <div className="text-center">
                  {!profile.payment?.shaba_code ? (
                    <span>__</span>
                  ) : (
                    <span>{profile.payment?.shaba_code}</span>
                  )}
                </div>
              </div>
              <div className="flex justify-between items-center  md:gap-8 md:justify-start">
                <p className="text-gray3">شماره حساب</p>
                <div className="text-center">
                  {!profile.payment?.accountIdentifier ? (
                    <span>__</span>
                  ) : (
                    <span>{profile.payment?.accountIdentifier}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {edit && (
          <div className=" border border-gray9 rounded-xl  ">
            <form
              className="flex flex-col gap-4 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <p className="font-normal text-lg px-5 pt-5">
                  اطلاعات حساب بانکی
                </p>
              </div>

              <div className="w-full flex flex-col  gap-4  md:flex-row md:flex-wrap  md:items-center px-5">
                <div className="flex flex-col h-20 items-center  w-full md:w-[16rem]">
                  <input
                    placeholder="شماره کارت"
                    className="w-full border border-gray3 rounded-lg py-4 px-2 focus:outline-none md:w-[16rem]"
                    {...register("debitCard_code")}
                  />
                  <p>
                    {errors.debitCard_code && (
                      <p className="text-red-500">
                        {errors.debitCard_code.message}
                      </p>
                    )}
                  </p>
                </div>
                <div className="flex flex-col h-20 items-center  w-full md:w-[16rem]">
                  <input
                    {...register("shaba_code")}
                    placeholder="شماره شبا"
                    className="w-full border border-gray3 rounded-lg py-4 px-2 focus:outline-none md:w-[16rem]"
                  />
                  <p>
                    {errors.shaba_code && (
                      <p className="text-red-500">
                        {errors.shaba_code.message}
                      </p>
                    )}
                  </p>
                </div>

                <div className="flex flex-col h-20 items-center  w-full md:w-[16rem]">
                  <input
                    {...register("accountIdentifier")}
                    placeholder="شماره حساب"
                    className="w-full border border-gray3 rounded-lg py-4 px-2 focus:outline-none md:w-[16rem]"
                  />
                  <p>
                    {errors.accountIdentifier && (
                      <p className="text-red-500">
                        {errors.accountIdentifier.message}
                      </p>
                    )}
                  </p>
                </div>
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

export default BankAccount;
