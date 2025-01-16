import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

export function AuthTemplate({ children }: Props) {
	return (
		<div className='flex items-center justify-center h-screen'>
			<div className='bg-gray w-full max-w-[500px] rounded-md shadow-lg  border-purple py-6 px-5'>
				{children}
			</div>
		</div>
	);
}
