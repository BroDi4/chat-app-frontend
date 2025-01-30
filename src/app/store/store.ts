import { configureStore } from '@reduxjs/toolkit';

import { apiSlice } from '../../shared/api/apiSlice';
import { authMiddleware, authReducer } from '../../features/auth';

export const store = configureStore({
	reducer: { auth: authReducer, [apiSlice.reducerPath]: apiSlice.reducer },
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(apiSlice.middleware).concat(authMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
