import { pageConfig } from '../../../config/page.config';
import { LinkButton } from '../../UI/buttons/LinkButton';

interface Props {}

export function NavigateTab({}: Props) {
	const links = [
		{ text: 'Вход', to: pageConfig.login },
		{ text: 'Регистрация', to: pageConfig.register },
	];

	return (
		<div className='w-full flex mb-4 '>
			{links.map(obj => (
				<LinkButton type='navlink' to={obj.to}>
					{obj.text}
				</LinkButton>
			))}
		</div>
	);
}
