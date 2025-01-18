import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

export function Container({ children }: Props) {
	return <div className='block w-full px-1'>{children}</div>;
}
