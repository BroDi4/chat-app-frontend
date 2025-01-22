import { IStatusProps, Status } from './Status/Status';

export interface IUserCardProps extends IStatusProps {
	avatarUrl: string;
	name: string;
}

export function UserCard({ avatarUrl, name, status }: IUserCardProps) {
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
			<span className='inline-block text-[16px] overflow-hidden  transition-colors duration-200 text-grayultralight group-hover:text-white'>
				{name}
			</span>
		</div>
	);
}
