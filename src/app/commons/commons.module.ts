import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumpsComponent } from './components/breadcrumps/breadcrumps.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
    declarations: [
        FooterComponent,
        BreadcrumpsComponent,
        HeaderComponent,
        LogoComponent,
    ],
    imports: [ CommonModule ],
    exports: [
        FooterComponent,
        BreadcrumpsComponent,
        HeaderComponent,
    ]
})
export class CommonsModule { }
