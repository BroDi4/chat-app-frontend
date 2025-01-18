import { NavLink, NavLinkProps } from 'react-router';

import styles from './Servers.module.css';
import clsx from 'clsx/lite';

interface Props extends NavLinkProps {
	logo: string | undefined;
	name: string;
	to: string;
}

export function ServerItem({ logo, name, to, ...props }: Props) {
	return (
		<NavLink
			to={to}
			className={clsx('bg-graylight', styles.serverItem)}
			{...props}
		>
			<img src={logo || undefined} alt='' className='block max-w-full h-full' />
		</NavLink>
	);
}
