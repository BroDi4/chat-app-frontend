import { Outlet } from 'react-router';
import { useAuthUserQuery } from '../../features/auth';
import { FullScreenLoader } from '../../shared/UI/loaders/FullScreenLoader';

export function CheckAuth() {
	const { isLoading } = useAuthUserQuery(null, {
		refetchOnMountOrArgChange: true,
	});

	if (isLoading) {
		return <FullScreenLoader />;
	}

	return <Outlet />;
}
