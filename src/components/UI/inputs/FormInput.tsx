interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	type?: React.HTMLInputTypeAttribute;
	error?: string;
	className?: string;
	placeholder?: string;
}

export function FormInput({
	label,
	error,
	type = 'text',
	placeholder,
	className,
	...register
}: Props) {
	return (
		<div className={`${className} relative`}>
			<label
				className='inline-block text-sm mb-1 text-white pl-2'
				htmlFor={register.name}
			>
				{label}
			</label>
			<input
				id={register.name}
				placeholder={placeholder}
				className={`w-full rounded-md p-2 text-xs bg-graylight focus:outline-2 focus:outline-purple focus:outline`}
				{...register}
				type={type}
			/>
			<span className='text-[13px] text-red-500 absolute bottom-[-30%] left-0 pl-2'>
				{error}
			</span>
		</div>
	);
}
