import { UserPlus } from 'lucide-react';
import { Button } from '../../../../../shared/UI/buttons/Button';
import { Modal } from '../../../../../shared/UI/modal/Modal';
import { useState } from 'react';
import { SearchInput } from '../../../../../shared/UI/inputs/SearchInput';
import { MainHeading } from '../../../../../shared/UI/headings/MainHeading/MainHeading';
import { useSendRequestMutation } from '../../../friendsApiSlice';
import { apiErrorHandler } from '../../../../../shared/api/exceptions';
import { toast } from 'react-toastify';

export function AddFriendButton() {
	const [isOpen, setIsOpen] = useState(false);
	const [search, setSearch] = useState('');

	const [sendRequest, { isLoading }] = useSendRequestMutation();

	function onClose() {
		setIsOpen(false);
	}

	async function addFriendHandler() {
		try {
			const res = await sendRequest(search).unwrap();
			onClose();
			toast.success(res.message);
		} catch (err) {
			apiErrorHandler(err);
		}
	}

	return (
		<>
			<Button className='text-white' size='md' onClick={() => setIsOpen(true)}>
				<span>Добавить друга</span>
				<UserPlus size={22} />
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<MainHeading title='Добавить друга' size='sm' className='text-center' />
				<SearchInput
					value={search}
					setValue={setSearch}
					icon
					className='my-4'
				/>
				<Button
					className='text-white py-2'
					size='full'
					onClick={addFriendHandler}
					disabled={!search || isLoading}
				>
					Добавить
				</Button>
			</Modal>
		</>
	);
}
