import clsx from 'clsx/lite';
import { LucideIcon } from 'lucide-react';
import { NavLink, NavLinkProps } from 'react-router';

interface Props extends NavLinkProps {
	to: string;
	text: string;
	Icon: LucideIcon;
}

export function NavButton({ to, text, Icon, ...props }: Props) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				clsx(
					'flex items-center group hover:bg-graylight p-2 rounded-md transition-colors duration-150 ease-in',
					isActive && 'bg-graylight p-2 rounded-md'
				)
			}
			{...props}
		>
			<div className='w-3 mr-6'>
				<Icon
					size={20}
					className='stroke-grayultralight group-hover:stroke-white transition-colors duration-150 ease-in'
				/>
			</div>
			<span className='block text-sm text-grayultralight group-hover:text-white transition-colors duration-150 ease-in'>
				{text}
			</span>
		</NavLink>
	);
}
