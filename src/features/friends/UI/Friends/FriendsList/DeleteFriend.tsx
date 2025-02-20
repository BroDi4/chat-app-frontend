import { X } from 'lucide-react';
import { useDeleteFriendMutation } from '../../../friendsApiSlice';
import { toast } from 'react-toastify';

interface Props {
	id: number;
}

export function DeleteFriend({ id }: Props) {
	const [deleteFriend] = useDeleteFriendMutation();

	function onDeleteFriend() {
		deleteFriend(id);
		toast.success('Вы успешно удалили друга');
	}

	return (
		<button onClick={onDeleteFriend}>
			<X className='stroke-grayultralight hover:stroke-white' size={30} />
		</button>
	);
}
