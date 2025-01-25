import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx/lite';

import styles from './Buttons.module.css';

interface Props
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		PropsWithChildren {
	className?: string;
	size?: 'sm' | 'md' | 'lg' | 'full';
}

export function Button({ children, className, size = 'sm', ...props }: Props) {
	const variants = {
		sm: 'px-1 py-1',
		md: 'px-3 py-1',
		lg: 'px-3 py-2',
		full: 'w-full py-1',
	};

	return (
		<button
			className={clsx(styles.button, className, variants[size])}
			{...props}
		>
			{children}
		</button>
	);
}
