import { createAction, props } from '@ngrx/store';

import { IUser } from '../interfaces/AuthInterface';
import { IApiLogin, IApiToken } from '../interfaces/ApiAuthInterface';

enum UserActionsTypes {
    LoginUser = '[User] Login User',
    LoginUserSuccess = '[User] Login User Success',
    LoginUserFail = '[User] Login User Fail',

    LogoutUser = '[User] Logout User',

    UserInfo = '[User] User Info',
    UserInfoSuccess = '[User] User Info Success',
    UserInfoFail = '[User] User Info Fail',
}

export const LoginUser = createAction(
    UserActionsTypes.LoginUser,
    props<{ loginData: IApiLogin }>()
);

export const LoginUserSuccess = createAction(
    UserActionsTypes.LoginUserSuccess,
    props<{ user: IUser }>()
);

export const LoginUserFail = createAction(
    UserActionsTypes.LoginUserFail
);

export const LogoutUser = createAction(
    UserActionsTypes.LogoutUser
);

export const UserInfo = createAction(
    UserActionsTypes.UserInfo,
    props<{ tokenData: IApiToken }>()
);

export const UserInfoSuccess = createAction(
    UserActionsTypes.UserInfoSuccess,
    props<{ user: IUser }>()
);

export const UserInfoFail = createAction(
    UserActionsTypes.UserInfoFail
);
