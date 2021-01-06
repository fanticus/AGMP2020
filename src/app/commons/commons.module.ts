import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// COMPONENTS
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';

import { UserComponent } from './components/header/user/user.component';

import { CopyRightsComponent } from './components/footer/copy-rights/copy-rights.component';

import { LoaderComponent } from './components/loader/loader.component';

import { SelectComponent } from './components/fields/select/select.component';
import { AuthorsSelectComponent } from './components/authors-select/authors-select.component';

// SERVICES
import { ApiService } from './services/api/api.service';
import { AppEventsService } from './services/app-events/app-events.service';
import { SettingsService } from './services/settings/settings.service';

// DIRECTIVES
import { AutoFocusDirective } from './directives/auto-focus/auto-focus.directive';

// PIPES
import { DurationPipe } from './pipes/duration/duration.pipe';

// MODULES
import { CoursesModule } from '../pages/courses-page/courses/courses.module';

const COMPONENTS = [
    FooterComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    LoaderComponent,
    AuthorsSelectComponent,
    SelectComponent,
    DurationPipe,
    AutoFocusDirective,
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
        FormsModule,
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
