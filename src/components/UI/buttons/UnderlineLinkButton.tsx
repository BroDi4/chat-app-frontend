import { PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router';
import styles from './Buttons.module.css';

interface Props extends PropsWithChildren, LinkProps {
	to: string;
	className?: string;
}

export function UnderlineLinkButton({
	children,
	to,
	className,
	...props
}: Props) {
	return (
		<Link
			to={to}
			{...props}
			className={`${styles.underlineButton} ${className}`}
		>
			{children}
		</Link>
	);
}
