import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// GUARDS
import { AuthGuard } from './auth/guards/auth/auth.guard';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    {
        path: 'login',
        loadChildren: () =>
            import('./pages/login-page/login-page.module')
                .then(m => m.LoginPageModule),
        canLoad: [ AuthGuard ],
        canActivate: [ AuthGuard ],
    },
    {
        path: 'courses',
        loadChildren: () =>
            import('./pages/courses-page/courses-page.module')
                .then(m => m.CoursesPageModule),
        canLoad: [ AuthGuard ],
        canActivate: [ AuthGuard ],
        canActivateChild: [ AuthGuard ],
    },
    {
        path: '404',
        loadChildren: () =>
            import('./pages/not-found-page/not-found-page.module')
                .then(m => m.NotFoundPageModule),
    },
    { path: '**',  redirectTo: '404' },
];

@NgModule({
    imports: [
      RouterModule.forRoot( ROUTES, {
          preloadingStrategy: PreloadAllModules
      })
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
