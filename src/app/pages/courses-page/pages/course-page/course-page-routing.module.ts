import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursePageComponent } from './components/course-page.component';

const ROUTES: Routes = [
    { path: '', component: CoursePageComponent },
];

@NgModule({
    imports: [ RouterModule.forChild( ROUTES ) ],
    exports: [ RouterModule ]
})
export class CoursePageRoutingModule {}
