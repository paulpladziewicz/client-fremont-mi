import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { peopleApi } from './services/peopleApi';

const store = configureStore({
  reducer: {
    user: userReducer,
    [peopleApi.reducerPath]: peopleApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(peopleApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
