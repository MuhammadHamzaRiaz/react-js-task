// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './modules/user/usersSlice';
import productsReducer from './modules/products/productsSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
