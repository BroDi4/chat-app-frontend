import clsx from 'clsx/lite';
import { NavLink } from 'react-router';

interface Props {
	title: string;
	to: string;
}

export function NavItem({ title, to }: Props) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				clsx('px-3 py-1 rounded-md', isActive && 'bg-purple text-white')
			}
		>
			{title}
		</NavLink>
	);
}
