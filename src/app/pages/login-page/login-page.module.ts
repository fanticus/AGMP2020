import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// COMPONENTS
import { LoginPageComponent } from './components/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

import { CommonsModule } from '../../commons/commons.module';

@NgModule({
    declarations: [
        LoginPageComponent,
        LoginFormComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        CommonsModule,
    ],
    exports: [ LoginPageComponent ]
})
export class LoginPageModule { }
