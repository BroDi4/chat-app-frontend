import { UserCard } from '../../../../../shared/Components/NameCard/UserCard';
import { pageConfig } from '../../../../../app/config/page.config';
import { ChatItem } from './ChatItem';
import { IChat } from '../../../message.type';

interface Props extends IChat {}

export function PrivateChat(props: Props) {
	return (
		<ChatItem to={pageConfig.chat({ id: props.id.toString() })}>
			{props.interlocutor && <UserCard {...props.interlocutor} />}
		</ChatItem>
	);
}
