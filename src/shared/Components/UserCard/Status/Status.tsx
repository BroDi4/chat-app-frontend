import clsx from 'clsx/lite';
import styles from './Status.module.css';
import { TUserStatus } from '../../../../features/auth';

export interface IStatusProps {
	status: TUserStatus;
}

export function Status({ status }: IStatusProps) {
	switch (status) {
		case 'online':
			return <span className={clsx(styles.status, 'bg-green-400')}></span>;
		case 'offline':
			return (
				<span className={clsx(styles.status, 'bg-grayultralight')}>
					<span className='w-1 h-1 rounded-full bg-gray'></span>
				</span>
			);
		case 'idle':
			return <span className={clsx(styles.status, 'bg-yellow-400')}></span>;
		case 'notdisturb':
			return (
				<span className={clsx(styles.status, 'bg-red-500')}>
					<span className='w-1 h-[2px] bg-gray rounded-lg'></span>
				</span>
			);
	}

	return;
}
