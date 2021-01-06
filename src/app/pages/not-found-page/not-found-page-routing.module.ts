import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundPageComponent } from './components/not-found-page.component';

const ROUTES: Routes = [
    { path: '', component: NotFoundPageComponent },
];

@NgModule({
    imports: [ RouterModule.forChild( ROUTES ) ],
    exports: [ RouterModule ]
})
export class NotFoundPageRoutingModule {}
