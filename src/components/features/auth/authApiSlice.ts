import { apiSlice } from '../../../api/apiSlice';
import { ILoginData, IRegisterDto, IUser, IUserDto } from './auth.type';
import { setAuth } from './authSlice';

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		register: builder.mutation<IUserDto, IRegisterDto>({
			query: payload => ({
				url: '/user/register',
				method: 'POST',
				body: { ...payload },
			}),

			async onQueryStarted(_, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					window.localStorage.setItem('token', data.accessToken);
					dispatch(setAuth(data));
				} catch (err) {}
			},
		}),

		login: builder.mutation<IUserDto, ILoginData>({
			query: payload => ({
				url: '/user/login',
				method: 'POST',
				body: { ...payload },
			}),

			async onQueryStarted(_, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					window.localStorage.setItem('token', data.accessToken);
					dispatch(setAuth(data));
				} catch (err) {}
			},
		}),

		authUser: builder.query<IUser, null>({
			query: () => ({
				url: '/user/userinfo',
			}),

			async onQueryStarted(_, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					const accessToken = window.localStorage.getItem('token');
					if (data && accessToken) {
						dispatch(setAuth({ ...data, accessToken }));
					}
				} catch (err) {}
			},
		}),
	}),
});

export const { useLoginMutation, useRegisterMutation, useAuthUserQuery } =
	authApiSlice;
