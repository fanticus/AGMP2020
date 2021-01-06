import { createReducer, on, Action } from '@ngrx/store';

import { IUserState, initialUserState } from './user.state';
import { LoginUserSuccess, LogoutUser, UserInfoSuccess } from './user.actions';

const reducer = createReducer(
    initialUserState,
    on( LoginUserSuccess, ( state, { user } ) => {
        return {
            ...state,
            user: { ...user }
        };
    }),
    on( LogoutUser, state => {
        return { ...state, user: null };
    }),
    on( UserInfoSuccess, ( state, { user } ) => {
        return {
            ...state,
            user: { ...user }
        };
    }),
);

export function userReducer( state: IUserState, action: Action ) {
    return reducer( state, action );
}
