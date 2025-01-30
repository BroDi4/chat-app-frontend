import { IUser } from '../../../features/auth';
import { IStatusProps, Status } from './Status/Status';

export interface IUserCardProps extends IStatusProps, IUser {}

export function UserCard({
	avatarUrl,
	status,
	nickName,
	uniqueName,
}: IUserCardProps) {
	return (
		<div className='flex items-center group'>
			<div className='relative w-7 h-7 bg-graylight mr-2 rounded-full flex-shrink-0'>
				<img
					src={avatarUrl || undefined}
					alt=''
					className='max-w-full h-full rounded-full'
				/>
				<Status status={status} />
			</div>

			<div className='flex flex-col justify-center leading-[18px] overflow-hidden  transition-colors duration-200 text-grayultralight group-hover:text-white text-left'>
				<span className='block text-[15px]'>{nickName}</span>
				<span className='block text-[12px]'>{uniqueName}</span>
			</div>
		</div>
	);
}
