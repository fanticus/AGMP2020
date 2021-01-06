// COMPONENTS
import { AppComponent } from './app.component';

import { HeaderComponent } from './commons/components/header/header.component';
import { LogoComponent } from './commons/components/logo/logo.component';
import { UserComponent } from './commons/components/header/user/user.component';
import {
    BreadcrumbsComponent
} from './commons/components/breadcrumbs/breadcrumbs.component';

import {
    CoursesListPageComponent
} from './pages/courses-page/pages/courses-list-page/components/courses-list-page.component';
import {
  CourseItemComponent
} from './pages/courses-page/pages/courses-list-page/components/course-item/course-item.component';
import {
    SearchBarComponent
} from './pages/courses-page/pages/courses-list-page/components/search-bar/search-bar.component';

import { FooterComponent } from './commons/components/footer/footer.component';
import { CopyRightsComponent } from './commons/components/footer/copy-rights/copy-rights.component';

import { CoursePageComponent } from './pages/courses-page/pages/course-page/components/course-page.component';
import {
    CourseFormComponent
} from './pages/courses-page/pages/course-page/components/course-form/course-form.component';

import { LoginPageComponent } from './pages/login-page/components/login-page.component';
import { LoginFormComponent } from './pages/login-page/components/login-form/login-form.component';
import { FormComponent } from './form/components/form/form.component';
import { FormFieldComponent } from './form/components/form/form-field/form-field.component';

import { NotFoundPageComponent } from './pages/not-found-page/components/not-found-page.component';

import { ModalsOverlayComponent } from './modals/components/modals-overlay/modals-overlay.component';
import {
    ConfirmModalComponent
} from './modals/components/modal-types/confirm-modal/confirm-modal.component';

import { LoaderComponent } from './commons/components/loader/loader.component';

// PIPES
import { FilterPipe } from './pages/courses-page/pages/courses-list-page/pipes/filter/filter.pipe';
import { OrderByPipe } from './pages/courses-page/pages/courses-list-page/pipes/order-by/order-by.pipe';
import { DurationPipe } from './pages/courses-page/courses/pipes/duration/duration.pipe';

// DIRECTIVES
import {
    CourseHighlightDirective
} from
'./pages/courses-page/pages/courses-list-page/directives/course-highlight/course-highlight.directive';
import { ModalHostDirective } from './modals/directives/modal-host.directive';

export const APP_DECLARATIONS = [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    UserComponent,
    BreadcrumbsComponent,
    CoursesListPageComponent,
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
    LoaderComponent,
    CourseHighlightDirective,
    ModalHostDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
];
