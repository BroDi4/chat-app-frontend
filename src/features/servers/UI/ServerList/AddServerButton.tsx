import clsx from 'clsx/lite';

import styles from './ServerList.module.css';
import { Plus } from 'lucide-react';

interface Props {}

export function AddServerButton({}: Props) {
	return (
		<button
			className={clsx(
				styles.serverItem,
				'bg-graylight flex items-center justify-center group hover:bg-purple transition-colors duration-300 ease-in-out'
			)}
		>
			<Plus size={30} className='stroke-purple group-hover:stroke-white' />
		</button>
	);
}
