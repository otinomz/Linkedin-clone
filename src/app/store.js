import { configureStore } from '@reduxjs/toolkit';
import useReducer from '../features/user/user';

export const store = configureStore({
  reducer: {
    user: useReducer,
  },
});
