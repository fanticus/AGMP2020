// SERVICES
import { ModalsService } from './modals/services/modals/modals.service';
import { CoursesService } from './pages/courses-page/services/courses/courses.service';
import { CoursesApiService } from './pages/courses-page/services/courses-api/courses-api.service';
import { ApiService } from './commons/services/api/api.service';
import { SettingsService } from './commons/services/settings/settings.service';
import { UtilitiesService } from './commons/services/utilities/utilities.service';
import { AuthService } from './commons/auth/services/auth/auth.service';
import { AuthApiService } from './commons/auth/services/auth-api/auth-api.service';
import { AppEventsService } from './commons/services/app-events/app-events.service';

// PIPES
import { DurationPipe } from './commons/pipes/duration/duration.pipe';
import { FilterPipe } from './pages/courses-page/pipes/filter/filter.pipe';
import { OrderByPipe } from './pages/courses-page/pipes/order-by/order-by.pipe';

export const APP_PROVIDERS = [
    ModalsService,
    CoursesService,
    CoursesApiService,
    ApiService,
    SettingsService,
    UtilitiesService,
    AuthService,
    AuthApiService,
    AppEventsService,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
];
