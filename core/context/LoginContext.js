"use client";

import { createContext, useReducer,useEffect } from "react";
import Cookies from "js-cookie";

export const LoginContext = createContext();

const initialState = {
  loginModal: { show: false },
  loginCodeModal: { show: false },
  mobile: "",
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ShowLoginModal":
      return { ...state, loginModal: { show: true } };
    case "CloseLoginModal":
      return { ...state, loginModal: { show: false } };
    case "ShowLoginCodeModal":
      return {
        ...state,
        loginCodeModal: { show: true },
        mobile: action.payload,
      };
    case "CloseLoginCodeModal":
      return { ...state, loginCodeModal: { show: false } };
    case "SetUser":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export function LoginProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      dispatch({ type: "SetUser", payload: JSON.parse(userCookie) });
    }
  }, []);

  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
}
