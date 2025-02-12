export interface IApiValidationError<T> {
	type: string;
	value: string;
	msg: string;
	path: T;
	location: string;
}

export interface IFormErrorResponse<T> {
	status: number;
	data: { message: string; errors: IApiValidationError<T>[] };
}

export interface IApiErrorResponse {
	status: number;
	data: { message: string };
}

export interface IApiMessageResponse {
	message: string;
}
