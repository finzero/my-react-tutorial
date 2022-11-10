import React, { useState, useRef, useEffect } from 'react';

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

export default function UseReducer() {
  const [order, setOrder] = useState([]);
  const [updatingOrder, setUpdatingOrder] = useState(null);

  const inputName = useRef();
  const inputQty = useRef();

  const clearForm = () => {
    inputName.current.value = '';
    inputQty.current.value = '';
    inputName.current.focus();
  };

  const addOrder = () => {
    setOrder((order) => [...order, getPayload()]);
    clearForm();
  };

  const updateOrder = () => {
    const newOrder = [...order];
    newOrder[updatingOrder] = {
      ...newOrder[updatingOrder],
      ...getPayload(),
    };
    setOrder(newOrder);
    clearForm();
  };

  const removeOrder = (idx) => {
    setOrder((order) => order.filter((o, i) => i !== idx));
  };

  const editOrder = (idx) => {
    setUpdatingOrder(idx);
    inputName.current.value = order[idx].name;
    inputQty.current.value = order[idx].quantity;
    inputQty.current.focus();
  };

  const getPayload = () => {
    return {
      name: inputName.current.value,
      quantity: inputQty.current.value,
    };
  };

  useEffect(() => {
    setUpdatingOrder(null);
  }, [order]);

  return (
    <div>
      <p>
        <b>Use Reducer</b>
      </p>
      <hr />
      <div className="row">
        <div className="col">
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            ref={inputName}
            placeholder="Food Name"
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="qty"
            id="qty"
            className="form-control"
            ref={inputQty}
            placeholder="quantity"
          />
        </div>
        <div className="col">
          <button
            className="btn btn-primary"
            onClick={updatingOrder === null ? addOrder : updateOrder}
          >
            {updatingOrder === null ? 'Add Order' : 'Update Order'}
          </button>
        </div>
      </div>

      <hr />
      <OrderList
        order={order}
        removeOrder={removeOrder}
        editOrder={editOrder}
      />
    </div>
  );
}
