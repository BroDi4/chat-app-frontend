import clsx from 'clsx/lite';
import { UserCard } from '../NameCard/UserCard';
import { Headphones, Mic, Settings } from 'lucide-react';
import { Link } from 'react-router';

import styles from './Profile.module.css';
import { useAppSelector } from '../../hooks/redux';
import { UserCardLoader } from '../../UI/loaders/UserCardLoader';

export function Profile() {
	const user = useAppSelector(state => state.auth.user);

	return (
		<div className='p-2 bg-gray flex'>
			{user ? (
				<button className={clsx('flex-1 mr-2', styles.bgHover)}>
					<UserCard {...user} withUniqueName />
				</button>
			) : (
				<UserCardLoader />
			)}

			<div className='flex items-center justify-between w-1/3'>
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
