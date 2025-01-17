import { SubmitHandler, useForm } from 'react-hook-form';
import { FormInput } from '../../UI/inputs/FormInput';
import { IRegisterData } from './auth.type';
import { useRegisterMutation } from './authApiSlice';
import { authErrorHandler } from './auth.service';
import { useAppDispatch } from '../../../hooks/redux';
import { setAuth } from './authSlice';
import { ConfirmButton } from './ConfirmButton';
import { toast } from 'react-toastify';

export function RegisterForm() {
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		setError,
		watch,
		clearErrors,
		reset,
		trigger,
		formState: { errors, isValid },
	} = useForm<IRegisterData>({ mode: 'onTouched' });

	const [registerUser, { isLoading }] = useRegisterMutation();

	const onFormSubmit: SubmitHandler<IRegisterData> = async function (data) {
		try {
			const { confirm, ...formData } = data;
			const res = await registerUser(formData).unwrap();
			clearErrors();
			reset();
			dispatch(setAuth(res));
			toast.success('Вы успешно авторизовались!', { autoClose: 3000 });
		} catch (err) {
			authErrorHandler<IRegisterData>(err, setError);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit(onFormSubmit)} className='mb-3'>
				<div className='mb-6'>
					<FormInput
						className='mb-4'
						label='Почта'
						type='email'
						placeholder='Введите почту'
						{...register('email', { required: 'Введите почту' })}
						error={errors.email?.message}
					/>
					<FormInput
						className='mb-4'
						label='Имя'
						placeholder='Введите уникальное имя аккаунта'
						{...register('uniqueName', { required: 'Введите имя' })}
						error={errors.uniqueName?.message}
					/>
					<FormInput
						className='mb-4'
						label='Пароль'
						type='password'
						placeholder='Введите пароль'
						{...register('password', {
							required: 'Введите пароль',
							onChange: async () => await trigger('confirm'),
						})}
						error={errors.password?.message}
					/>
					<FormInput
						className='mb-4'
						label='Подтвердите пароль'
						type='password'
						placeholder='Введите пароль'
						{...register('confirm', {
							required: 'Подтвердите пароль',
							validate: v => v === watch('password') || 'Пароли не совпадают',
						})}
						error={errors.confirm?.message}
					/>
				</div>
				<ConfirmButton isLoading={isLoading} isValid={isValid}>
					Зарегистрироваться
				</ConfirmButton>
			</form>
		</>
	);
}
