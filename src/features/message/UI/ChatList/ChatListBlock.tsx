import { HelperHeading } from '../../../../shared/UI/headings/HelperHeading/HelperHeading';
import { ChatList } from './ChatList';

export function ChatListBlock() {
	return (
		<div className='px-2 flex flex-col h-full'>
			<div className='flex-none'>
				<HelperHeading
					size='sm'
					title='Личные сообщения'
					className='mb-4 px-2'
				/>
			</div>
			<ChatList />
		</div>
	);
}
