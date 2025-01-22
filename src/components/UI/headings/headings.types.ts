export interface IHeadingProps
	extends React.HTMLAttributes<HTMLHeadingElement> {
	size: 'lg' | 'md' | 'sm';
	className?: string;
	title: string;
}
