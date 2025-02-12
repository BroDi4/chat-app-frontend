import { X } from 'lucide-react';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
	isOpen: boolean;
	onClose: () => void;
}

export function Modal({ isOpen, children, onClose }: Props) {
	if (!isOpen) return;

	return (
		<div className='absolute inset-0 bg-black/40 z-50 flex items-center justify-center'>
			<button className='absolute right-2 top-2 p-1' onClick={onClose}>
				<X size={50} className='stroke-white' />
			</button>
			<div className='w-1/3 bg-graylight rounded-md py-5 px-4'>{children}</div>
		</div>
	);
}
