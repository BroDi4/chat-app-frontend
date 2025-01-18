import { Link, NavLink } from 'react-router';

import styles from './Buttons.module.css';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
	type: 'link' | 'navlink';
	to: string;
	className?: string;
}

export function LinkButton({ type, to, className = '', children }: Props) {
	switch (type) {
		case 'link':
			return (
				<Link to={to} className={`${styles.button} ${className}`}>
					{children}
				</Link>
			);
		case 'navlink':
			return (
				<NavLink
					to={to}
					className={({ isActive }) =>
						isActive
							? `${styles.button} ${className}`
							: `${styles.button} !bg-transparent ${className}`
					}
				>
					{children}
				</NavLink>
			);
	}
}
