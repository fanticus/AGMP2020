import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// COMPONENTS
import { CoursesPageComponent } from './components/courses-page.component';
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
import { CommonsModule } from '../../commons/commons.module';
import { AppRoutingModule } from '../../app-routing.module';
import { CoursesStoreModule } from './courses-store/courses-store.module';

@NgModule({
    declarations: [
        CoursesPageComponent,
        SearchBarComponent,
        CourseItemComponent,
        CourseHighlightDirective,
        OrderByPipe,
        FilterPipe,
    ],
    imports: [
        CommonModule,
        FormsModule,
        CommonsModule,
        AppRoutingModule,
        CoursesStoreModule,
    ],
    exports: [ CoursesPageComponent ]
})
export class CoursesPageModule { }
