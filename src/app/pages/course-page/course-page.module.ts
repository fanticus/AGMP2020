import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// COMPONENTS
import { CoursePageComponent } from './components/course-page.component';
import { CourseFormComponent } from './components/course-form/course-form.component';

// MODULES
import { CommonsModule } from '../../commons/commons.module';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
    declarations: [
        CoursePageComponent,
        CourseFormComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        CommonsModule,
        AppRoutingModule,
    ],
    exports: [ CoursePageComponent ]
})
export class CoursePageModule { }
