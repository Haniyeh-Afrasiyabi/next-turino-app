import { useContext } from "react";
import { LoginContext } from "@/core/context/LoginContext";
import SignIn from "../icons/SignIn";
import Profile from "../icons/Profile";
import ArrowDown from "../icons/ArrowDown";
import styles from "./Login.module.css"

function Login() {
  const { state, dispatch } = useContext(LoginContext);
  const user = state.user;

  return (
    <>
      {user ? (
        <div className={styles.profile}>
          <Profile />
          {user.mobile}
          <ArrowDown />
        </div>
      ) : (
        <div>
          <div
            className={styles.loginMobile}
            onClick={() => dispatch({ type: "ShowLoginModal" })}
          >
            <SignIn />
          </div>
          <button
            className={styles.loginWeb}
            onClick={() => dispatch({ type: "ShowLoginModal" })}
          >
            <Profile />
            ورود | ثبت نام
          </button>
        </div>
      )}
    </>
  );
}

export default Login;
