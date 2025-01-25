import { NavLink } from 'react-router';
import {
	IUserCardProps,
	UserCard,
} from '../../../../shared/Components/UserCard/UserCard';
import { MessageCircleMore } from 'lucide-react';

interface Props extends IUserCardProps {
	to: string;
}

export function FriendsItem({ to, ...props }: Props) {
	return (
		<NavLink
			to={to}
			className='flex w-full items-center justify-between px-1 py-3 hover:bg-grayalpha rounded-md relative after:absolute after:top-0 after:h-[1px] after:bg-grayultralight after:left-0 after:w-full'
		>
			<UserCard {...props} />
			<div className='mr-3 p-1'>
				<MessageCircleMore className='stroke-grayultralight' />
			</div>
		</NavLink>
	);
}
