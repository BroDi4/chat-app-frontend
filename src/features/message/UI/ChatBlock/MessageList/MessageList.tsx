import { IMessage } from '../../../message.type';
import { MessageItem } from './MessageItem/MessageItem';

import { DateItem } from './DateItem';
import { useEffect, useRef } from 'react';
import {
	calcCurrDate,
	scrollBottom,
} from '../../../../../shared/helpers/helpers';

interface Props {
	messages: IMessage[];
}

export function MessageList({ messages }: Props) {
	const groupedMessages: { [key: string]: IMessage[] } = {};
	const listRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		scrollBottom(listRef);
	}, [messages]);

	messages.forEach(msg => {
		const msgDate = calcCurrDate(msg.createdAt);
		if (!groupedMessages[msgDate]) {
			groupedMessages[msgDate] = [];
		}
		groupedMessages[msgDate].push(msg);
	});

	return (
		<div ref={listRef} className='p-3 overflow-auto'>
			{Object.entries(groupedMessages).map(([date, msgs]) => {
				return (
					<div key={date}>
						<DateItem date={date} />
						{msgs.map(msg => (
							<MessageItem key={msg.id} {...msg} />
						))}
					</div>
				);
			})}
		</div>
	);
}
