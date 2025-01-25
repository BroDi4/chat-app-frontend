import { TUserStatus } from '../../../../shared/Components/UserCard/Status/Status';
import { HelperHeading } from '../../../../shared/UI/headings/HelperHeading/HelperHeading';
import { MessageItem } from './MessageItem';

export interface IMessage {
	avatarUrl: string;
	name: string;
	status: TUserStatus;
	to: string;
}

const messages: IMessage[] = [
	{
		avatarUrl: '/nash2.jpg',
		name: 'name',
		status: 'online',
		to: '/',
	},
	{
		avatarUrl: '',
		name: 'name2',
		status: 'offline',
		to: '/',
	},
	{
		avatarUrl: '',
		name: 'name3',
		status: 'idle',
		to: '/',
	},
	{
		avatarUrl: '',
		name: 'name4',
		status: 'notdisturb',
		to: '/',
	},
];

export function MessageList() {
	return (
		<div className='px-2 flex flex-col h-full'>
			<div className='flex-none'>
				<HelperHeading
					size='sm'
					title='Личные сообщения'
					className='mb-4 px-2'
				/>
			</div>
			<ul className='overflow-y-auto flex-1 py-1 styled__scrollbar'>
				{messages.map(obj => (
					<MessageItem key={obj.name} {...obj} />
				))}
			</ul>
		</div>
	);
}
