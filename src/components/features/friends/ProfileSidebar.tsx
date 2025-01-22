import { MessageList } from './MessageList/MessageList';
import { Profile } from '../../UI/common/Profile/Profile';

export function ProfileSidebar() {
	return (
		<div className='bg-grayalpha flex flex-col justify-between'>
			<MessageList />
			<Profile />
		</div>
	);
}
