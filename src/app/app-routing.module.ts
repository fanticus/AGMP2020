import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    CoursesPageComponent
} from './pages/courses-page/components/courses-page.component';

const ROUTES: Routes = [
    { path: '', component: CoursesPageComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(ROUTES) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
