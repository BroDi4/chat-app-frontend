import { Profile } from '../../../../shared/Components/Profile/Profile';
import { ChatList } from '../ChatList/ChatList';
import { NavList } from '../NavList/NavList';

export function ChatSidebar() {
	return (
		<aside className='bg-grayalpha h-screen flex flex-col'>
			<NavList />
			<div className='flex-1 overflow-hidden'>
				<ChatList />
			</div>
			<Profile />
		</aside>
	);
}
