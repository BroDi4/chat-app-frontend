import { IUser } from '../auth';

export interface IChat {
	id: number;
	name: string | null;
	isGroup: boolean;
	interlocutor: IUser | null;
}

export interface IMember extends IUser {
	role: 'admin' | 'member';
	joinedAt: string;
}

export interface IMessage {
	id: number;
	content?: string;
	imageUrl?: string;
	createdAt: string;
	changed: boolean;
	isSeen: boolean;
	chatId: number;
	userId: number;
	user: IUser;
}

export interface IChatWithMessages extends IChat {
	members: IMember[];
	messages: IMessage[];
}
