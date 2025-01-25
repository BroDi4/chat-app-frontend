import clsx from 'clsx/lite';

interface Props {
	title: string;
	val: string;
	filter: string;
	setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export function NavItem({ title, val, filter, setFilter }: Props) {
	return (
		<button
			className={clsx(
				'px-3 py-1 rounded-md',
				val === filter && 'bg-purple text-white'
			)}
			onClick={() => setFilter(val)}
		>
			{title}
		</button>
	);
}
