export default function Cart({ cartlist, removeCart }) {
  return (
    <ol className="list-group list-group-numbered">
      {cartlist.map((item) => {
        return (
          <li className="list-group-item d-flex justify-content-between align-item-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">{item.name}</div>
              ₹.{item.price}
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
