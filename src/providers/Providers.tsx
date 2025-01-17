import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { Bounce, ToastContainer } from 'react-toastify';

interface props extends PropsWithChildren {}

export function Providers({ children }: props) {
	return (
		<>
			<ToastContainer
				position='top-right'
				autoClose={7000}
				hideProgressBar={false}
				transition={Bounce}
				pauseOnHover={false}
				pauseOnFocusLoss={false}
				theme='dark'
			/>
			<Provider store={store}>{children}</Provider>
		</>
	);
}
