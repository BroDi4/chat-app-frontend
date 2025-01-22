import clsx from 'clsx/lite';
import { IHeadingProps } from '../headings.types';

import styles from './HelperHeading.module.css';

export function HelperHeading({
	size,
	className,
	title,
	...props
}: IHeadingProps) {
	switch (size) {
		case 'lg':
			return (
				<h1 className={clsx('text-md', styles.title, className)} {...props}>
					{title}
				</h1>
			);
		case 'md':
			return (
				<h2 className={clsx('text-sm', styles.title, className)} {...props}>
					{title}
				</h2>
			);
		case 'sm':
			return (
				<h3 className={clsx('text-xs', styles.title, className)} {...props}>
					{title}
				</h3>
			);
	}
}
