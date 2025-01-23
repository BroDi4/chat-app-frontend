import { Outlet } from 'react-router';
import { AuthTemplate } from '../../../features/auth/UI/AuthTemplate';
import { Container } from '../../../shared/UI/containers/Container';

export function AuthLayout() {
	return (
		<Container>
			<AuthTemplate>
				<Outlet />
			</AuthTemplate>
		</Container>
	);
}
