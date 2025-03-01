import { Link } from 'react-router';
import { UserCard } from '../../../../../shared/Components/NameCard/UserCard';
import { IFriendRequest } from '../../../friends.types';
import { AcceptButton } from './AcceptButton';
import { DeclineButton } from './DeclineButton';

interface Props extends IFriendRequest {}

export function RequestItem({ sentBy, createdAt, id }: Props) {
	return (
		<div className='flex items-center justify-between gap-5 rounded-md hover:bg-graylight py-2 px-3 text-xs'>
			<Link to={'/'}>
				<UserCard {...sentBy} />
			</Link>

			<div className='flex items-center gap-3'>
				<div className='text-grayultralight'>
					Отправлен <span className='font-bold'>{createdAt}</span>
				</div>
				<AcceptButton id={id} />
				<DeclineButton id={id} />
			</div>
		</div>
	);
}
