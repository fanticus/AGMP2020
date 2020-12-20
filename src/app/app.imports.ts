import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ROUTES } from './app-routing.module';

import { RootStoreModule } from './root-store/root-store.module';
import { CommonsModule } from './commons/commons.module';
import { ModalsModule } from './modals/modals.module';
import { CoursesPageModule } from './pages/courses-page/courses-page.module';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { CoursePageModule } from './pages/course-page/course-page.module';
import {
    NotFoundPageModule
} from './pages/not-found-page/not-found-page.module';

export const APP_IMPORTS = [
    RouterTestingModule.withRoutes(ROUTES),
    FormsModule,
    HttpClientTestingModule,
    RootStoreModule,
    CommonsModule,
    ModalsModule,
    CoursesPageModule,
    LoginPageModule,
    CoursePageModule,
    NotFoundPageModule,
];
