import { useParams } from 'react-router';
import { useGetMessagesQuery } from '../../messageApiSlice';
import { ChatBar } from './ChatBar';
import { EmptyData } from '../../../../shared/Components/EmptyData/EmptyData';
import { ContentLoader } from '../../../../shared/UI/loaders/ContentLoader';
import { MessageList } from './MessageList/MessageList';
import { ChatInput } from './ChatInput';
import { useEffect } from 'react';
import { socket } from '../../../../shared/api/socket';

export function ChatBlock() {
	const { id } = useParams();
	const { data: chat, isLoading, refetch } = useGetMessagesQuery(Number(id));

	useEffect(() => {
		socket.emit('join_chat', id);

		socket.on('new_message', () => {
			refetch();
		});

		return () => {
			socket.off('new_message');
			socket.emit('leave_chat', id);
		};
	}, [refetch, id]);

	if (isLoading) return <ContentLoader />;

	function sendMessage(message: string) {
		socket.emit('send_message', { chatId: id, message });
	}

	return (
		<div className='grid grid-rows-[60px_1fr_60px] h-screen auto-rows-auto'>
			{!chat ? (
				<EmptyData />
			) : (
				<>
					<ChatBar {...chat} />
					<MessageList messages={chat.messages} />
				</>
			)}
			<ChatInput onSend={sendMessage} />
		</div>
	);
}
