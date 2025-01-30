import { UserPlus } from 'lucide-react';
import { useState } from 'react';

import { TopBar } from '../../../../shared/Components/TopBar/TopBar';
import { useDebounce } from '../../../../shared/hooks/useDebounce';
import { Button } from '../../../../shared/UI/buttons/Button';
import { ContentLoader } from '../../../../shared/UI/loaders/ContentLoader';
import { useGetFriendsQuery } from '../../friendsApiSlice';
import { FriendsList } from './FriendsList/FriendsList';
import { FriendsNav } from './FriendsNav/FriendsNav';

export function FriendsBlock() {
	const [filter, setFilter] = useState<boolean>(false);
	const [search, setSearch] = useState<string>('');
	const debouncedSearh = useDebounce(search);

	const { data: friends, isLoading } = useGetFriendsQuery({
		status: filter,
		username: debouncedSearh,
	});

	return (
		<div className='flex flex-col h-full'>
			<TopBar className='justify-between'>
				<FriendsNav filter={filter} setFilter={setFilter} />
				<Button className='text-white' size='md'>
					<span>Добавить друга</span>
					<UserPlus size={22} />
				</Button>
			</TopBar>

			{isLoading ? (
				<ContentLoader />
			) : (
				friends && (
					<FriendsList list={friends} search={search} setSearch={setSearch} />
				)
			)}
		</div>
	);
}
