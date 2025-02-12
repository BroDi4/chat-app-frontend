import { EmptyData } from '../../../../../shared/Components/EmptyData/EmptyData';
import { ContentLoader } from '../../../../../shared/UI/loaders/ContentLoader';
import { useGetRequestsQuery } from '../../../friendsApiSlice';
import { RequestItem } from './RequestItem';

interface Props {}

export function RequestsList({}: Props) {
	const { data: requests, isLoading } = useGetRequestsQuery(null);

	if (isLoading) return <ContentLoader />;

	if (!requests || requests.length === 0) return <EmptyData />;

	return (
		<div className='flex-1 overflow-y-auto p-3'>
			{requests.map(obj => (
				<RequestItem key={obj.id} {...obj} />
			))}
		</div>
	);
}
