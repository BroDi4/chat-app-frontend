import { IChat } from '../../../message.type';
import { ServerCard } from '../../../../../shared/Components/NameCard/ServerCard';
import { pageConfig } from '../../../../../app/config/page.config';
import { ChatItem } from './Chatitem';

interface Props extends IChat {}

export function ServerChat(props: Props) {
	return (
		<ChatItem to={pageConfig.chat({ id: props.id.toString() })}>
			<ServerCard {...props} />
		</ChatItem>
	);
}
