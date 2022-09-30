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
      <div className="grid grid-rows-2 grid-flow-col gap-0">
        <p
          className={`row-span-2 self-end text-base mr-4 ${
            one
              ? "text-t1-textWhite"
              : two
              ? "text-t2-textBlue"
              : "text-t3-textYellow"
          }`}
        >
          THEME
        </p>
        <div
          className={`row-span-1 text-sm flex justify-between ${
            one
              ? "text-t1-textWhite"
              : two
              ? "text-t2-textBlue"
              : "text-t3-textYellow"
          }`}
        >
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <button
          onClick={onClick}
          className={`w-20 h-6 row-span-1 ${
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
  );
};

export default Toggle;
