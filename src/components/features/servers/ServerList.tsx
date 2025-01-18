import { AddServerButton } from './AddServerButton';
import { ServerItem } from './ServerItem';

interface Props {}

const servers = [
	{ id: 1, logo: '', name: 'server', to: '/' },
	{ id: 2, logo: '', name: 'server', to: '/' },
	{ id: 3, logo: '', name: 'server', to: '/' },
];

export function ServerList({}: Props) {
	return (
		<div className='flex flex-col items-center'>
			<ServerItem logo='/nash2.jpg' name='name' to='/' />
			<span className='block w-2/3 h-[2px] bg-purple mb-4'></span>
			{servers.map(obj => (
				<ServerItem key={obj.id} logo={obj.logo} name={obj.name} to={obj.to} />
			))}
			<AddServerButton />
		</div>
	);
}
