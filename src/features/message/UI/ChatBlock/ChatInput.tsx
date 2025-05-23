import { useState } from 'react';
import { SearchInput } from '../../../../shared/UI/inputs/SearchInput';
import { Button } from '../../../../shared/UI/buttons/Button';

interface Props {
	onSend: (content: string) => void;
}

export function ChatInput({ onSend }: Props) {
	const [message, setMessage] = useState('');

	const handleSend = () => {
		if (message.trim()) {
			onSend(message);
			setMessage('');
		}
	};

	return (
		<div className='flex px-1 py-2 gap-2'>
			<SearchInput
				className='flex-1'
				value={message}
				setValue={setMessage}
				onKeyDown={e => e.key === 'Enter' && handleSend()}
			/>
			<Button onClick={handleSend}>Отправить</Button>
		</div>
	);
}
