import { Navigate, Outlet } from 'react-router';
import { useAppSelector } from '../store/redux';
import { pageConfig } from '../config/page.config';

export function RedirectAuthUser() {
	const user = useAppSelector(state => state.auth.user);

	if (user) {
		return <Navigate to={pageConfig.home} />;
	}
	return <Outlet />;
}
