import { Navigate, Outlet } from 'react-router';
import { pageConfig } from '../config/page.config';
import { useAppSelector } from '../../shared/hooks/redux';

export function RedirectAuthUser() {
	const user = useAppSelector(state => state.auth.user);

	if (user) {
		return <Navigate to={pageConfig.home} />;
	}
	return <Outlet />;
}
