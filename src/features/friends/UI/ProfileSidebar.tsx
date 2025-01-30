import { Profile } from '../../../shared/Components/Profile/Profile';
import { MessageList } from './MessageList/MessageList';
import { NavList } from './NavList/NavList';

export function ProfileSidebar() {
	return (
		<aside className='bg-grayalpha h-screen flex flex-col'>
			<NavList />
			<div className='flex-1 overflow-hidden'>
				<MessageList />
			</div>
			<Profile />
		</aside>
	);
}
