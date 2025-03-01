import { UserCard } from '../../../../shared/Components/NameCard/UserCard';
import { TopBar } from '../../../../shared/Components/TopBar/TopBar';
import { IUser } from '../../../auth';

interface Props extends IUser {}

export function ChatBar(props: Props) {
	return (
		<TopBar>
			<UserCard {...props} />
		</TopBar>
	);
}
