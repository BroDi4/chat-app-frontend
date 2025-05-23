import { ChatSkeleton } from '../../../../shared/UI/loaders/ChatSkeleton';
import { useGetChatsQuery } from '../../messageApiSlice';
import { EmptyChat } from './EmptyChat';
import { PrivateChat } from './item/PrivateChat';
import { ServerChat } from './item/ServerChat';

export function ChatList() {
	const { data: chats, isLoading } = useGetChatsQuery(null);

	if (isLoading) {
		return (
			<>
				{new Array(10).fill(undefined).map((_, i) => (
					<ChatSkeleton className='mb-3' key={i} />
				))}
			</>
		);
	}

	if (!chats || chats.length === 0) {
		return <EmptyChat />;
	}

	return (
		<ul className='overflow-y-auto flex-1 py-1 styled__scrollbar'>
			{chats.map(obj =>
				obj.interlocutor ? (
					<PrivateChat key={obj.id} {...obj} />
				) : (
					<ServerChat key={obj.id} {...obj} />
				)
			)}
		</ul>
	);
}
