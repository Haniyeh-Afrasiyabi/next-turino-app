import React, { useContext, useState } from "react";
import { LoginContext } from "@/core/context/LoginContext";
import OtpInput from "react18-input-otp";
import styles from "../modules/LoginModal.module.css"; // یا فایل جدید
import { checkOtp } from "@/core/services/config";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

function LoginCodeModal() {
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
      Cookies.set("accessToken", result.accessToken, { expires: 365 });
      Cookies.set("refreshToken", result.refreshToken, { expires: 365 });
      Cookies.set("user", JSON.stringify(result.user), { expires: 365 });
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
      className={styles.overlay}
      onClick={() => dispatch({ type: "CloseLoginModal" })}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>تایید شماره</h2>
        <p>کد تایید به شماره {state.mobile} ارسال شد</p>

        {/* <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          separator={<span> - </span>}
          inputType="number"
        /> */}

        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6} // تعداد رقم‌ها
          separator={<span style={{ margin: "0 4px" }}></span>} // جداکننده بین فیلدها
          inputStyle={{
            width: "40px",
            height: "40px",
            fontSize: "20px",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />

        <button onClick={handleSubmit}>تایید</button>
      </div>
    </div>
  );
}

export default LoginCodeModal;
