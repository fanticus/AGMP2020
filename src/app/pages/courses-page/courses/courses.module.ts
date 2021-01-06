import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// SERVICES
import { CoursesService } from './services/courses/courses.service';
import { CoursesApiService } from './services/courses-api/courses-api.service';
import { CoursesUtilitiesService } from './services/courses-utilities/courses-utilities.service';

// MODULES
import { CoursesStoreModule } from './courses-store/courses-store.module';

@NgModule({
    imports: [
        CommonModule,
        CoursesStoreModule,
    ],
    providers: [
        CoursesService,
        CoursesApiService,
        CoursesUtilitiesService,
    ],
})
export class CoursesModule { }
