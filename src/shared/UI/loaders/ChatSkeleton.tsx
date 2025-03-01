import clsx from 'clsx/lite';

interface Props {
	className?: string;
}

export function ChatSkeleton({ className }: Props) {
	return (
		<div
			className={clsx(
				className,
				'animate-pulse w-full h-8 rounded-md mr-2 flex items-center justify-between p-1 shrink-0 bg-graylight'
			)}
		></div>
	);
}
