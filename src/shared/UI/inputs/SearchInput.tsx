import clsx from 'clsx';
import { Search } from 'lucide-react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	icon?: boolean;
	placeholder?: string;
	className?: string;
}

export function SearchInput({
	icon = false,
	placeholder,
	className,
	...props
}: Props) {
	return (
		<div
			className={clsx(
				'flex items-center justify-between px-5 py-2 bg-gray rounded-md  outline-2 focus-within:outline focus-within:outline-purple',
				className
			)}
		>
			<input
				type='text'
				className='flex-1 bg-transparent outline-none text-xs text-grayultralight '
				placeholder={placeholder}
				{...props}
			/>
			{icon && <Search className='stroke-grayultralight' />}
		</div>
	);
}
