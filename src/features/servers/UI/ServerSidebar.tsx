import { ServerList } from './ServerList/ServerList';

export function ServerSidebar() {
	return (
		<div className={'p-2 bg-gray flex flex-col h-screen overflow-hidden'}>
			<ServerList />
		</div>
	);
}
