import { Outlet } from 'react-router';
import { FriendsBar } from '../../../features/friends/UI/Friends/FriendsBar/FriendsBar';

export function FriendsLayout() {
	return (
		<div className='flex flex-col h-full'>
			<FriendsBar />
			<Outlet />
		</div>
	);
}
