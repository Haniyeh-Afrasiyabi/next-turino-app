import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/core/schema/login";

import React, { useContext } from "react";
import styles from "../authForm/CheckOTPForm.module.css";
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
      className={styles.overlay}
      onClick={() => {
        dispatch({ type: "CloseLoginModal" });
      }}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            onClick={() => {
              dispatch({ type: "CloseLoginModal" });
            }}
          >
            <Close />
          </div>
          <h2>ورود به تورینو</h2>
          <div>
            <p>شماره موبایل خود را وارد کنید</p>
            <input placeholder="0919***8439" {...register("number")} />
            {errors.number && <span>{errors.number?.message}</span>}
          </div>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default CheckOTPForm;
