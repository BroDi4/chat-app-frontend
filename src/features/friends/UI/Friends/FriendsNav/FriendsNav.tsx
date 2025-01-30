import { NavItem } from './NavItem';

interface Props {
	filter: boolean;
	setFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const tabs = [
	{ title: 'Все', val: false },
	{ title: 'В сети', val: true },
];

export function FriendsNav({ filter, setFilter }: Props) {
	return (
		<div className='flex items-center gap-4'>
			{tabs.map(item => (
				<NavItem
					key={item.title}
					{...item}
					filter={filter}
					setFilter={setFilter}
				/>
			))}
		</div>
	);
}
