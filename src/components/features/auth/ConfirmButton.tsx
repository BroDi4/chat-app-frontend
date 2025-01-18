import { PropsWithChildren } from 'react';
import { Button } from '../../UI/buttons/Button';
import { SpinnerLoader } from '../../UI/loaders/SpinnerLoader';

interface Props extends PropsWithChildren {
	isLoading: boolean;
	isValid: boolean;
}

export function ConfirmButton({ isLoading, isValid, children }: Props) {
	return (
		<Button disabled={!isValid || isLoading} className='w-full'>
			{isLoading ? <SpinnerLoader size='sm' /> : children}
		</Button>
	);
}
