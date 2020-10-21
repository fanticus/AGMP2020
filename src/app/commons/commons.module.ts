import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumpsComponent } from './components/breadcrumps/breadcrumps.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';

import { UserComponent } from './components/header/user/user.component';

import { CopyRightsComponent } from './components/footer/copy-rights/copy-rights.component';

@NgModule({
    declarations: [
        FooterComponent,
        BreadcrumpsComponent,
        HeaderComponent,
        LogoComponent,
        UserComponent,
        CopyRightsComponent,
    ],
    imports: [ CommonModule ],
    exports: [
        FooterComponent,
        BreadcrumpsComponent,
        HeaderComponent,
    ]
})
export class CommonsModule { }
