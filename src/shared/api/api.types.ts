export interface ApiValidationError<T> {
	type: string;
	value: string;
	msg: string;
	path: T;
	location: string;
}

export interface ApiErrorResponse<T> {
	status: number;
	data: { message: string; errors: ApiValidationError<T>[] };
}
