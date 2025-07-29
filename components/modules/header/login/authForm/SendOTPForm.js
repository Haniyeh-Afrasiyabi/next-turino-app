import React, { useContext, useState } from "react";
import { LoginContext } from "@/core/context/LoginContext";
import OtpInput from "react18-input-otp";
import { checkOtp } from "@/core/services/config";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import LineArrowLeft from "@/components/icons/LineArrowLeft";

function SendOTPForm() {
  const { state, dispatch } = useContext(LoginContext);
  const [otp, setOtp] = useState("");

  if (!state.loginCodeModal?.show) return null;

  const handleSubmit = async () => {
    // اینجا کد تایید رو میفرستیم به سرور
    try {
      const result = await checkOtp({
        mobile: state.mobile,
        code: otp,
      });
      console.log(result);
      // Cookies.set("accessToken", result.accessToken, { expires: 365 });
      // Cookies.set("refreshToken", result.refreshToken, { expires: 365 });
      // Cookies.set("user", JSON.stringify(result.user), { expires: 365 });
      Cookies.set("accessToken", result.accessToken, {
        expires: 30, // روز
        path: "/", // برای اینکه در همه صفحات قابل دسترس باشه
      });

      Cookies.set("refreshToken", result.refreshToken, {
        expires: 365,
        path: "/",
      });

      Cookies.set("user", JSON.stringify(result.user), {
        expires: 365,
        path: "/",
      });
      dispatch({ type: "SetUser", payload: result.user });
      dispatch({ type: "CloseLoginCodeModal" });
      toast.success("ورود با موفقیت انجام شد ✅");
    } catch (error) {
      toast.error("خطا در هنگام ورود ❌");
      console.log(error);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]"
      onClick={() => dispatch({ type: "CloseLoginModal" })}
    >
      <div
        className="flex flex-col w-[472px] h-[338px] bg-white p-5 rounded-lg text-center  justify-between relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          onClick={() => {
            dispatch({ type: "CloseLoginCodeModal" });
            dispatch({ type: "ShowLoginModal" });
          }}
          className="self-end cursor-pointer"
        >
          <LineArrowLeft />
        </div>
        <div className=" h-full flex flex-col gap-5  justify-between p-3 ">
          <h2 className="text-3xl font-semibold text-black1">تایید شماره</h2>
          <p className="font-light text-base ">
            کد تایید به شماره {state.mobile} ارسال شد
          </p>

          <div className=" self-center ">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6} // تعداد رقم‌ها
              separator={<span style={{ margin: "0 4px" }}></span>} // جداکننده بین فیلدها
              inputType="number"
              containerStyle={{ direction: "ltr" }}
              inputStyle={{
                width: "40px",
                height: "40px",
                fontSize: "20px",
                textAlign: "center",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>

          <button
            className="bg-primary rounded-md  p-3 text-white"
            onClick={handleSubmit}
          >
            تایید
          </button>
        </div>
      </div>
    </div>
  );
}

export default SendOTPForm;
