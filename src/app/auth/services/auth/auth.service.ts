import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';

import { IAppState } from '../../../root-store/app.state';
import { LoginUser, LogoutUser, UserInfo } from '../../user-store/user.actions';

import { IApiLogin, IApiToken } from '../../interfaces/ApiAuthInterface';

@Injectable()
export class AuthService {

    public isAuthenticated$ = new BehaviorSubject<boolean>( false );

    private tokenValue: string;

    constructor(
        private store: Store<IAppState>
    ) {
        this.tokenValue = localStorage.getItem('token');
        this.isAuthenticated$.next( !!this.tokenValue );
    }

    get token(): string {
        return this.tokenValue;
    }

    public login( login: string, password: string ): void {
        const loginData: IApiLogin = { login, password };
        this.store.dispatch( LoginUser({ loginData }) );
    }

    public userInfo(): void {
        const tokenData: IApiToken = { token: localStorage.getItem('token') };
        this.store.dispatch( UserInfo({ tokenData }) );
    }

    public logout(): void {
        this.store.dispatch( LogoutUser() );
    }
}
