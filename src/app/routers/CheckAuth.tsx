import { Outlet } from 'react-router';
import { useAuthUserQuery } from '../../features/auth';
import { FullScreenLoader } from '../../shared/UI/loaders/FullScreenLoader';
import { useSocket } from '../../shared/hooks/useSocket';

export function CheckAuth() {
	const { isLoading } = useAuthUserQuery(null, {
		refetchOnMountOrArgChange: true,
	});

	useSocket();

	//todo: add loading for socket
	if (isLoading) {
		return <FullScreenLoader />;
	}

	return <Outlet />;
}
