import { FieldValues, Path, UseFormSetError } from 'react-hook-form';
import { isApiErrorResponse } from '../../../api/helpers';
import { toast } from 'react-toastify';

export function authErrorHandler<T extends FieldValues>(
	err: unknown,
	setError: UseFormSetError<T>,
	errMsg: string = 'Произошла непредвиденная ошибка'
) {
	if (isApiErrorResponse<keyof T>(err)) {
		const errorsArray = err.data.errors;
		if (errorsArray.length !== 0) {
			errorsArray.forEach(obj => {
				setError(obj.path as Path<T>, { type: obj.type, message: obj.msg });
			});
		} else {
			toast.error(err.data.message);
		}
	} else {
		toast.error(errMsg);
	}
}
