import { TUserStatus } from '../../../UI/common/UserCard/Status/Status';
import { HelperHeading } from '../../../UI/headings/HelperHeading/HelperHeading';
import { MessageItem } from './MessageItem';

interface Props {}

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

export function MessageList({}: Props) {
	return (
		<div className='py-2 px-2'>
			<div className=''>
				<HelperHeading
					size='sm'
					title='Личные сообщения'
					className='mb-4 px-2'
				/>
			</div>
			<ul className=''>
				{messages.map(obj => (
					<MessageItem key={obj.name} {...obj} />
				))}
			</ul>
		</div>
	);
}
