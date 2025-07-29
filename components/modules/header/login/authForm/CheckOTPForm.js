import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/core/schema/login";

import React, { useContext } from "react";
import { LoginContext } from "@/core/context/LoginContext";
import Close from "../../../../icons/Close";
import { login } from "@/core/services/config";
import { toast } from "react-toastify";

function CheckOTPForm() {
  const { state, dispatch } = useContext(LoginContext);

  if (!state.loginModal?.show) return null;

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    const payload = {
      mobile: data.number,
    };
    console.log(payload);

    try {
      const result = await login(payload);
      console.log(result);

      dispatch({ type: "CloseLoginModal" });
      dispatch({ type: "ShowLoginCodeModal", payload: data.number });
      toast.success(`کد تایید: ${result.code}`);
      console.log(result);

      // toast.success("ثبت‌نام با موفقیت انجام شد!");

      // localStorage.setItem("token", result.token);
      // localStorage.setItem("username", payload.username);
      // router.push("/dashboard");
    } catch (error) {
      // const status = error.response?.status;
      console.log("خطای کامل:", error.response);

      // if (status === 409) {
      //   toast.error("این نام کاربری قبلاً ثبت شده است");
      // } else if (status === 400) {
      //   toast.error("اطلاعات وارد شده معتبر نیست");
      // } else {
      //   toast.error("مشکلی در ثبت‌نام رخ داده است");
      // }
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]"
      onClick={() => {
        dispatch({ type: "CloseLoginModal" });
      }}
    >
      <div
        className="flex flex-col w-[472px] h-[338px] bg-white p-5 rounded-lg text-center  justify-between relative"
        onClick={(e) => e.stopPropagation()}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col h-full gap-3 "
        >
          <div
            onClick={() => {
              dispatch({ type: "CloseLoginModal" });
            }}
            className="self-end cursor-pointer"
          >
            <Close />
          </div>

          <div className="h-full flex flex-col gap-5 justify-between p-3 ">
            <h2 className="text-3xl font-semibold text-black1">
              ورود به تورینو
            </h2>
            <div className="flex flex-col gap-2">
              <p className="font-light text-base text-right">
                شماره موبایل خود را وارد کنید
              </p>
              <input
                className="border border-gray10  rounded-md w-full p-2 focus:outline-none"
                placeholder="۸۴۳۹***۰۹۱۹"
                {...register("number")}
              />
              {errors.number && (
                <span className="text-red-500">{errors.number?.message}</span>
              )}
            </div>

            {/* <input type="submit" /> */}
            <button
              type="submit"
              className="bg-primary rounded-md  p-3 text-white"
            >
              ارسال کد تایید
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckOTPForm;
