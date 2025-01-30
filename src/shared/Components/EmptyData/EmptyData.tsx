import clsx from 'clsx/lite';

interface Props {
	className?: string;
}

export function EmptyData({ className }: Props) {
	return (
		<div
			className={clsx(
				'mt-4 flex-1 flex items-center justify-center text-3xl text-grayultralight',
				className
			)}
		>
			Увы, но здесь ничего нет
		</div>
	);
}
