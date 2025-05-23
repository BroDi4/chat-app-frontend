import { IApiErrorResponse, IFormErrorResponse } from './api.types';

function checkError(error: unknown) {
	return (
		typeof error === 'object' &&
		error != null &&
		'status' in error &&
		typeof (error as any).status === 'number'
	);
}

export function isFormErrorResponse<T = string>(
	error: unknown
): error is IFormErrorResponse<T> {
	return checkError(error);
}

export function isApiResponse(error: unknown): error is IApiErrorResponse {
	return checkError(error);
}

export function transformDateInLocal(date: string, local = 'RU') {
	return new Date(date).toLocaleDateString(local);
}

export function formatDate(date: string) {
	const d = new Date(date);
	const formatedDate = d.toISOString().split('T')[0];
	const formatedTime = d.toTimeString().split(' ')[0];
	return `${formatedDate} ${formatedTime}`;
}
