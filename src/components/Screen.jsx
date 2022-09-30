import { Textfit } from "react-textfit";
import { useContext } from "react";
import ToggleContext from "../context/ToggleContext";

const Screen = ({ value }) => {
  const { one, two, three } = useContext(ToggleContext);

  return (
    <div
      className={`${
        one
          ? "bg-t1-screenBackground"
          : two
          ? "bg-t2-screenBackground"
          : "bg-t3-screenBackground"
      } rounded-md mb-6`}
    >
      <Textfit
        dir="rtl"
        className={`p-4 ${
          one
            ? "text-t1-textWhite"
            : two
            ? "text-t2-textBlue"
            : "text-t3-textYellow"
        }`}
      >
        {value.toLocaleString()}
      </Textfit>
    </div>
  );
};

export default Screen;
