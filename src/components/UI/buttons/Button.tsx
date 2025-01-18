import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import styles from './Buttons.module.css';

interface Props
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		PropsWithChildren {
	className?: string;
}

export function Button({ children, className, ...props }: Props) {
	return (
		<button className={`${styles.button} ${className}`} {...props}>
			{children}
		</button>
	);
}
