import { BrowserRouter, Route, Routes } from 'react-router';

import { ProtectedRoutes } from './ProtectedRoutes';
import { RedirectAuthUser } from './RedirectAuthUser';
import { pageConfig } from '../config/page.config';
import { Login } from '../../pages/Login';
import { Register } from '../../pages/Register';
import { AuthLayout } from '../layouts/AuthLayout/AuthLayout';
import { MainLayout } from '../layouts/MainLayout/MainLayout';
import { FriendsLayout } from '../layouts/FriendsLayout/FriendsLayout';
import { FriendsAll } from '../../pages/FriendsAll';
import { FriendsOnline } from '../../pages/FriendsOnline';
import { FriendsRequests } from '../../pages/FriendsRequests';

export function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<ProtectedRoutes />}>
					<Route element={<MainLayout />}>
						<Route path={pageConfig.home} element={<FriendsLayout />}>
							<Route index element={<FriendsAll />} />
							<Route
								path={pageConfig.friendsOnline}
								element={<FriendsOnline />}
							/>
							<Route
								path={pageConfig.friendsRequests}
								element={<FriendsRequests />}
							/>
						</Route>
					</Route>
				</Route>

				<Route element={<RedirectAuthUser />}>
					<Route element={<AuthLayout />}>
						<Route path={pageConfig.login} element={<Login />} />
						<Route path={pageConfig.register} element={<Register />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
