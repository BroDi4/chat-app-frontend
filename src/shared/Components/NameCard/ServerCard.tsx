import { IChat } from '../../../features/message/message.type';
import { Avatar } from '../Avatar/Avatar';
import styles from './Card.module.css';

interface Props extends IChat {}

export function ServerCard({ name }: Props) {
	return (
		<div className={styles.card}>
			<Avatar avatarUrl={''} isGroup />

			<div className={styles.cardInner}>
				<span className={styles.textMd}>{name}</span>
			</div>
		</div>
	);
}
