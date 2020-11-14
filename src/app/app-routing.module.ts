import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    CoursesPageComponent
} from './pages/courses-page/components/courses-page.component';
import {
    LoginPageComponent
} from './pages/login-page/components/login-page.component';

export const ROUTES: Routes = [
    { path: '', component: CoursesPageComponent },
    { path: 'login', component: LoginPageComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [ RouterModule.forRoot(ROUTES) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
