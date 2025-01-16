import { Outlet } from 'react-router';
import { useAuthUserQuery } from '../components/features/auth/authApiSlice';
import { FullScreenLoader } from '../components/UI/loaders/FullScreenLoader';

export function CheckAuth() {
	const { isLoading } = useAuthUserQuery(null, {
		refetchOnMountOrArgChange: true,
	});

	if (isLoading) {
		return <FullScreenLoader />;
	}

	return <Outlet />;
}
