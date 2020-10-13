import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesPageComponent } from './components/courses-page.component';

@NgModule({
    declarations: [
        CoursesPageComponent,
    ],
    imports: [ CommonModule ],
    exports: [ CoursesPageComponent ]
})
export class CoursesPageModule { }
