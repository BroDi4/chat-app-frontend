import { pageConfig } from '../../../../../app/config/page.config';
import { NavItem } from './NavItem';

const tabs = [
	{ title: 'Все', to: pageConfig.friendsAll },
	{ title: 'В сети', to: pageConfig.friendsOnline },
	{ title: 'Ожидание', to: pageConfig.friendsRequests },
];

export function FriendsNav() {
	return (
		<div className='flex items-center gap-4'>
			{tabs.map((item, i) => (
				<NavItem key={item.title} {...item} order={i} />
			))}
		</div>
	);
}
