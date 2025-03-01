import { IUser } from '../../../features/auth';
import { Avatar } from '../Avatar/Avatar';
import { IStatusProps, Status } from './Status/Status';

export interface IUserCardProps extends IStatusProps, IUser {
	withUniqueName?: boolean;
}

import styles from './Card.module.css';

export function UserCard({
	avatarUrl,
	status,
	nickName,
	uniqueName,
	online,
	withUniqueName = false,
}: IUserCardProps) {
	return (
		<div className={styles.card}>
			<Avatar avatarUrl={avatarUrl}>
				{online ? <Status status={status} /> : <Status status={'offline'} />}
			</Avatar>

			<div className={styles.cardInner}>
				<span className={styles.textMd}>{nickName}</span>
				{withUniqueName && <span className={styles.textSm}>{uniqueName}</span>}
			</div>
		</div>
	);
}
