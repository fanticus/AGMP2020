import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    LoginPageComponent
} from './pages/login-page/components/login-page.component';
import { CoursePageComponent } from './pages/course-page/components/course-page.component';
import { CoursesPageComponent } from './pages/courses-page/components/courses-page.component';

const COURSES_ROUTES: Routes = [
    { path: '', component: CoursesPageComponent },
    { path: 'new', component: CoursePageComponent },
    { path: ':id', component: CoursePageComponent },
];

export const ROUTES: Routes = [
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent },
    { path: 'courses', children: COURSES_ROUTES }
];

@NgModule({
    imports: [ RouterModule.forRoot(ROUTES) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
