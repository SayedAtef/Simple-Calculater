import { useContext } from "react";
import ToggleContext from "../context/ToggleContext";

const Button = ({ className, value, onClick }) => {
  const { one, two, three } = useContext(ToggleContext);

  return (
    <button
      className={`${
        className === "del"
          ? `${
              one
                ? "bg-t1-keyBackground"
                : two
                ? "bg-t2-keyBackground"
                : "bg-t3-keyBackground"
            } text-t1-textWhite text-lg md:text-2xl ${
              one
                ? "shadow-[inset_0_-5px_0_0_rgb(64,78,114)]"
                : two
                ? "shadow-[inset_0_-5px_0_0_rgb(27,95,101)]"
                : "shadow-[inset_0_-5px_0_0_rgb(188,21,244)]"
            }`
          : className === "reset"
          ? `col-span-2 ${
              one
                ? "bg-t1-keyBackground"
                : two
                ? "bg-t2-keyBackground"
                : "bg-t3-keyBackground"
            } p-4 md:text-3xl md:p-5 text-lg ${
              one
                ? "shadow-[inset_0_-5px_0_0_rgb(64,78,114)]"
                : two
                ? "shadow-[inset_0_-5px_0_0_rgb(27,95,101)]"
                : "shadow-[inset_0_-5px_0_0_rgb(188,21,244)]"
            }`
          : className === "equals"
          ? `col-span-2 ${
              one
                ? "bg-t1-keyBackgroundAndToggleRed"
                : two
                ? "bg-t2-keyBackgroundAndToggleRed"
                : "bg-t3-keyBackgroundAndToggleCyan"
            } p-4 ${
              one || two ? "text-t1-textWhite" : "text-t3-textDarkBlue"
            } md:text-3xl md:p-5 text-lg ${
              one
                ? "shadow-[inset_0_-5px_0_0_rgb(147,38,26)]"
                : two
                ? "shadow-[inset_0_-5px_0_0_rgb(137,57,1)]"
                : "shadow-[inset_0_-5px_0_0_rgb(108,249,242)]"
            }`
          : `${
              one
                ? "bg-t1-keyBackgroundGray"
                : two
                ? "bg-t2-keyBackgroundGray"
                : "bg-t3-keyBackgroundViolet"
            } ${
              one
                ? "text-t1-textBlue "
                : two
                ? "text-t2-textBlue "
                : "text-t3-textYellow"
            } ${
              one
                ? "shadow-[inset_0_-5px_0_0_rgb(180,165,151)]"
                : two
                ? "shadow-[inset_0_-5px_0_0_rgb(166,157,145)]"
                : "shadow-[inset_0_-5px_0_0_rgb(188,21,244)]"
            }`
      } p-2 rounded-lg hover:brightness-125`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;

// className="p-2 bg-t1-keyBackgroundGray rounded-lg text-t1-textBlue shadow-[inset_0_-5px_0_0_rgb(180,165,151)] focus:shadow-none"
