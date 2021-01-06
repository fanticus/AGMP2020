import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { NotFoundPageComponent } from './components/not-found-page.component';

// MODULES
import { NotFoundPageRoutingModule } from './not-found-page-routing.module';

@NgModule({
    declarations: [
        NotFoundPageComponent,
    ],
    imports: [
        CommonModule,
        NotFoundPageRoutingModule,
    ]
})
export class NotFoundPageModule { }
