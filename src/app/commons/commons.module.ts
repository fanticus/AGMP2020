import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';

import { UserComponent } from './components/header/user/user.component';

import { CopyRightsComponent } from './components/footer/copy-rights/copy-rights.component';

import { FormFieldComponent } from './components/form/form-field/form-field.component';
import { FormComponent } from './components/form/form.component';

import { LoaderComponent } from './components/loader/loader.component';

// PIPES
import { DurationPipe } from './pipes/duration/duration.pipe';

// MODULES
import { AppRoutingModule } from '../app-routing.module';

const COMPONENTS = [
    FooterComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    FormComponent,
    FormFieldComponent,
    LoaderComponent,
    DurationPipe,
];

@NgModule({
    declarations: [
        ...COMPONENTS,
        LogoComponent,
        UserComponent,
        CopyRightsComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
    ],
    exports: [ ...COMPONENTS ]
})
export class CommonsModule { }
