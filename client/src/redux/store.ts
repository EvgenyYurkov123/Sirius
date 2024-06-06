import { configureStore } from '@reduxjs/toolkit';
import type { ConfigureStoreOptions } from '@reduxjs/toolkit';
import basketReducer from './basketSlice';

const storeOptions: ConfigureStoreOptions = {
  reducer: {
    basket: basketReducer,
  },
};

export const store = configureStore(storeOptions);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
