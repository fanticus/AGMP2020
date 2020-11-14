import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ROUTES } from './app-routing.module';

import { CommonsModule } from './commons/commons.module';
import { ModalsModule } from './modals/modals.module';
import { CoursesPageModule } from './pages/courses-page/courses-page.module';

export const APP_IMPORTS = [
    RouterTestingModule.withRoutes(ROUTES),
    FormsModule,
    HttpClientTestingModule,
    CommonsModule,
    ModalsModule,
    CoursesPageModule,
];
