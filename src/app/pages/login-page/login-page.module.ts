import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// COMPONENTS
import { LoginPageComponent } from './components/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

// MODULES
import { LoginPageRoutingModule } from './login-page-routing.module';
import { FormModule } from '../../form/form.module';

@NgModule({
    declarations: [
        LoginPageComponent,
        LoginFormComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        LoginPageRoutingModule,
        FormModule,
    ]
})
export class LoginPageModule { }
