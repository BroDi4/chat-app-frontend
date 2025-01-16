import { Outlet } from 'react-router';
import { ServerSidebar } from './ServerSidebar';
import { ProfileSidebar } from './ProfileSidebar';

export function MainLayout() {
	return (
		<div className='grid grid-cols-[80px_250px_1fr]'>
			<ServerSidebar className='border border-solid border-purple' />
			<ProfileSidebar className='border border-solid border-purple' />
			<main className='border border-solid border-purple '>
				<Outlet />
			</main>
		</div>
	);
}
