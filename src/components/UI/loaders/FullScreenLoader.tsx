export function FullScreenLoader() {
	return (
		<div className='fixed flex items-center justify-center bg-gray z-50 w-full h-screen'>
			<div
				className='block h-24 w-24 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
				role='status'
			></div>
		</div>
	);
}
