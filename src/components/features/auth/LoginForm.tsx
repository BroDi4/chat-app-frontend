import { SubmitHandler, useForm } from 'react-hook-form';
import { MainHeading } from '../../UI/headings/MainHeading';
import { FormInput } from '../../UI/inputs/FormInput';
import { Button } from '../../UI/buttons/Button';
import { pageConfig } from '../../../config/page.config';
import { LinkButton } from '../../UI/buttons/LinkButton';
import { useLoginMutation } from './authApiSlice';
import { ILoginData } from './auth.type';

export function LoginForm() {
	const { register, handleSubmit } = useForm<ILoginData>();

	const [loginUser] = useLoginMutation();

	const onFormSubmit: SubmitHandler<ILoginData> = async function (data) {
		await loginUser(data);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onFormSubmit)} className='mb-3'>
				<MainHeading title='Log in' size='md' className='text-center mb-4' />
				<div className='mb-4'>
					<FormInput
						className='mb-2'
						label='Email'
						placeholder='Enter your email'
						{...register('email')}
					/>
					<FormInput
						className='mb-2'
						label='Password'
						placeholder='Enter your password'
						{...register('password')}
					/>
				</div>
				<Button>Log in</Button>
			</form>
			<div className='text-center text-sm'>
				Don't have an account?{' '}
				<LinkButton to={pageConfig.register}>Register</LinkButton>
			</div>
		</>
	);
}
