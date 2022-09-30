import { useContext } from "react";
import ToggleContext from "../context/ToggleContext";
import Toggle from "./Toggle";

const TopBar = () => {
  const { one, two, three } = useContext(ToggleContext);

  return (
    <div className="flex justify-between mb-6">
      <p
        className={`${
          one
            ? "text-t1-textWhite"
            : two
            ? "text-t2-textBlue"
            : "text-t3-textYellow"
        }`}
      >
        calc
      </p>
      <Toggle />
    </div>
  );
};

export default TopBar;
