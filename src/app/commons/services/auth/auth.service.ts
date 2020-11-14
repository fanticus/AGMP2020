import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private userLogin: string = null;
    private userPassword: string = null;

    constructor(
        private router: Router
    ) {
        this.userLogin = localStorage.getItem('userLogin');
    }

    get userInfo(): string {
        return this.userLogin;
    }

    get isAuthenticated(): boolean {
        return !!this.userLogin;
    }

    login( login: string, password: string ): void {
        this.userLogin = login;
        this.userPassword = password;
        localStorage.setItem('userLogin', login);
        console.log('login');
        this.router.navigate(['']);
    }

    logout(): void {
        this.userLogin = null;
        this.userPassword = null;
        localStorage.removeItem('userLogin');
        console.log('logout');
        this.router.navigate(['login']);
    }
}
