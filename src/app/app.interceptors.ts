import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {
    HeaderInterceptor
} from './commons/interceptors/header/header.interceptor';
import {
    LoaderInterceptor
} from './commons/interceptors/loader/loader.interceptor';

export const APP_INTERCEPTORS = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: LoaderInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HeaderInterceptor,
        multi: true
    },
];
