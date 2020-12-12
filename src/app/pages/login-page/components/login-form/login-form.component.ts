import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../../commons/auth/services/auth/auth.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

    public login: string = '';
    public password: string = '';

    constructor(
        private authSrv: AuthService
    ) { }

    ngOnInit(): void {
    }

    public handleLogin(): void {
        this.authSrv.login( this.login, this.password );
    }
}
