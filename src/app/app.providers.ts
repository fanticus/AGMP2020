// SERVICES
import { ModalsService } from './modals/services/modals/modals.service';
import { CoursesService } from './pages/courses-page/courses/services/courses/courses.service';
import {
    CoursesApiService
} from './pages/courses-page/courses/services/courses-api/courses-api.service';
import {
    CoursesUtilitiesService
} from './pages/courses-page/courses/services/courses-utilities/courses-utilities.service';
import { ApiService } from './commons/services/api/api.service';
import { SettingsService } from './commons/services/settings/settings.service';
import { AuthService } from './auth/services/auth/auth.service';
import { AuthApiService } from './auth/services/auth-api/auth-api.service';
import { AuthUtilitiesService } from './auth/services/auth-utilities/auth-utilities.service';
import { AppEventsService } from './commons/services/app-events/app-events.service';
import { FormValidationService } from './form/services/form-validation/form-validation.service';

// PIPES
import { DurationPipe } from './commons/pipes/duration/duration.pipe';
import { FilterPipe } from './pages/courses-page/pages/courses-list-page/pipes/filter/filter.pipe';
import { OrderByPipe } from './pages/courses-page/pages/courses-list-page/pipes/order-by/order-by.pipe';

export const APP_PROVIDERS = [
    ModalsService,
    CoursesService,
    CoursesApiService,
    CoursesUtilitiesService,
    ApiService,
    SettingsService,
    AuthService,
    AuthApiService,
    AuthUtilitiesService,
    AppEventsService,
    FormValidationService,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
];
