interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error?: string;
	className?: string;
	placeholder?: string;
}

export function FormInput({
	label,
	error,
	placeholder,
	className,
	...register
}: Props) {
	return (
		<div>
			<label
				className='inline-block text-sm mb-1 text-white pl-2'
				htmlFor={register.name}
			>
				{label}
			</label>
			<input
				id={register.name}
				placeholder={placeholder}
				className={`w-full rounded-md p-2 text-xs bg-graylight focus:outline-2 focus:outline-purple focus:outline ${className}`}
				{...register}
				type='text'
			/>
			<span className='text-xs text-red-500'>{error}</span>
		</div>
	);
}
