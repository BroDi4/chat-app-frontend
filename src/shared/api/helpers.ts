import { ApiErrorResponse } from './api.types';

export function isApiErrorResponse<T = string>(
	error: unknown
): error is ApiErrorResponse<T> {
	return (
		typeof error === 'object' &&
		error != null &&
		'status' in error &&
		typeof (error as any).status === 'number'
	);
}
