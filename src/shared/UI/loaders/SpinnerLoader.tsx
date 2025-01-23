interface ISpinnerLoaderProps {
	size: 'sm' | 'md' | 'lg';
}

export function SpinnerLoader({ size }: ISpinnerLoaderProps) {
	const sizeVariants = {
		sm: 'size-6 border-[3px]',
		md: 'size-16 border-[6px]',
		lg: 'size-24  border-[8px]',
	};
	return (
		<div
			className={`animate-spin inline-block ${sizeVariants[size]} border-[3px] border-current border-t-transparent text-blue-600 rounded-full`}
			role='status'
		></div>
	);
}
