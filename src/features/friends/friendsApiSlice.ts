import { IApiMessageResponse } from '../../shared/api/api.types';
import { apiSlice } from '../../shared/api/apiSlice';
import { transformDateInLocal } from '../../shared/api/helpers';
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
			providesTags: ['Friends'],
		}),

		deleteFriend: builder.mutation<IApiMessageResponse, number>({
			query: id => ({
				url: `friend/delete/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Friends'],
		}),

		getRequests: builder.query<IFriendRequest[], null>({
			query: () => ({
				url: 'friend/requests',
				method: 'GET',
			}),
			transformResponse: (response: IFriendRequest[]) => {
				return response.map(obj => {
					return {
						...obj,
						createdAt: transformDateInLocal(obj.createdAt),
					};
				});
			},
			providesTags: ['Requests'],
		}),

		sendRequest: builder.mutation<IApiMessageResponse, string>({
			query: uniqueName => ({
				url: `friend/sendreq/${uniqueName}`,
				method: 'POST',
			}),
		}),

		deleteRequest: builder.mutation<IApiMessageResponse, number>({
			query: requestId => ({
				url: `friend/deletereq/${requestId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Requests'],
		}),

		acceptRequest: builder.mutation<IApiMessageResponse, number>({
			query: requestId => ({
				url: `friend/acceptreq/${requestId}`,
				method: 'POST',
			}),
			invalidatesTags: ['Requests', 'Friends'],
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
