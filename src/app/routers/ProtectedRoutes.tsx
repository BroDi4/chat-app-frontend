import { Navigate, Outlet } from 'react-router';
import { pageConfig } from '../config/page.config';
import { useAppSelector } from '../../shared/hooks/redux';
import { useAuthUserQuery } from '../../features/auth';
import { useSocket } from '../../shared/hooks/useSocket';
import { FullScreenLoader } from '../../shared/UI/loaders/FullScreenLoader';

export function ProtectedRoutes() {
	const { isLoading } = useAuthUserQuery(null, {
		refetchOnMountOrArgChange: true,
	});

	useSocket();

	const user = useAppSelector(state => state.auth.user);

	if (isLoading) {
		return <FullScreenLoader />;
	}

	return user ? <Outlet /> : <Navigate to={pageConfig.login} />;
}
