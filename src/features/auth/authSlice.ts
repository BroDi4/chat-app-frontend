import { createSlice, Middleware, PayloadAction } from '@reduxjs/toolkit';
import { IAuthState, IUserDto } from './auth.type';
import { RootState } from '../../app/store/store';

const initialState: IAuthState = {
	user: null,
	token: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action: PayloadAction<IUserDto>) => {
			const { accessToken, ...user } = action.payload;
			state.user = user;
			state.token = accessToken;
		},
		logout: state => {
			state.user = null;
			state.token = null;
		},
	},
});

export const authMiddleware: Middleware = store => next => action => {
	const result = next(action);
	if (authSlice.actions.setAuth.match(action)) {
		const state = store.getState() as RootState;
		const token = state.auth.token;
		if (token) localStorage.setItem('token', token);
	}
	return result;
};

export const { setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
