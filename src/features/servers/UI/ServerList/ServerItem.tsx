import { NavLink, NavLinkProps } from 'react-router';

import styles from './ServerList.module.css';
import clsx from 'clsx/lite';

interface Props extends NavLinkProps {
	logo: string | undefined;
	name: string;
	className?: string;
	to: string;
}

export function ServerItem({
	logo,
	name,
	to,
	className = '',
	...props
}: Props) {
	return (
		<NavLink
			to={to}
			className={clsx(
				'bg-graylight flex-shrink-0',
				styles.serverItem,
				className
			)}
			{...props}
		>
			<img src={logo || undefined} alt='' className='block max-w-full h-full' />
		</NavLink>
	);
}
