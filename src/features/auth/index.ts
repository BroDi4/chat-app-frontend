export { RegisterForm } from './UI/RegisterForm.tsx';
export { LoginForm } from './UI/LoginForm.tsx';

export {
	useLoginMutation,
	useRegisterMutation,
	useAuthUserQuery,
} from './authApiSlice';

export { setAuth, logout } from './authSlice';

export type { IUser } from './auth.type.ts';
