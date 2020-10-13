import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CommonsModule } from './commons/commons.module';
import { CoursesPageModule } from './pages/courses-page/courses-page.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        CommonsModule,
        CoursesPageModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
