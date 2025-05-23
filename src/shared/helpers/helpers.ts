import { format, isToday, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

export function scrollBottom(ref: React.RefObject<HTMLDivElement>) {
	ref.current?.scrollTo({
		top: ref.current?.scrollHeight,
		left: 0,
		behavior: 'smooth',
	});
}

export function calcCurrDate(date: string) {
	return isToday(date)
		? 'Сегодня'
		: format(parseISO(date), 'd MMMM', { locale: ru });
}
