import {
	IUserCardProps,
	UserCard,
} from '../../../../../shared/Components/NameCard/UserCard';
import { pageConfig } from '../../../../../app/config/page.config';
import { ChatItem } from './Chatitem';

interface Props extends IUserCardProps {}

export function PrivateChat(props: Props) {
	return (
		<ChatItem to={pageConfig.chat({ id: props.id.toString() })}>
			<UserCard {...props} />
		</ChatItem>
	);
}
