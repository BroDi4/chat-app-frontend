import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface Props
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		PropsWithChildren {
	className?: string;
}

export function Button({ children, className, ...props }: Props) {
	return (
		<button
			className={`inline-block text-center bg-gradient-to-r from-blue to-purple rounded-md py-1 px-5 w-full hover:bg-purple transition-all duration-300 ease-in-out  ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
