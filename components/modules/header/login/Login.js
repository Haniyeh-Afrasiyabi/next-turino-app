"use client";
import { useContext } from "react";
import { LoginContext } from "@/core/context/LoginContext";
import SignIn from "../../../icons/SignIn";
import Profile from "../../../icons/Profile";
import ArrowDown from "../../../icons/ArrowDown";

function Login({ openDropDownHandler }) {
  const { state, dispatch } = useContext(LoginContext);
  const user = state.user;

  return (
    <>
      {user ? (
        <div>
          <div
            onClick={openDropDownHandler}
            className="flex justify-between items-center gap-1 text-primary cursor-pointer"
          >
            <Profile />
            {user.mobile}
            <ArrowDown />
          </div>
        </div>
      ) : (
        <div>
          {/* موبایل */}
          <div
            className="cursor-pointer lg:hidden"
            onClick={() => dispatch({ type: "ShowLoginModal" })}
          >
            <SignIn />
          </div>

          {/* دسکتاپ */}
          <button
            onClick={() => dispatch({ type: "ShowLoginModal" })}
            className="hidden lg:flex items-center gap-1 cursor-pointer border-2 border-primary rounded-lg px-3 py-1 bg-white text-primary text-lg font-medium"
          >
            <Profile />
            ورود | ثبت‌نام
          </button>
        </div>
      )}
    </>
  );
}

export default Login;
