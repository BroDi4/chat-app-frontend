import { SubmitHandler, useForm } from 'react-hook-form';
import { FormInput } from '../../../shared/UI/inputs/FormInput';
import { useLoginMutation } from '../authApiSlice';
import { ILoginData } from '../auth.type';
import { setAuth } from '../authSlice';
import { authErrorHandler } from '../auth.service';
import { ConfirmButton } from './ConfirmButton';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../../shared/hooks/redux';

export function LoginForm() {
	const dispatch = useAppDispatch();

	const [loginUser, { isLoading }] = useLoginMutation();

	const {
		register,
		handleSubmit,
		setError,
		clearErrors,
		reset,
		formState: { errors, isValid },
	} = useForm<ILoginData>({ mode: 'onTouched' });

	const onFormSubmit: SubmitHandler<ILoginData> = async function (data) {
		try {
			const res = await loginUser(data).unwrap();
			clearErrors();
			reset();
			dispatch(setAuth(res));
			toast.success('Вы успешно авторизовались!', { autoClose: 3000 });
		} catch (err) {
			authErrorHandler<ILoginData>(err, setError);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit(onFormSubmit)} className='mb-3'>
				<div className='mb-6'>
					<FormInput
						className='mb-4'
						label='Почта'
						placeholder='Введите почту'
						error={errors.email?.message}
						{...register('email', { required: 'Введите почту' })}
					/>
					<FormInput
						className='mb-4'
						label='Пароль'
						placeholder='Введите пароль'
						error={errors.password?.message}
						{...register('password', { required: 'Введите пароль' })}
					/>
				</div>
				<ConfirmButton isLoading={isLoading} isValid={isValid}>
					Войти
				</ConfirmButton>
			</form>
		</>
	);
}
