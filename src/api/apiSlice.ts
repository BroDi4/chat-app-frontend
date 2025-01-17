import {
	BaseQueryFn,
	createApi,
	FetchArgs,
	fetchBaseQuery,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { logout, setAuth } from '../components/features/auth/authSlice';
import { IUserDto } from '../components/features/auth/auth.type';

const baseQuery = fetchBaseQuery({
	baseUrl: 'http://localhost:5000/api',
	credentials: 'include',
	prepareHeaders: headers => {
		const token = window.localStorage.getItem('token');
		if (token) {
			headers.set('authorization', `Bearer ${token}`);
		}
		return headers;
	},
});

const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);
	if (result.error?.status === 401) {
		const refreshResult = await baseQuery('/user/refresh', api, extraOptions);

		if (refreshResult.data) {
			const data = refreshResult.data as IUserDto;
			api.dispatch(setAuth(data));
			result = await baseQuery(args, api, extraOptions);
		} else {
			api.dispatch(logout());
		}
	}
	return result;
};

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: baseQueryWithReauth,
	endpoints: () => ({}),
});
