import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoursesPageComponent } from './components/courses-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CourseItemComponent } from './components/course-item/course-item.component';

import {
    CourseHighlightDirective
} from './directives/course-highlight/course-highlight.directive';

import {
    DurationPipe
} from './pipes/duration/duration.pipe';

@NgModule({
    declarations: [
        CoursesPageComponent,
        SearchBarComponent,
        CourseItemComponent,
        CourseHighlightDirective,
        DurationPipe,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [ CoursesPageComponent ]
})
export class CoursesPageModule { }
