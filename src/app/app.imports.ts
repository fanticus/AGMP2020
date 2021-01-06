import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppRoutingModule, ROUTES } from './app-routing.module';

import { RootStoreModule } from './root-store/root-store.module';
import { CommonsModule } from './commons/commons.module';
import { ModalsModule } from './modals/modals.module';
import { AuthModule } from './auth/auth.module';
import { FormModule } from './form/form.module';

export const APP_IMPORTS = [
    RouterTestingModule.withRoutes(ROUTES),
    HttpClientTestingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RootStoreModule,
    CommonsModule,
    ModalsModule,
    AuthModule,
    FormModule,
];
