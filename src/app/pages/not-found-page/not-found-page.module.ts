import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { NotFoundPageComponent } from './components/not-found-page.component';

// MODULES
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
    declarations: [
        NotFoundPageComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
    ],
    exports: [ NotFoundPageComponent ]
})
export class NotFoundPageModule { }
