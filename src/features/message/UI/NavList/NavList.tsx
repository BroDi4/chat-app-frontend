import { Users } from 'lucide-react';
import { NavButton } from './NavButton';
import { pageConfig } from '../../../../app/config/page.config';

export function NavList() {
	return (
		<div className='p-2 mb-2'>
			<NavButton to={pageConfig.friends} text='Друзья' Icon={Users}></NavButton>
		</div>
	);
}
