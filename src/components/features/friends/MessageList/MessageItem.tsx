import { NavLink } from 'react-router';
import { IUserCardProps, UserCard } from '../../../UI/common/UserCard/UserCard';

interface Props extends IUserCardProps {
	to: string;
}

export function MessageItem({ avatarUrl, name, status, to }: Props) {
	return (
		<li className='[&:not(:last-child)]:mb-3 hover:bg-graylight px-2 py-1 rounded-md transition-colors duration-150 ease-in-out'>
			<NavLink to={to}>
				<UserCard avatarUrl={avatarUrl} name={name} status={status} />
			</NavLink>
		</li>
	);
}
