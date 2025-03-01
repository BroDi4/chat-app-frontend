import clsx from 'clsx/lite';
import { NavLink } from 'react-router';

interface Props {
	title: string;
	to: string;
	order: number;
}

export function NavItem({ title, to, order }: Props) {
	return (
		<NavLink
			to={to}
			end={order === 0}
			className={({ isActive }) =>
				clsx('px-3 py-1 rounded-md', isActive && 'bg-purple text-white')
			}
		>
			{title}
		</NavLink>
	);
}
