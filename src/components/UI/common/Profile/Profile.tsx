import clsx from 'clsx/lite';
import { IMessage } from '../../../features/friends/MessageList/MessageList';
import { UserCard } from '../UserCard/UserCard';
import { Headphones, Mic, Settings } from 'lucide-react';
import { Link } from 'react-router';

import styles from './Profile.module.css';

const profile: IMessage = {
	avatarUrl: '',
	name: 'name4142144',
	status: 'online',
	to: '/',
};

export function Profile() {
	return (
		<div className='p-2 bg-gray flex'>
			<button className={clsx('w-1/2 mr-2', styles.bgHover)}>
				<UserCard {...profile} />
			</button>
			<div className='flex items-center justify-between w-1/2'>
				<button className={styles.bgHover}>
					<Mic size={20} className='stroke-grayultralight' />
				</button>
				<button className={styles.bgHover}>
					<Headphones size={20} className='stroke-grayultralight' />
				</button>
				<Link to={'/'} className={styles.bgHover}>
					<Settings size={20} className='stroke-grayultralight' />
				</Link>
			</div>
		</div>
	);
}
