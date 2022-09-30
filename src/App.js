import { useState } from "react";
import { ToggleProvider } from "./context/ToggleContext";
import Container from "./components/Container";
import TopBar from "./components/TopBar";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import { math } from "./helpers/clalcOperations";

const btnValues = [
  [7, 8, 9, "DEL"],
  [4, 5, 6, "+"],
  [1, 2, 3, "-"],
  [".", 0, "/", "x"],
  ["RESET", "="],
];

function App() {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    // if (parseInt(calc.num).length < 16) {
    setCalc({
      ...calc,
      num:
        calc.num === 0 && value === "0"
          ? "0"
          : calc.num % 1 === 0
          ? Number(calc.num + value)
          : calc.num + value,
      res: !calc.sign ? 0 : calc.res,
    });
    // }
  };

  const dotClickHandler = (e) => {
    e.preventDefault();

    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const signClickHandler = (e) => {
    e.preventDefault();

    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      setCalc({
        ...calc,
        res:
          parseInt(calc.num) === 0 && calc.sign === "/"
            ? "Can't devide with 0"
            : math(parseFloat(calc.res), parseFloat(calc.num), calc.sign),
        num: 0,
        sign: "",
      });
    }
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };

  const delClickHandler = () => {
    setCalc({
      ...calc,
      num: 0,
    });
  };

  return (
    <ToggleProvider>
      <Container>
        <TopBar />
        <Screen value={calc.num ? calc.num : calc.res} />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={
                  btn === "DEL"
                    ? "del"
                    : btn === "RESET"
                    ? "reset"
                    : btn === "="
                    ? "equals"
                    : ""
                }
                value={btn}
                onClick={
                  btn === "DEL"
                    ? delClickHandler
                    : btn === "/" || btn === "x" || btn === "+" || btn === "-"
                    ? signClickHandler
                    : btn === "RESET"
                    ? resetClickHandler
                    : btn === "="
                    ? equalsClickHandler
                    : btn === "."
                    ? dotClickHandler
                    : numClickHandler
                }
              />
            );
          })}
        </ButtonBox>
      </Container>
    </ToggleProvider>
  );
}

export default App;
