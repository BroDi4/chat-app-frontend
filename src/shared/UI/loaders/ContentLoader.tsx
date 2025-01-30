import clsx from 'clsx/lite';

import { SpinnerLoader } from './SpinnerLoader';

interface Props {
	className?: string;
}

export function ContentLoader({ className }: Props) {
	return (
		<div
			className={clsx(
				'flex-1 flex items-center justify-center h-full',
				className
			)}
		>
			<SpinnerLoader size={'md'} />
		</div>
	);
}
