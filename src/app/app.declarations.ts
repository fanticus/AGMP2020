// COMPONENTS
import { AppComponent } from './app.component';

import { HeaderComponent } from './commons/components/header/header.component';
import { LogoComponent } from './commons/components/logo/logo.component';
import { UserComponent } from './commons/components/header/user/user.component';
import {
    BreadcrumpsComponent
} from './commons/components/breadcrumps/breadcrumps.component';

import { CoursesPageComponent } from './pages/courses-page/components/courses-page.component';
import {
    CourseItemComponent
} from './pages/courses-page/components/course-item/course-item.component';
import {
    SearchBarComponent
} from './pages/courses-page/components/search-bar/search-bar.component';

import { FooterComponent } from './commons/components/footer/footer.component';
import { CopyRightsComponent } from './commons/components/footer/copy-rights/copy-rights.component';

import { LoginPageComponent } from './pages/login-page/components/login-page.component';
import { LoginFormComponent } from './pages/login-page/components/login-form/login-form.component';
import { FormComponent } from './commons/components/form/form.component';
import { FormFieldComponent } from './commons/components/form/form-field/form-field.component';

import { CoursePageComponent } from './pages/course-page/components/course-page.component';
import {
    CourseFormComponent
} from './pages/course-page/components/course-form/course-form.component';

import { NotFoundPageComponent } from './pages/not-found-page/components/not-found-page.component';

import { ModalsOverlayComponent } from './modals/components/modals-overlay/modals-overlay.component';
import {
    ConfirmModalComponent
} from './modals/components/modal-types/confirm-modal/confirm-modal.component';

// PIPES
import { DurationPipe } from './commons/pipes/duration/duration.pipe';
import { OrderByPipe } from './pages/courses-page/pipes/order-by/order-by.pipe';
import { FilterPipe } from './pages/courses-page/pipes/filter/filter.pipe';

// DIRECTIVES
import {
    CourseHighlightDirective
} from './pages/courses-page/directives/course-highlight/course-highlight.directive';
import { ModalHostDirective } from './modals/directives/modal-host.directive';

export const APP_DECLARATIONS = [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    UserComponent,
    BreadcrumpsComponent,
    CoursesPageComponent,
    LoginPageComponent,
    CoursePageComponent,
    NotFoundPageComponent,
    CourseFormComponent,
    CourseItemComponent,
    LoginFormComponent,
    FormComponent,
    FormFieldComponent,
    SearchBarComponent,
    FooterComponent,
    CopyRightsComponent,
    ModalsOverlayComponent,
    ConfirmModalComponent,
    CourseHighlightDirective,
    ModalHostDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
];
