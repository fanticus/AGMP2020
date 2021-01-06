import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesListPageComponent } from './components/courses-list-page.component';

const ROUTES: Routes = [
    { path: '', component: CoursesListPageComponent },
];

@NgModule({
    imports: [ RouterModule.forChild( ROUTES ) ],
    exports: [ RouterModule ]
})
export class CoursesListPageRoutingModule {}
