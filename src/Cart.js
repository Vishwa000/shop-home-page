export default function Cart({
  cartlist,
  removeCart,
  inQuantity,
  decQuantity,
}) {
  return (
    <ol className="carts list-group list-group-numbered">
      {cartlist.map((item) => {
        return (
          <li className=" list-group-item d-flex justify-content-between align-item-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">{item.name}</div>
              ₹.{item.price}
              <div className="fw-bold">Qty:{item.quantity}</div>
              <button onClick={() => inQuantity(item)} className="plus">
                +
              </button>
              <button
                disabled={item.quantity === 0 ? true : false}
                onClick={() => decQuantity(item)}
                className="minus"
              >
                -
              </button>
              <div className="stock fw-bold">In Stock</div>
            </div>
            <button onClick={() => removeCart(item)} className="xmark">
              X
            </button>
          </li>
        );
      })}
    </ol>
  );
}
