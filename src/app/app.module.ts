import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { CommonsModule } from './commons/commons.module';
import { ModalsModule } from './modals/modals.module';
import {
    CoursesPageModule
} from './pages/courses-page/courses-page.module';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { CoursePageModule } from './pages/course-page/course-page.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonsModule,
        ModalsModule,
        CoursesPageModule,
        LoginPageModule,
        CoursePageModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
