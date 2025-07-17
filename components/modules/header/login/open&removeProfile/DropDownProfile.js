import { useContext } from "react";
import styles from "./DropDownProfile.module.css";
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
    router.push("/"); // یا برو به هر صفحه‌ای که خواستی
  };

  return (
    <div className={styles.dropdown}>
      <p className={styles.mobile}>{user.mobile}</p>
      <hr />
      <Link href="/profile" className={styles.option} onClick={onClose}>
        🧾 اطلاعات حساب کاربری
      </Link>

      <button className={styles.logout} onClick={logoutHandler}>
        🚪 خروج از حساب کاربری
      </button>
    </div>
  );
}

export default DropDownProfile;
