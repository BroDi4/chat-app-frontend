import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

interface props extends PropsWithChildren {}

export function Providers({ children }: props) {
	return (
		<>
			<Provider store={store}>{children}</Provider>
		</>
	);
}
