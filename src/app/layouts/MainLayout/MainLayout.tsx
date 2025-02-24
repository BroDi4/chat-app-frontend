import { Outlet } from 'react-router';
import { ProfileSidebar } from '../../../features/friends';

export function MainLayout() {
	return (
		<div className='grid grid-cols-[300px_1fr]'>
			<ProfileSidebar />
			<main className='h-screen'>
				<Outlet />
			</main>
		</div>
	);
}
