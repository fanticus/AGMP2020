import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// COMPONENTS
import { CoursesListPageComponent } from './components/courses-list-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CourseItemComponent } from './components/course-item/course-item.component';

// DIRECTIVES
import {
    CourseHighlightDirective
} from './directives/course-highlight/course-highlight.directive';

// PIPES
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';

// MODULES
import { CoursesListPageRoutingModule } from './courses-list-page-routing.module';
import { CoursesModule } from '../../courses/courses.module';

@NgModule({
    declarations: [
        CoursesListPageComponent,
        SearchBarComponent,
        CourseItemComponent,
        CourseHighlightDirective,
        OrderByPipe,
        FilterPipe,
    ],
    imports: [
        CommonModule,
        FormsModule,
        CoursesListPageRoutingModule,
        CoursesModule,
    ]
})
export class CoursesListPageModule { }
