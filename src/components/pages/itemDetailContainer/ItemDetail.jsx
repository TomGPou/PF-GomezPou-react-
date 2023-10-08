import CounterContainer from "../../common/counter/CounterContainer";

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div>
      {/* detalle */}
      <h2>{productSelected.name}</h2>
      <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
