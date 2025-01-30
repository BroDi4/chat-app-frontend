import { FieldValues, Path, UseFormSetError } from 'react-hook-form';
import { toast } from 'react-toastify';
import { isApiResponse, isFormErrorResponse } from '../../shared/api/helpers';

const defaultErrMsg = 'Произошла непредвиденная ошибка';

export function formErrorHandler<T extends FieldValues>(
	err: unknown,
	setError: UseFormSetError<T>,
	errMsg: string = defaultErrMsg
) {
	if (isFormErrorResponse<keyof T>(err)) {
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

export function apiErrorHandler(err: unknown, errMsg: string = defaultErrMsg) {
	if (isApiResponse(err)) {
		toast.error(err.data.message);
	} else {
		toast.error(errMsg);
	}
}
