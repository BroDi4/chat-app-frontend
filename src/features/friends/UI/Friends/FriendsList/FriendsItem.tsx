import { MessageCircleMore } from 'lucide-react';
import { NavLink } from 'react-router';

import {
	IUserCardProps,
	UserCard,
} from '../../../../../shared/Components/UserCard/UserCard';
import { DeleteFriend } from './DeleteFriend';

interface Props extends IUserCardProps {
	to: string;
}

export function FriendsItem({ to, ...props }: Props) {
	return (
		<div className='flex w-full items-center justify-between cursor-pointer px-1 py-3 hover:bg-grayalpha rounded-md relative after:absolute after:top-0 after:h-[1px] after:bg-grayultralight after:left-0 after:w-full'>
			<NavLink to={to} className={'flex-1'}>
				<UserCard {...props} />
			</NavLink>
			<div className='mr-3 p-1 flex items-center gap-2'>
				<MessageCircleMore className='stroke-grayultralight ' />
				<DeleteFriend id={props.id} />
			</div>
		</div>
	);
}
