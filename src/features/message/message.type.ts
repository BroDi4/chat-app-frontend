import { IUser } from '../auth';

export interface IChat {
	id: number;
	name: string | null;
	isGroup: boolean;
	interlocutor: IUser | null;
}
