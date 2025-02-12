import { X } from 'lucide-react';
import { Button } from '../../../../../shared/UI/buttons/Button';
import { useDeleteRequestMutation } from '../../../friendsApiSlice';

interface Props {
	id: number;
}

export function DeclineButton({ id }: Props) {
	const [declineRequest, { isLoading }] = useDeleteRequestMutation();

	function onDeclineClick() {
		declineRequest(id);
	}

	return (
		<Button
			variant='darkTransparent'
			onClick={onDeclineClick}
			disabled={isLoading}
		>
			<X size={25} />
		</Button>
	);
}
