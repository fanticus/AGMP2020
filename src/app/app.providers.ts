// PIPES
import { DurationPipe } from './pages/courses-page/pipes/duration/duration.pipe';
import { FilterPipe } from './pages/courses-page/pipes/filter/filter.pipe';
import { OrderByPipe } from './pages/courses-page/pipes/order-by/order-by.pipe';

export const APP_PROVIDERS = [
    DurationPipe,
    OrderByPipe,
    FilterPipe,
];
