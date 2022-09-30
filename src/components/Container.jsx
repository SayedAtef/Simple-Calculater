import { useContext } from "react";
import ToggleContext from "../context/ToggleContext";

const Container = ({ children }) => {
  const { one, two, three } = useContext(ToggleContext);
  return (
    <div
      className={`w-full h-screen ${
        one
          ? "bg-t1-mainBackground"
          : two
          ? "bg-t2-mainBackground"
          : "bg-t3-mainBackground"
      } p-6`}
    >
      <div className="text-[32px] h-full mt-auto mb-auto m-auto md:max-w-lg">
        {children}
      </div>
    </div>
  );
};

export default Container;
