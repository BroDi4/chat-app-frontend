import { useState } from 'react';
import { useDebounce } from '../../../../shared/hooks/useDebounce';
import { useGetFriendsQuery } from '../../friendsApiSlice';
import { FriendsList } from './FriendsList/FriendsList';
import { useLocation } from 'react-router';
import { pageConfig } from '../../../../app/config/page.config';

export function FriendsBlock() {
	const [search, setSearch] = useState<string>('');
	const debouncedSearh = useDebounce(search);

	const location = useLocation();

	const { data: friends, isLoading } = useGetFriendsQuery({
		status: location.pathname === pageConfig.friendsOnline ? true : false,
		username: debouncedSearh,
	});

	return (
		<FriendsList
			list={friends}
			search={search}
			setSearch={setSearch}
			isLoading={isLoading}
		/>
	);
}
