import { BrowserRouter, Route, Routes } from 'react-router';

import { ProtectedRoutes } from './ProtectedRoutes';
import { RedirectAuthUser } from './RedirectAuthUser';
import { CheckAuth } from './CheckAuth';
import { pageConfig } from '../config/page.config';
import { Login } from '../../pages/Login';
import { Register } from '../../pages/Register';
import { AuthLayout } from '../layouts/AuthLayout/AuthLayout';
import { MainLayout } from '../layouts/MainLayout/MainLayout';
import { Friends } from '../../pages/Friends';

export function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<CheckAuth />}>
					<Route element={<ProtectedRoutes />}>
						<Route path={pageConfig.home} element={<MainLayout />}>
							<Route index element={<Friends />} />
						</Route>
					</Route>

					<Route element={<RedirectAuthUser />}>
						<Route element={<AuthLayout />}>
							<Route path={pageConfig.login} element={<Login />} />
							<Route path={pageConfig.register} element={<Register />} />
						</Route>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
