import { useEffect } from 'react';
import { socket } from '../api/socket';
import { setOnline, useRefreshAuthMutation } from '../../features/auth';
import { useAppDispatch } from './redux';

export function useSocket() {
	const [refreshToken] = useRefreshAuthMutation();
	const dispatch = useAppDispatch();

	useEffect(() => {
		socket.connect();

		socket.on('connect', () => {
			dispatch(setOnline(true));
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
