import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { CommonsModule } from './commons/commons.module';
import {
    CoursesPageModule
} from './pages/courses-page/courses-page.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonsModule,
        CoursesPageModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
