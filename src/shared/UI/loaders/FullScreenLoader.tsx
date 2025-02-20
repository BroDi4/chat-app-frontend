import { SpinnerLoader } from './SpinnerLoader';

export function FullScreenLoader() {
	return (
		<div className='fixed flex items-center justify-center bg-graylight z-100 w-full h-screen left-0 top-0'>
			<SpinnerLoader size='lg' />
		</div>
	);
}
