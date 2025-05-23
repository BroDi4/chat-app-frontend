import { PhoneCall, UsersRound } from 'lucide-react';
import { ServerCard } from '../../../../shared/Components/NameCard/ServerCard';
import { UserCard } from '../../../../shared/Components/NameCard/UserCard';
import { TopBar } from '../../../../shared/Components/TopBar/TopBar';
import { IChat } from '../../message.type';

interface Props extends IChat {}

export function ChatBar(props: Props) {
	return (
		<TopBar className='justify-between'>
			{props.isGroup ? (
				<ServerCard {...props} />
			) : (
				props.interlocutor !== null && <UserCard {...props.interlocutor} />
			)}
			<div className='flex gap-4'>
				<button>
					<PhoneCall />
				</button>
				<button>
					<UsersRound />
				</button>
			</div>
		</TopBar>
	);
}
