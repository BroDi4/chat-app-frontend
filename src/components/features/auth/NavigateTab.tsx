import { pageConfig } from '../../../config/page.config';
import { LinkButton } from '../../UI/buttons/LinkButton';

interface Props {}

export function NavigateTab({}: Props) {
	const links = [
		{ text: 'Вход', to: pageConfig.login },
		{ text: 'Регистрация', to: pageConfig.register },
	];

	return (
		<div className='w-full block sm:flex mb-4'>
			{links.map(obj => (
				<LinkButton
					type='navlink'
					to={obj.to}
					className='mb-2 sm:mb-0 w-full sm:w-1/2'
				>
					{obj.text}
				</LinkButton>
			))}
		</div>
	);
}
