import { IApiResponse } from '../../shared/api/api.types';
import { apiSlice } from '../../shared/api/apiSlice';
import { IFriendRequest, TFriendsList } from './friends.types';

export const friendsApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		getFriends: builder.query<
			TFriendsList,
			{ status: boolean; username: string }
		>({
			query: ({ status, username }) => ({
				url: `friend/get/${status}?username=${username}`,
				method: 'GET',
			}),
		}),

		deleteFriend: builder.mutation<IApiResponse, number>({
			query: id => ({
				url: `friend/delete/${id}`,
				method: 'DELETE',
			}),
		}),

		getRequests: builder.query<IFriendRequest[], null>({
			query: () => ({
				url: 'friend/requests',
				method: 'GET',
			}),
		}),

		sendRequest: builder.mutation<IApiResponse, number>({
			query: userId => ({
				url: `friend/sendreq/${userId}`,
				method: 'POST',
			}),
		}),

		deleteRequest: builder.mutation<IApiResponse, number>({
			query: requestId => ({
				url: `friend/deletereq/${requestId}`,
				method: 'DELETE',
			}),
		}),

		acceptRequest: builder.mutation<IApiResponse, number>({
			query: requestId => ({
				url: `friend/acceptreq/${requestId}`,
				method: 'POST',
			}),
		}),
	}),
});

export const {
	useAcceptRequestMutation,
	useDeleteFriendMutation,
	useGetFriendsQuery,
	useGetRequestsQuery,
	useDeleteRequestMutation,
	useSendRequestMutation,
} = friendsApiSlice;
