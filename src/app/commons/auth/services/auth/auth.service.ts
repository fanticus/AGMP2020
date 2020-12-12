import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { IApiLogin, IApiUser } from '../../interfaces/ApiAuthInterface';

import { AuthApiService } from '../auth-api/auth-api.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public isAuthenticated$ = new BehaviorSubject<boolean>( false );

    private tokenValue: string;

    constructor(
        private router: Router,
        private authApiSrv: AuthApiService,
    ) {
        this.tokenValue = localStorage.getItem('token');
        this.isAuthenticated$.next( !!this.tokenValue );
    }

    get token(): string {
        return this.tokenValue;
    }

    public login( login: string, password: string ): void {
        const authData: IApiLogin = { login, password };
        this.authApiSrv.login( authData ).subscribe( user => {
            this.isAuthenticated$.next( true );
            this.tokenValue = user.fakeToken;
            localStorage.setItem( 'token', user.fakeToken );
            this.router.navigate( [ 'courses' ] );
        });
    }

    public userInfo(): Observable<IApiUser> {
        return this.authApiSrv.userInfo( this.token );
    }

    public logout(): void {
        this.tokenValue = null;
        localStorage.removeItem( 'token' );
        this.isAuthenticated$.next( false );
        this.router.navigate( [ 'login' ] );
    }
}
