import { Outlet } from 'react-router';
import { AuthTemplate } from './AuthTemplate';
import { Container } from '../../UI/containers/Container';

export function AuthLayout() {
	return (
		<Container>
			<AuthTemplate>
				<Outlet />
			</AuthTemplate>
		</Container>
	);
}
