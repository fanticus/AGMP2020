import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { CoursePageComponent } from './components/course-page.component';
import { CourseFormComponent } from './components/course-form/course-form.component';

// MODULES
import { CoursePageRoutingModule } from './course-page-routing.module';
import { CoursesModule } from '../../courses/courses.module';
import { FormModule } from '../../../../form/form.module';

@NgModule({
    declarations: [
        CoursePageComponent,
        CourseFormComponent,
    ],
    imports: [
        CommonModule,
        CoursePageRoutingModule,
        CoursesModule,
        FormModule,
    ]
})
export class CoursePageModule { }
