import { PropsWithChildren } from 'react';
import { NavigateTab } from './NavigateTab';

interface Props extends PropsWithChildren {}

export function AuthTemplate({ children }: Props) {
	return (
		<div className='flex items-center justify-center h-screen'>
			<div className='bg-gray w-full max-w-[500px] rounded-md shadow-lg  border-purple py-2 sm:py-6 px-3 sm:px-5'>
				<NavigateTab />
				{children}
			</div>
		</div>
	);
}
