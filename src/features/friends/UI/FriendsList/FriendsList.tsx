import { useState } from 'react';
import { TopBar } from '../../../../shared/Components/TopBar/TopBar';
import { HelperHeading } from '../../../../shared/UI/headings/HelperHeading/HelperHeading';
import { SearchInput } from '../../../../shared/UI/inputs/SearchInput';
import { IMessage } from '../MessageList/MessageList';
import { FriendsItem } from './FriendsItem';
import { FriendsNav } from './FriendsNav/FriendsNav';
import { Button } from '../../../../shared/UI/buttons/Button';
import { UserPlus } from 'lucide-react';

const friends: IMessage[] = [
	{
		avatarUrl: '',
		name: 'name1',
		status: 'notdisturb',
		to: '/',
	},
	{
		avatarUrl: '',
		name: 'name2',
		status: 'notdisturb',
		to: '/',
	},
];

export function FriendsList() {
	const [filter, setFilter] = useState<string>('all');

	return (
		<>
			<TopBar className='justify-between'>
				<FriendsNav filter={filter} setFilter={setFilter} />
				<Button className='text-white' size='md'>
					<span>Добавить друга</span>
					<UserPlus size={22} />
				</Button>
			</TopBar>

			<div className='p-3'>
				<SearchInput icon={true} className='mb-4' placeholder='Поиск' />
				<HelperHeading size='sm' title='Друзья - 3' />
				<div className='mt-4'>
					{friends.map(obj => (
						<FriendsItem {...obj} />
					))}
				</div>
			</div>
		</>
	);
}
