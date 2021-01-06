import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// SERVICES
import { CoursesService } from './services/courses/courses.service';
import { CoursesApiService } from './services/courses-api/courses-api.service';
import { CoursesUtilitiesService } from './services/courses-utilities/courses-utilities.service';

// PIPES
import { DurationPipe } from './pipes/duration/duration.pipe';

// MODULES
import { CoursesStoreModule } from './courses-store/courses-store.module';

const COMPONENTS = [
    DurationPipe,
];

@NgModule({
    declarations: [ ...COMPONENTS ],
    imports: [
        CommonModule,
        CoursesStoreModule,
    ],
    providers: [
        CoursesService,
        CoursesApiService,
        CoursesUtilitiesService,
    ],
    exports: [ ...COMPONENTS ]
})
export class CoursesModule { }
