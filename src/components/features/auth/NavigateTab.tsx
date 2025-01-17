import { NavLink } from 'react-router';
import { pageConfig } from '../../../config/page.config';

interface Props {}

export function NavigateTab({}: Props) {
	const links = [
		{ text: 'Вход', to: pageConfig.login },
		{ text: 'Регистрация', to: pageConfig.register },
	];

	const className = `w-1/2 inline-block text-center py-2 transition-all duration-300 from-blue to-purple bg-[position:_0%_0%] bg-[size:_200%] hover:bg-[position:_right]`;

	const left = 'rounded-l-md';
	const right = 'rounded-r-md';

	return (
		<div className='w-full flex mb-4 '>
			{links.map((obj, i) => (
				<NavLink
					key={obj.to}
					to={obj.to}
					className={({ isActive }) =>
						isActive
							? `${i === 0 ? left : right} ${className} bg-gradient-to-r`
							: className
					}
				>
					{obj.text}
				</NavLink>
			))}
		</div>
	);
}
