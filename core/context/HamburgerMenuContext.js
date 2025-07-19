"use client";
import { createContext, useReducer } from "react";

export const HamburgerMenuContext = createContext();

const initialState = {
  hamburgerModal: { show: false },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ShowHamburgerMenu":
      return { ...state, hamburgerModal: { show: true } };
    case "CloseHamburgerMenu" :
      return { ...state, hamburgerModal: { show: false } };

  }
};

function HamburgerMenuProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <HamburgerMenuContext.Provider value={{ state, dispatch }}>
      {children}
    </HamburgerMenuContext.Provider>
  );
}

export default HamburgerMenuProvider;
