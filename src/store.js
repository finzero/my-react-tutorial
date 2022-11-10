import { configureStore } from '@reduxjs/toolkit';
import vehicleReducer from './reducers/vehicleReducer';

const store = configureStore({
  reducer: {
    vehicle: vehicleReducer,
  },
});

export default store;
