import { SpinnerLoader } from './SpinnerLoader';

export function FullScreenLoader() {
	return (
		<div className='fixed flex items-center justify-center bg-gray z-50 w-full h-screen'>
			<SpinnerLoader size='lg' />
		</div>
	);
}
