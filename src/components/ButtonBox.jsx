import { useContext } from "react";
import ToggleContext from "../context/ToggleContext";

const ButtonBox = ({ children }) => {
  const { one, two, three } = useContext(ToggleContext);

  return (
    <div
      className={`${
        one
          ? "bg-t1-toggleAndKeyPadBackground"
          : two
          ? "bg-t2-toggleAndKeyPadBackground"
          : "bg-t3-toggleAndKeyPadBackground"
      } rounded-md text-t1-textWhite p-6 grid grid-cols-4 gap-4 text-center`}
    >
      {children}
    </div>
  );
};

export default ButtonBox;

{
  /* <div className="bg-t1-screenBackground rounded-md text-t1-textWhite p-6">
      <div className="grid grid-cols-4 gap-4 text-center mb-4">

        <button className="p-2 bg-t1-keyBackground rounded-lg text-t1-textWhite text-lg shadow-[inset_0_-5px_0_0_rgb(64,78,114)]">
          DEL
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 text-center">
        <button className="p-2 bg-t1-keyBackground rounded-lg text-lg shadow-[inset_0_-5px_0_0_rgb(64,78,114)]">
          RESET
        </button>
        <button className="p-2 bg-t1-keyBackgroundAndToggleRed rounded-lg text-lg shadow-[inset_0_-5px_0_0_rgb(147,38,26)]">
          =
        </button>
      </div>
    </div> */
}
