"use client";
import { useContext } from "react";
import { LoginContext } from "@/core/context/LoginContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { removeCookie } from "@/core/utils/cookie";

function DropDownProfile({ isOpen, onClose }) {
  const router = useRouter();
  const { dispatch, state } = useContext(LoginContext);
  const user = state.user;

  if (!isOpen || !user) return null;

  const logoutHandler = () => {
    removeCookie("accessToken");
    removeCookie("refreshToken");
    removeCookie("user");
    dispatch({ type: "SetUser", payload: null });
    onClose(); // بستن dropdown
    router.push("/");
  };

  return (
    <div className="flex flex-col justify-start   absolute left-0 top-14 lg:top-14 lg:left-20  bg-white  shadow-md rounded-lg z-10 p-3 min-w-[190px] text-right space-y-2">
      <p className="pr-5  bg-white1">{user.mobile}</p>

      <Link
        href="/profile"
        className="font-normal text-sm text-black1"
        onClick={onClose}
      >
        🧾 اطلاعات حساب کاربری
      </Link>

      <button
        className="text-right font-normal text-sm text-lightRed"
        onClick={logoutHandler}
      >
        🚪 خروج از حساب کاربری
      </button>
    </div>
  );
}

export default DropDownProfile;
