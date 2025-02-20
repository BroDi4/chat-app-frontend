import { Dispatch, SetStateAction } from 'react';

import { EmptyData } from '../../../../../shared/Components/EmptyData/EmptyData';
import { HelperHeading } from '../../../../../shared/UI/headings/HelperHeading/HelperHeading';
import { SearchInput } from '../../../../../shared/UI/inputs/SearchInput';
import { TFriendsList } from '../../../friends.types';
import { FriendsItem } from './FriendsItem';
import { ContentLoader } from '../../../../../shared/UI/loaders/ContentLoader';

interface Props {
	list: TFriendsList | undefined;
	search: string;
	setSearch: Dispatch<SetStateAction<string>>;
	isLoading: boolean;
}

export function FriendsList({ list, search, setSearch, isLoading }: Props) {
	if (isLoading) return <ContentLoader />;

	return (
		<div className='p-3 flex flex-col h-full'>
			<SearchInput
				icon={true}
				className='mb-4'
				placeholder='Поиск'
				value={search}
				setValue={setSearch}
			/>

			{!list || list.length === 0 ? (
				<EmptyData />
			) : (
				<>
					<HelperHeading size='sm' title={`Друзья - ${list.length}`} />

					<div className='mt-4 flex-1 overflow-y-auto'>
						{list.map(obj => (
							<FriendsItem key={obj.nickName} {...obj} to={'/'} />
						))}
					</div>
				</>
			)}
		</div>
	);
}
