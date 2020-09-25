import React, { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export const Ctx = createContext();

const initialState = {
  menuIcon: false,
};

export const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Set menu btn logic
  function burgerMenu() {
    dispatch({
      type: "TOGGLE_THE_BURGER_MENU_SVG",
    });
  }

  return (
    <Ctx.Provider value={{ menuIcon: state.menuIcon, burgerMenu }}>
      {children}
    </Ctx.Provider>
  );
};

export const useCtx = () => useContext(Ctx);
