import { NavItem } from './NavItem';

interface Props {
	filter: string;
	setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const tabs = [
	{ title: 'Все', val: 'all' },
	{ title: 'В сети', val: 'online' },
];

export function FriendsNav({ filter, setFilter }: Props) {
	return (
		<div className='flex items-center gap-4'>
			{tabs.map(item => (
				<NavItem
					key={item.val}
					{...item}
					filter={filter}
					setFilter={setFilter}
				/>
			))}
		</div>
	);
}
