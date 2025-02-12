import { TopBar } from '../../../../../shared/Components/TopBar/TopBar';
import { FriendsNav } from '../FriendsNav/FriendsNav';
import { AddFriendButton } from './AddFriendButton';

export function FriendsBar() {
	return (
		<TopBar className='justify-between'>
			<FriendsNav />
			<AddFriendButton />
		</TopBar>
	);
}
