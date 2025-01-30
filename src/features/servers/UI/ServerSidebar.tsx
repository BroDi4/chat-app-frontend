import { ServerList } from './ServerList/ServerList';

export function ServerSidebar() {
	return (
		<aside className={'p-2 bg-gray flex flex-col h-screen overflow-hidden'}>
			<ServerList />
		</aside>
	);
}
