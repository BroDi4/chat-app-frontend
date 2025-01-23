import { Profile } from '../../../shared/Components/Profile/Profile';
import { MessageList } from './MessageList/MessageList';

export function ProfileSidebar() {
	return (
		<div className='bg-grayalpha flex flex-col justify-between'>
			<MessageList />
			<Profile />
		</div>
	);
}
