import { IUserState } from '../commons/auth/user-store/user.state';

export interface IAppState {
    readonly user: IUserState | null;
}

export const initialAppState: IAppState = {
    user: null
};
