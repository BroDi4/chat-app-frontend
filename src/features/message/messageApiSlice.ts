import { apiSlice } from '../../shared/api/apiSlice';
import { formatDate } from '../../shared/api/helpers';
import { IChat, IChatWithMessages } from './message.type';

export const messageApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		getChats: builder.query<IChat[], null>({
			query: () => ({
				url: '/chat/getAll',
				method: 'GET',
			}),

			providesTags: ['Chats'],
		}),
		getMessages: builder.query<IChatWithMessages, number>({
			query: chatId => ({
				url: `/chat/${chatId}`,
				method: 'GET',
			}),
			transformResponse: (response: IChatWithMessages) => {
				return {
					...response,
					messages: response.messages.map(message => ({
						...message,
						createdAt: formatDate(message.createdAt),
					})),
				};
			},
		}),
	}),
});

export const { useGetChatsQuery, useGetMessagesQuery } = messageApiSlice;
