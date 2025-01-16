import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../components/features/auth/authSlice';
import { apiSlice } from '../api/apiSlice';

export const store = configureStore({
	reducer: { auth: authReducer, [apiSlice.reducerPath]: apiSlice.reducer },
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
