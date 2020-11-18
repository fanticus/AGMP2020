import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    CoursesPageComponent
} from './pages/courses-page/components/courses-page.component';
import {
    LoginPageComponent
} from './pages/login-page/components/login-page.component';
import {
    CoursePageComponent
} from './pages/course-page/components/course-page.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent },
    { path: 'courses', component: CoursesPageComponent },
    { path: 'course/:id', component: CoursePageComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(ROUTES) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
