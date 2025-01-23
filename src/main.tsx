import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { AppRouter } from './app/routers/AppRouter';
import { Providers } from './app/providers/Providers';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Providers>
			<AppRouter />
		</Providers>
	</StrictMode>
);
