import { AddServerButton } from './AddServerButton';
import { ServerItem } from './ServerItem';

const servers = [
	{ id: 1, logo: '', name: 'server', to: '/' },
	{ id: 2, logo: '', name: 'server', to: '/' },
	{ id: 3, logo: '', name: 'server', to: '/' },
];

export function ServerList() {
	return (
		<div className='flex flex-col items-center flex-1 overflow-y-auto unvisible__scrollbar'>
			<ServerItem logo='/nash2.jpg' name='name' to='/' />
			<span className='block w-2/3 h-[2px] bg-purple mb-4 flex-shrink-0'></span>
			{servers.map(obj => (
				<ServerItem key={obj.id} logo={obj.logo} name={obj.name} to={obj.to} />
			))}
			<AddServerButton />
		</div>
	);
}
