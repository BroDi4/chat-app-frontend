import clsx from 'clsx/lite';
import { IHeadingProps } from '../headings.types';

import styles from './MainHeading.module.css';

export function MainHeading({
	size,
	className,
	title,
	...props
}: IHeadingProps) {
	switch (size) {
		case 'lg':
			return (
				<h1 className={clsx('text-5xl', styles.title, className)} {...props}>
					{title}
				</h1>
			);
		case 'md':
			return (
				<h2 className={clsx('text-3xl', styles.title, className)} {...props}>
					{title}
				</h2>
			);
		case 'sm':
			return (
				<h3 className={clsx('text-2xl', styles.title, className)} {...props}>
					{title}
				</h3>
			);
	}
}
