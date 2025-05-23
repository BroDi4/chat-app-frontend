import { apiSlice } from '../../shared/api/apiSlice';
import { ILoginData, IRegisterDto, IUser, IUserDto } from './auth.type';
import { logout, setAuth } from './authSlice';

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		register: builder.mutation<IUserDto, IRegisterDto>({
			query: payload => ({
				url: '/user/register',
				method: 'POST',
				body: { ...payload },
			}),
		}),

		login: builder.mutation<IUserDto, ILoginData>({
			query: payload => ({
				url: '/user/login',
				method: 'POST',
				body: { ...payload },
			}),
		}),

		logout: builder.mutation<null, null>({
			query: () => ({
				url: '/user/logout',
				method: 'GET',
			}),
			async onQueryStarted(_, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					if (data) {
						dispatch(logout());
					}
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

		refreshAuth: builder.mutation<IUserDto, null>({
			query: () => ({
				url: '/user/refresh',
			}),

			async onQueryStarted(_, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					if (data) {
						dispatch(setAuth({ ...data }));
					}
				} catch (err) {}
			},
		}),
	}),
});

export const {
	useLoginMutation,
	useRegisterMutation,
	useAuthUserQuery,
	useRefreshAuthMutation,
	useLogoutMutation,
} = authApiSlice;
