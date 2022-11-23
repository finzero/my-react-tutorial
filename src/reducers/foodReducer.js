import FoodAction from '../actions/foodAction';

const initialState = [];

export default (order = initialState, { type, payload }) => {
  switch (type) {
    case FoodAction.add: {
      console.log('reducer add di panggil');
      return [...order, payload];
    }
    case FoodAction.remove: {
      console.log('reducer remove di panggil');
      return order.filter((o, i) => i !== payload);
    }
    case FoodAction.update: {
      console.log('reducer update di panggil');
      const newOrder = [...order];
      newOrder[payload.idx] = {
        ...newOrder[payload.idx],
        name: payload.name,
        quantity: payload.quantity,
      };
      return newOrder;
    }
    default:
      return order;
  }
};
