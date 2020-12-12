import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    LoginPageComponent
} from './pages/login-page/components/login-page.component';
import { CoursePageComponent } from './pages/course-page/components/course-page.component';
import { CoursesPageComponent } from './pages/courses-page/components/courses-page.component';
import {
    NotFoundPageComponent
} from './pages/not-found-page/components/not-found-page.component';

// GUARDS
import { AuthGuard } from './commons/auth/guards/auth/auth.guard';

const COURSES_ROUTES: Routes = [
    { path: '', component: CoursesPageComponent },
    { path: 'new', component: CoursePageComponent },
    { path: ':id', component: CoursePageComponent },
];

export const ROUTES: Routes = [
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    {
        path: 'login',
        component: LoginPageComponent,
        canActivate: [ AuthGuard ],
    },
    {
        path: 'courses',
        canActivate: [ AuthGuard ],
        children: COURSES_ROUTES,
    },
    { path: '404', component: NotFoundPageComponent },
    { path: '**',  redirectTo: '404' },
];

@NgModule({
    imports: [ RouterModule.forRoot(ROUTES) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
