import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const COURSES_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./pages/courses-list-page/courses-list-page.module')
                .then(m => m.CoursesListPageModule),
    },
    {
        path: 'new',
        loadChildren: () =>
            import('./pages/course-page/course-page.module')
                .then(m => m.CoursePageModule),
    },
    {
        path: ':id',
        loadChildren: () =>
            import('./pages/course-page/course-page.module')
                .then(m => m.CoursePageModule),
    },
];

@NgModule({
    imports: [ RouterModule.forChild( COURSES_ROUTES ) ],
    exports: [ RouterModule ]
})
export class CoursesPageRoutingModule {}
