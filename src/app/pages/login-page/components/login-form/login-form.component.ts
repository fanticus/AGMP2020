import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AuthForm } from '../../../../form/models/AuthForm';

import { AuthService } from '../../../../auth/services/auth/auth.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

    public form: FormGroup;

    constructor(
        private authSrv: AuthService
    ) { }

    ngOnInit(): void {
        this.createForm();
    }

    public handleLogin(): void {
        this.authSrv.login( this.form.value );
    }

    private createForm(): void {
        this.form = AuthForm.createFormObject();
    }
}
