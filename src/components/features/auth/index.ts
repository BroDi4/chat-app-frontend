export { RegisterForm } from './RegisterForm.tsx';
export { LoginForm } from './LoginForm.tsx';

export {
	useLoginMutation,
	useRegisterMutation,
	useAuthUserQuery,
} from './authApiSlice';

export { setAuth, logout } from './authSlice';

export type { IUser } from './auth.type';
