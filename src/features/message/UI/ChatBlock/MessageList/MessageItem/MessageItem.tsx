import { format, parseISO } from 'date-fns';
import { Avatar } from '../../../../../../shared/Components/Avatar/Avatar';
import { IMessage } from '../../../../message.type';
import { ru } from 'date-fns/locale';

interface Props extends IMessage {}

export function MessageItem({
	content,
	changed,
	isSeen,
	user: sender,
	createdAt,
}: Props) {
	return (
		<div className='grid grid-cols-[40px_1fr] w-1/2 gap-2 text-grayultralight  mb-4'>
			<div className='flex items-end py-1'>
				<Avatar avatarUrl={sender.avatarUrl} />
			</div>
			<div>
				<div className='text-purple text-sm font-semibold mb-1 pl-1 tracking-wide'>
					{sender.nickName}
				</div>
				<div className='bg-grayalpha p-2 rounded-md text-xs'>
					<div className='mb-2'>{content}</div>
					<div className='text-[10px] flex items-center gap-2'>
						<span>{format(parseISO(createdAt), 'HH:mm', { locale: ru })}</span>
						{changed && <span className='text-purple'>Изменено</span>}
					</div>
				</div>
			</div>
		</div>
	);
}
