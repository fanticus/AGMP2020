import { createSelector, createFeatureSelector } from '@ngrx/store';

export const userStateKey = 'user';

import { IAppState } from '../../../root-store/app.state';
import { IUserState } from './user.state';

export const getUserState = createFeatureSelector<IAppState, IUserState>( userStateKey );
export const getUser = createSelector(
    getUserState,
    state => state.user
);
