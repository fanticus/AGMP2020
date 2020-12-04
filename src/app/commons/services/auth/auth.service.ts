import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { IApiLogin, IApiUser } from './../../interfaces/ApiDataInterface';

import { AuthApiService } from './../auth-api/auth-api.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private tokenValue: string;

    constructor(
        private router: Router,
        private authApiSrv: AuthApiService,
    ) {
        this.tokenValue = localStorage.getItem('token');
    }

    get isAuthenticated(): boolean {
        return !!this.token;
    }

    get token(): string {
        return this.tokenValue;
    }

    public login( login: string, password: string ): void {
        const authData: IApiLogin = { login, password };
        this.authApiSrv.login( authData ).subscribe( user => {
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
        this.router.navigate( [ 'login' ] );
    }
}
