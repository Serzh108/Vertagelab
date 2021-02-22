import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { gradientSlice } from './gradientReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];

const rootReducer = {
  [gradientSlice.name]: gradientSlice.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});
