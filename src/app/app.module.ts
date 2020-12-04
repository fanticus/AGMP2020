import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { CommonsModule } from './commons/commons.module';
import { ModalsModule } from './modals/modals.module';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { CoursePageModule } from './pages/course-page/course-page.module';
import { CoursesPageModule } from './pages/courses-page/courses-page.module';
import {
    NotFoundPageModule
} from './pages/not-found-page/not-found-page.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonsModule,
        ModalsModule,
        LoginPageModule,
        CoursePageModule,
        CoursesPageModule,
        NotFoundPageModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
