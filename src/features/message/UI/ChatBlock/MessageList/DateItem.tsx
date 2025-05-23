interface Props {
	date: string;
}

export function DateItem({ date }: Props) {
	return (
		<div className='flex justify-center'>
			<div className='inline-block text-center py-1 px-2 rounded-md bg-grayalpha text-purple font-bold text-xs'>
				{date}
			</div>
		</div>
	);
}
