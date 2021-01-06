import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';

import { UserComponent } from './components/header/user/user.component';

import { CopyRightsComponent } from './components/footer/copy-rights/copy-rights.component';

import { LoaderComponent } from './components/loader/loader.component';

// SERVICES
import { ApiService } from './services/api/api.service';
import { AppEventsService } from './services/app-events/app-events.service';
import { SettingsService } from './services/settings/settings.service';

// MODULES
import { CoursesModule } from '../pages/courses-page/courses/courses.module';

const COMPONENTS = [
    FooterComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    LoaderComponent,
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
        RouterModule,
        CoursesModule,
    ],
    providers: [
        ApiService,
        AppEventsService,
        SettingsService,
    ],
    exports: [ ...COMPONENTS ]
})
export class CommonsModule { }
