// SERVICES
import { AuthService } from './commons/services/auth/auth.service';
import { ModalsService } from './modals/services/modals/modals.service';
import { CoursesService } from './pages/courses-page/services/courses/courses.service';

// PIPES
import { DurationPipe } from './pages/courses-page/pipes/duration/duration.pipe';
import { FilterPipe } from './pages/courses-page/pipes/filter/filter.pipe';
import { OrderByPipe } from './pages/courses-page/pipes/order-by/order-by.pipe';

export const APP_PROVIDERS = [
    AuthService,
    ModalsService,
    CoursesService,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
];
