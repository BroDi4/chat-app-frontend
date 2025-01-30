import clsx from 'clsx/lite';

interface Props {
	className?: string;
}

export function UserCardLoader({ className }: Props) {
	return (
		<div
			className={clsx(
				className,
				'animate-pulse w-24 rounded-md mr-2 flex items-center justify-between p-1 shrink-0'
			)}
		>
			<span className='w-7 h-7 bg-graylight rounded-full mr-2'></span>
			<div className='flex-1'>
				<span className='block w-full h-[7px] rounded-full bg-graylight mb-2'></span>
				<span className='block w-full h-[7px] rounded-full bg-graylight'></span>
			</div>
		</div>
	);
}
