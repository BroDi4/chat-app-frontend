import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
	avatarUrl: string | null;
	isGroup?: boolean;
}

export function Avatar({ avatarUrl, isGroup = false, children }: Props) {
	return (
		<div className='relative w-7 h-7 bg-graylight mr-2 rounded-full flex-shrink-0'>
			<img
				src={avatarUrl || isGroup ? '/user.png' : '/user2.jpg'}
				alt=''
				className='max-w-full h-full rounded-full'
			/>
			{children}
		</div>
	);
}
