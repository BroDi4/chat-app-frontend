import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { Providers } from './providers/Providers';
import { ReactRouter } from './routes/ReactRouter';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Providers>
			<ReactRouter />
		</Providers>
	</StrictMode>
);
