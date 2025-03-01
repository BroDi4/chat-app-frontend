import { Outlet } from 'react-router';
import { ChatSidebar } from '../../../features/message';

export function MainLayout() {
	return (
		<div className='grid grid-cols-[300px_1fr]'>
			<ChatSidebar />
			<main className='h-screen'>
				<Outlet />
			</main>
		</div>
	);
}
