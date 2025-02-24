import { useEffect, useState } from 'react';
import { useDebounce } from '../../../../shared/hooks/useDebounce';
import { friendsApiSlice, useGetFriendsQuery } from '../../friendsApiSlice';
import { FriendsList } from './FriendsList/FriendsList';
import { useLocation } from 'react-router';
import { pageConfig } from '../../../../app/config/page.config';
import { SearchInput } from '../../../../shared/UI/inputs/SearchInput';
import { socket } from '../../../../shared/api/socket';
import { useAppDispatch } from '../../../../shared/hooks/redux';

export function FriendsBlock() {
	const [search, setSearch] = useState<string>('');
	const debouncedSearh = useDebounce(search);
	const dispatch = useAppDispatch();

	const location = useLocation();

	const { data: friends, isLoading } = useGetFriendsQuery({
		status: location.pathname === pageConfig.friendsOnline ? true : false,
		username: debouncedSearh,
	});
	useEffect(() => {
		socket.on('changed_user', () => {
			dispatch(friendsApiSlice.util.invalidateTags(['Friends']));
		});

		return () => {
			socket.off('changed_user');
		};
	}, []);

	return (
		<div className='p-3 flex flex-col h-full'>
			<SearchInput
				icon={true}
				className='mb-4'
				placeholder='Поиск'
				value={search}
				setValue={setSearch}
			/>

			<FriendsList list={friends} isLoading={isLoading} />
		</div>
	);
}
