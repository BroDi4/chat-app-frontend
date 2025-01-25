import { Users } from 'lucide-react';
import { NavButton } from './NavButton';

export function NavList() {
	return (
		<div className='p-2'>
			<NavButton to='/' text='Друзья' Icon={Users}></NavButton>
		</div>
	);
}
