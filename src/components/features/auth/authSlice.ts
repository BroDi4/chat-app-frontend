import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthState, IUserDto } from './auth.type';

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

export const { setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
