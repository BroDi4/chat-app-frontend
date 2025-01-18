import { Navigate, Outlet } from 'react-router';
import { pageConfig } from '../config/page.config';
import { useAppSelector } from '../hooks/redux';

export function ProtectedRoutes() {
	const user = useAppSelector(state => state.auth.user);

	return user ? <Outlet /> : <Navigate to={pageConfig.login} />;
}
