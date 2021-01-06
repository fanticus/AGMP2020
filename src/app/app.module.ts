import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { APP_INTERCEPTORS } from './app.interceptors';

import { AppRoutingModule } from './app-routing.module';
import { RootStoreModule } from './root-store/root-store.module';
import { CommonsModule } from './commons/commons.module';
import { ModalsModule } from './modals/modals.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        RootStoreModule,
        CommonsModule,
        ModalsModule,
        AuthModule,
    ],
    providers: [
        APP_INTERCEPTORS,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
