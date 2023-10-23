import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  const add = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("Cantidad máxima");
    }
  };

  const subtract = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <Counter add={add} subtract={subtract} counter={counter} onAdd={onAdd} />
  );
};

export default CounterContainer;
