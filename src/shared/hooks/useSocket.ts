import { useEffect } from 'react';
import { socket } from '../api/socket';
import { useRefreshAuthMutation } from '../../features/auth';

export function useSocket() {
	const [refreshToken] = useRefreshAuthMutation();

	useEffect(() => {
		socket.connect();

		socket.on('connect', () => {
			console.log(socket.connected);
		});

		socket.on('connect_error', async err => {
			if (err.message === 'Authentication error') {
				const { accessToken } = await refreshToken(null).unwrap();
				socket.auth = { token: accessToken };
				socket.connect();
			}
		});
		return () => {
			socket.off('connect');
			socket.off('connect_error');
			socket.disconnect();
		};
	}, []);
}
