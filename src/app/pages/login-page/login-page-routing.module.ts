import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './components/login-page.component';

const ROUTES: Routes = [
    { path: '', component: LoginPageComponent },
];

@NgModule({
    imports: [ RouterModule.forChild( ROUTES ) ],
    exports: [ RouterModule ]
})
export class LoginPageRoutingModule {}
