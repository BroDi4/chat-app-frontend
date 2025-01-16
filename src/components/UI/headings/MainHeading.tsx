interface Props {
	className?: string;
	size: 'sm' | 'md' | 'lg';
	title: string;
}

export function MainHeading({ size, className, title }: Props) {
	switch (size) {
		case 'lg':
			return <h1 className={`font-bold text-5xl ${className}`}>{title}</h1>;
		case 'md':
			return <h2 className={`font-bold text-3xl ${className}`}>{title}</h2>;
		case 'sm':
			return <h3 className={`font-bold text-2xl ${className}`}>{title}</h3>;
	}
}
