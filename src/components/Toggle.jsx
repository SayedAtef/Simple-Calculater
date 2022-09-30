import { useState, useContext } from "react";
import ToggleContext from "../context/ToggleContext";

const Toggle = () => {
  const [position, setPosition] = useState("first");
  const { one, two, dispatch } = useContext(ToggleContext);

  const onClick = () => {
    if (position === "first") {
      setPosition("second");
      dispatch({ type: "THEME_TWO" });
    }
    if (position === "second") {
      setPosition("third");
      dispatch({ type: "THEME_THREE" });
    }
    if (position === "third") {
      setPosition("first");
      dispatch({ type: "THEME_ONE" });
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <p>theme</p>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <button
            onClick={onClick}
            className={`w-20 h-6 ${
              one
                ? "bg-t1-toggleAndKeyPadBackground"
                : two
                ? "bg-t2-toggleAndKeyPadBackground"
                : "bg-t3-toggleAndKeyPadBackground"
            } my-auto rounded-2xl flex ${
              position === "second"
                ? "justify-center"
                : position === "third"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`rounded-full ${
                one
                  ? "bg-t1-keyBackgroundAndToggleRed"
                  : two
                  ? "bg-t2-keyBackgroundAndToggleRed"
                  : "bg-t3-keyBackgroundAndToggleCyan"
              } w-4 h-4  m-1`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
