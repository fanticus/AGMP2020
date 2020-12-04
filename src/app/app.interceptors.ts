import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {
    HeaderInterceptor
} from './commons/interceptors/header/header.interceptor';

export const APP_INTERCEPTORS = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HeaderInterceptor,
        multi: true
    },
];
