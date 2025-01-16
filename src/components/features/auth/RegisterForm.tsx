import { SubmitHandler, useForm } from 'react-hook-form';
import { MainHeading } from '../../UI/headings/MainHeading';
import { FormInput } from '../../UI/inputs/FormInput';
import { Button } from '../../UI/buttons/Button';
import { LinkButton } from '../../UI/buttons/LinkButton';
import { pageConfig } from '../../../config/page.config';
import { IRegisterData } from './auth.type';
import { useRegisterMutation } from './authApiSlice';

export function RegisterForm() {
	const { register, handleSubmit } = useForm<IRegisterData>();
	const [registerUser, { isLoading, error }] = useRegisterMutation();

	const onFormSubmit: SubmitHandler<IRegisterData> = async function (data) {
		const { confirm, ...formData } = data;
		try {
			const userData = await registerUser(formData);
			console.log(userData);
		} catch (err) {
			console.log(error);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit(onFormSubmit)} className='mb-3'>
				<MainHeading
					title='Register account'
					size='md'
					className='text-center mb-4'
				/>
				<div className='mb-4'>
					<FormInput
						className='mb-2;'
						label='Email'
						placeholder='Enter your email'
						{...register('email')}
					/>
					<FormInput
						className='mb-2;'
						label='Name'
						placeholder='Enter your public name'
						{...register('uniqueName')}
					/>
					<FormInput
						className='mb-2;'
						label='Password'
						placeholder='Enter your password'
						{...register('password')}
					/>
					<FormInput
						className='mb-2;'
						label='Confirm password'
						placeholder='Confirm your password'
						{...register('confirm')}
					/>
				</div>
				<Button>{isLoading ? 'Loading' : 'Register'}</Button>
			</form>
			<div className='text-center text-sm'>
				You have an account?{' '}
				<LinkButton to={pageConfig.auth}>Try to log in</LinkButton>
			</div>
		</>
	);
}
