const Counter = ({ add, subtract, counter, onAdd }) => {
  return (
    <div>
      <button onClick={add}>+</button>
      <h4>{counter}</h4>
      <button onClick={subtract}>-</button>
      <button onClick={() => onAdd(counter)}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;
