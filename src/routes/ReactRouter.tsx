import { BrowserRouter, Route, Routes } from 'react-router';
import { MainLayout } from '../components/layouts/MainLayout/MainLayout';
import { pageConfig } from '../config/page.config';
import { Home } from '../components/pages/Home';
import { AuthLayout } from '../components/layouts/AuthLayout/AuthLayout';
import { Login } from '../components/pages/Login';
import { Register } from '../components/pages/Register';
import { ProtectedRoutes } from './ProtectedRoutes';
import { RedirectAuthUser } from './RedirectAuthUser';
import { CheckAuth } from './CheckAuth';

export function ReactRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<CheckAuth />}>
					<Route element={<ProtectedRoutes />}>
						<Route path={pageConfig.home} element={<MainLayout />}>
							<Route index element={<Home />} />
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
