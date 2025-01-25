import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
	className?: string;
}

export function TopBar({ children, className }: Props) {
	return (
		<div
			className={clsx(
				'w-full py-2 px-3 bg-graylight shadow-md text-xs text-grayultralight flex items-center',
				className
			)}
		>
			{children}
		</div>
	);
}
