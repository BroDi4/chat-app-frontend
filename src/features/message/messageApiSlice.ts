import { apiSlice } from '../../shared/api/apiSlice';
import { IChat } from './message.type';

export const messageApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		getChats: builder.query<IChat[], null>({
			query: () => ({
				url: '/chat/getAll',
				method: 'GET',
			}),

			providesTags: ['Chats'],
		}),
	}),
});

export const { useGetChatsQuery } = messageApiSlice;
