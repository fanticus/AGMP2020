import { IUser } from '../interfaces/AuthInterface';

export interface IUserState {
    user: IUser | null;
}

export const initialUserState: IUserState = {
    user: null
};
