import { Outlet } from 'react-router';
import { ServerSidebar } from '../../features/servers';
import { ProfileSidebar } from '../../features/friends';

export function MainLayout() {
	return (
		<div className='grid grid-cols-[70px_250px_1fr]'>
			<ServerSidebar />
			<ProfileSidebar />
			<main className='h-screen'>
				<Outlet />
			</main>
		</div>
	);
}
