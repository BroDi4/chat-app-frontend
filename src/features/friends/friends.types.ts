import { IUser } from '../auth';

export type TFriendsList = IUser[];

export interface IFriendRequest {
	sentBy: IUser;
	sentToId: number;
	sentById: number;
	id: number;
	createdAt: Date;
}
