import { createContext, useReducer } from "react";
import toggleReducer from "./ToggleReducer";

const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const initialState = {
    one: true,
    two: false,
    three: false,
  };

  const [state, dispatch] = useReducer(toggleReducer, initialState);

  return (
    <ToggleContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContext;
