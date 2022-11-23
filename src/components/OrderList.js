const OrderList = ({ order, removeOrder, editOrder }) => {
  return (
    <div className="d-flex flex-column">
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Name</td>
            <td>Quantity</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {order.map((o, i) => {
            return (
              <tr key={i}>
                <td>{o.name}</td>
                <td>{o.quantity}</td>
                <td>
                  <button
                    onClick={() => removeOrder(i)}
                    className="btn btn-sm btn-danger"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => editOrder(i)}
                    className="btn btn-sm btn-info ms-2"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
