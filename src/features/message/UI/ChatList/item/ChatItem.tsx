import { NavLink } from 'react-router';
import { PropsWithChildren } from 'react';
import clsx from 'clsx/lite';

interface Props extends PropsWithChildren {
	to: string;
}

export function ChatItem({ to, children }: Props) {
	return (
		<li className='[&:not(:last-child)]:mb-3'>
			<NavLink
				to={to}
				className={({ isActive }) =>
					clsx(
						isActive && 'bg-graylight',
						'block w-full px-2 py-1 rounded-md hover:bg-graylight transition-colors duration-150 ease-in-out'
					)
				}
			>
				{children}
			</NavLink>
		</li>
	);
}
