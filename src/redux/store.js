import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import {
//   // persistStore,
//   // persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
import { gradientSlice } from './gradientReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
    // {
    //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    // },
  }),
];

const rootReducer = {
  [gradientSlice.name]: gradientSlice.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});
