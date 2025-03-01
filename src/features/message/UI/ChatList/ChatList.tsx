import { HelperHeading } from '../../../../shared/UI/headings/HelperHeading/HelperHeading';
import { ChatSkeleton } from '../../../../shared/UI/loaders/ChatSkeleton';
import { useGetChatsQuery } from '../../messageApiSlice';
import { EmptyChat } from './EmptyChat';
import { PrivateChat } from './item/PrivateChat';
import { ServerChat } from './item/ServerChat';

export function ChatList() {
	const { data: messages, isLoading } = useGetChatsQuery(null);

	return (
		<div className='px-2 flex flex-col h-full'>
			<div className='flex-none'>
				<HelperHeading
					size='sm'
					title='Личные сообщения'
					className='mb-4 px-2'
				/>
			</div>

			{isLoading ? (
				<>
					{new Array(10).fill(undefined).map((_, i) => (
						<ChatSkeleton className='mb-3' key={i} />
					))}
				</>
			) : !messages || messages.length === 0 ? (
				<EmptyChat />
			) : (
				<ul className='overflow-y-auto flex-1 py-1 styled__scrollbar'>
					{messages.map(obj =>
						obj.interlocutor ? (
							<PrivateChat key={obj.id} {...obj.interlocutor} />
						) : (
							<ServerChat key={obj.id} {...obj} />
						)
					)}
				</ul>
			)}
		</div>
	);
}
