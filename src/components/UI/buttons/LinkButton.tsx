import { PropsWithChildren } from 'react';

import { Link, LinkProps } from 'react-router';

interface Props extends PropsWithChildren, LinkProps {
	to: string;
	className?: string;
}

export function LinkButton({ children, to, className, ...props }: Props) {
	return (
		<Link
			to={to}
			{...props}
			className={`relative after:absolute after:top-[110%] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-tr after:from-blue after:to-purple hover:after:w-full after:transition-all after:duration-300 after:ease-in-out ${className}`}
		>
			{children}
		</Link>
	);
}
