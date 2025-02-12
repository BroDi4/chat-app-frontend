import { Check } from 'lucide-react';
import { Button } from '../../../../../shared/UI/buttons/Button';
import { useAcceptRequestMutation } from '../../../friendsApiSlice';

interface Props {
	id: number;
}

export function AcceptButton({ id }: Props) {
	const [acceptRequest, { isLoading }] = useAcceptRequestMutation();

	function onAcceptClick() {
		acceptRequest(id);
	}

	return (
		<Button onClick={onAcceptClick} disabled={isLoading}>
			<Check size={25} />
		</Button>
	);
}
