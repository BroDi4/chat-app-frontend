export type TUserStatus = 'online' | 'offline' | 'idle' | 'notdisturb';

export interface IUser {
	id: number;
	email: string;
	uniqueName: string;
	nickName: string;
	avatarUrl: string | null;
	online: Boolean;
	status: TUserStatus;
	createdAt: Date;
}

export interface IUserDto extends IUser {
	accessToken: string;
}

export interface IAuthState {
	user: IUser | null;
	token: string | null;
}

export interface IRegisterDto {
	email: string;
	uniqueName: string;
	password: string;
}

export interface IRegisterData extends IRegisterDto {
	confirm: string;
}

export interface ILoginData {
	email: string;
	password: string;
}
