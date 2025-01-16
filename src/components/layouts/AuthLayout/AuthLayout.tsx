import { Outlet } from 'react-router';
import { AuthTemplate } from './AuthTemplate';

export function AuthLayout() {
	return (
		<AuthTemplate>
			<Outlet />
		</AuthTemplate>
	);
}
