import { EmptyData } from '../../../../../shared/Components/EmptyData/EmptyData';
import { HelperHeading } from '../../../../../shared/UI/headings/HelperHeading/HelperHeading';
import { TFriendsList } from '../../../friends.types';
import { FriendsItem } from './FriendsItem';
import { ContentLoader } from '../../../../../shared/UI/loaders/ContentLoader';

interface Props {
	list: TFriendsList | undefined;
	isLoading: boolean;
}

export function FriendsList({ list, isLoading }: Props) {
	if (isLoading) return <ContentLoader />;

	if (!list || list.length === 0) return <EmptyData />;

	return (
		<div className='p-3 flex flex-col h-full'>
			<HelperHeading size='sm' title={`Друзья - ${list.length}`} />

			<div className='mt-4 flex-1 overflow-y-auto'>
				{list.map(obj => (
					<FriendsItem key={obj.nickName} {...obj} to={'/'} />
				))}
			</div>
		</div>
	);
}
